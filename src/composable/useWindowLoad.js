import { computed, ref, onMounted } from 'vue'

const useWindowLoad = () => {
  const isLoaded = ref(false)

  onMounted(() => {
    window.onload = () => {
      isLoaded.value = true
    }
  })

  return { isLoaded }
}

const usePageReady = () => {
  const { isLoaded: isWindowReady } = useWindowLoad()
  const isTimerReady = ref(false)
  const currentProgress = ref(0)

  const progressStep = (range) => {
    // return Math.floor(Math.random() * range) + 1
    return 1
  }

  const timer = setInterval(() => {
    // const step = progressStep(1)
    const step = 1
    currentProgress.value = currentProgress.value + step
    if (currentProgress.value >= 5) {
      clearInterval(timer)
      isTimerReady.value = true
      return
    }
  }, 200)

  const isReady = computed(() => isWindowReady && isTimerReady.value)

  return { isReady, currentProgress }
}

export { usePageReady }
