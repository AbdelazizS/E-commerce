<template>
  <div
    :class="'fixed bg-black/5 dark:bg-black/20 inset-0'"
    class="z-50 flex items-center justify-center left-0 top-0"
  >
    <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <div class="flex justify-center">
        <div
          class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
          role="status"
          aria-label="loading"
        ></div>
      </div>
    </div>
  </div>
</template>
