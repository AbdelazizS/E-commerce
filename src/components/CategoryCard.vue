<template>
  <div
    class="bg-primary/10 dark:bg-card shadow-p p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black/50 before:absolute before:inset-0 before:opacity-10 before:transition-all w-full max-w-sm"
  >
    <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
      <img
        src="/src/assets/watch.png"
        alt="product8"
        class="h-full w-full object-contain rtl:object-left ltr:object-right"
      />
    </div>

    <div
      class="absolute bottom-0 z-50 group-hover:bottom-2 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-300"
    >
      <h3 class="text-xl font-bold text-orange-500 rounded-sm">
        {{ title }}
      </h3>

      <RouterLink :to="`/category/${id}`">
        <span
          class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-sm"
        >
          {{ $t(`home.shop_now`) }}
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})

const { id, title } = props.item
</script>
