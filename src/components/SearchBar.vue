<template>
  <div class="w-full">
    <form
      class="shadow-sm focus-within:shadow-md transition-all duration-300 text-foreground flex max-xl:w-full px-2 py-1 rounded-md border items-center bg-muted/30"
      @submit.prevent="SearchFilter()"
    >
      <input
        class="flex h-10 bg-transparent w-full rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-0"
        v-model="searchQuery"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="$t('search_here')"
      />
    </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  search_bar: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const searchQuery = ref(`${route.params.q ? route.params.q.slice(2) : ''}`)
const router = useRouter()

const SearchFilter = () => {
  const query = searchQuery.value
  console.log(query)
  router.push(`/search/q=${query}`)
}
</script>

<!-- <template>
  <form @submit.prevent="filterBysearch()" class="search-bar relative">
    <div class="flex relative">
      <input
        class="Main shadow-md transition-all focus:shadow-lg dark:shadow-slate-700 relative rounded-full text-base text-black placeholder-gray-400 md:text-xl dark:bg-gray-100"
        type="text"
        :placeholder="$t(`home.searchbar.placeholder`)"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
      />

      <button type="submit">
        <img
          @click="emit('filterBysearch', modelValue)"
          src="../assets/svgFiles/search.svg"
          class="absolute search-icon"
          alt=""
        />
      </button>
    </div>
  </form>
</template> -->
