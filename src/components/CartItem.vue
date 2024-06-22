<script setup>
// import { ref } from 'vue'
import { Button } from './ui/button'
import { useCartStore } from '@/stores/cart.js'
import { useToast } from '@/components/ui/toast/use-toast'

const CartStore = useCartStore()
// const { sortedItems, addItems } = storeToRefs(store)
const { removeItem, decrementQty, incrementQty } = CartStore

const { toast } = useToast()

// const addToCart = (item) => {
//   addItems(item)
// }
const handleDecrement = (item) => {
  decrementQty(item)
  console.log(item)
}
const handleIncrement = (item) => {
  incrementQty(item)
}
const removeFromCart = (item) => {
  removeItem(item.id)
}

const props = defineProps({
  item: Object
})

const { title } = props.item
</script>
<template>
  <div class="rounded-lg border bg-card p-4 shadow-sm md:p-6">
    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" class="shrink-0 md:order-1">
        <img class="h-24 w-24 :hidden" src="/src/assets/pc.png" alt="imac image" />
        <img
          class="hidden h-20 w-20 :block"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-.svg"
          alt="imac image"
        />
      </a>
      <div class="flex items-center justify-between md:order-3 md:justify-end">
        <div class="flex items-center">
          <Button variant="outline" class="h-6 p-2" @click="handleDecrement(item)"
            ><svg
              class="h-2.5 w-2.5 text-foreground"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </Button>

          <input
            type="text"
            id="counter-input"
            data-input-counter
            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-foreground focus:outline-none focus:ring-0"
            placeholder=""
            :value="props.item.quantity"
            required
          />
          <Button variant="outline" class="h-6 p-2" @click="handleIncrement(item)">
            <svg
              class="h-2.5 w-2.5 text-foreground"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </Button>
        </div>
        <div class="text-end md:order-4 md:w-32">
          <p class="text-base font-bold text-foreground">
            ${{ props.item.price * props.item.quantity }}
          </p>
          <!-- <span class="text-sm">{{ price }}*{{ quantity }}</span> -->
        </div>
      </div>

      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a href="#" class="text-lg md:text-xl font-semibold text-foreground hover:underline">
          {{ title }}
        </a>

        <div class="flex items-center gap-4 abs">
          <Button variant="outline" size="icon" class="rounded-full">
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>

            <!-- Add to Favorites -->
          </Button>

          <!-- <button
                type="button"
                class="inline-flex items-center text-sm font-medium text-red-600 hover:underline :text-red-500"
              >
                <svg
                  class="me-1.5 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                Remove

              </button> -->

          <Button
            @click="
              removeFromCart(item),
                toast({
                  title: $t('shopping_cart.removed_success'),
                  success: true,
                  duration: 3000
                })
            "
            variant="outline"
            size="icon"
            class="group rounded-full fill-bg-50 bg-red-50 dark:bg-red-200 transition-all duration-500 hover:bg-red-400 dark:hover:bg-red-500"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle class="" cx="17" cy="17" r="17" fill="" />
              <path
                class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                stroke="#EF4444"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
