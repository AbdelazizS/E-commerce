<template>
  <Navbar />
  <BottomNav> Apple iMac 24 </BottomNav>

  <Container>
    <div class="py-8 md:py-16">
      <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Image -->
        <div class="space-y-4 text-center lg:sticky top-4 mx-auto lg:m-0">
          <Carousel class="relative w-full sm:max-w-xl" @init-api="(val) => (emblaMainApi = val)">
            <CarouselContent>
              <CarouselItem v-for="(_, index) in 3" :key="index">
                <div class="p-1">
                  <Card class="bg-muted/50 sm:h-[450px] flex items-center justify-center">
                    <CardContent class="">
                      <img
                        src="/src/assets/pc.png"
                        alt="Product"
                        class="w-full max-h-full object-cover object-center"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <!-- <CarouselPrevious /> -->
            <!-- <CarouselNext /> -->
          </Carousel>

          <Carousel
            class="relative w-full max-w-lg lg:max-w-xl"
            @init-api="(val) => (emblaThumbnailApi = val)"
          >
            <CarouselContent class="flex gap-1 ms-0 dir-rtl">
              <CarouselItem
                v-for="(_, index) in 3"
                :key="index"
                class="ps-0 basis-1/3 md:basis-1/4 cursor-pointer"
                @click="onThumbClick(index)"
              >
                <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-2">
                      <img
                        src="/src/assets/pc.png"
                        alt="Product"
                        class="w-full max-h-full object-contain object-top"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <!-- <div class="bg-muted/80 p-4 flex items-center sm:h-[380px] rounded-md">
            <img
              src="/src/assets/pc.png"
              alt="Product"
              class="w-full max-h-full object-contain object-top"
            />
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="bg-muted p-4 flex items-center rounded sm:h-[182px]">
              <img
                src="/src/assets/pc.png"
                alt="Product"
                class="w-full max-h-full object-contain object-top"
              />
            </div>
            <div class="bg-muted p-4 flex items-center rounded sm:h-[182px]">
              <img
                src="/src/assets/pc.png"
                alt="Product"
                class="w-full max-h-full object-contain object-top"
              />
            </div>

            <div class="bg-muted p-4 flex items-center rounded sm:h-[182px]">
              <img
                src="/src/assets/pc.png"
                alt="Product"
                class="w-full max-h-full object-contain object-top"
              />
            </div>
          </div> -->
        </div>

        <!-- Details -->

        <div class="max-w-xl py-1 mx-auto lg:m-0">
          <!-- Title -->
          <div>
            <h2 class="text-2xl font-bold text-foreground">Apple iMac 24</h2>
            <p class="text-sm text-muted-foreground mt-2">Computers</p>
          </div>

          <!-- Reviews -->
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center gap-1">
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
            </div>
            <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
            <a
              href="#"
              class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
              345 Reviews
            </a>
          </div>

          <!-- price -->
          <div class="mt-4">
            <!-- <h3 class="text-foreground text-3xl font-bold">$30</h3> -->
            <div class="flex items-center gap-2">
              <p class="text-xl sm:text-2xl font-bold text-foreground">$20.00</p>
              <p class="text-base font-medium h-6 line-through text-muted-foreground/50">$25.00</p>
            </div>
          </div>

          <!-- Description -->
          <div class="mt-4">
            <p class="text-muted-foreground">
              Step up your footwear game with our premium men's shoes. Designed for comfort and
              crafted with a contemporary aesthetic, these versatile shoes are a must-have addition
              to your wardrobe. The supple and breathable materials ensure all-day comfort, making
              them perfect for everyday wear
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 mt-8">
            <!-- <button
            type="button"
            class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
          >
            Buy now
          </button> -->

            <Button variant="default" class="gap-2">
              {{ $t('home.add_to_cart') }}

              <ShoppingBag class="size-5 text-white" />
            </Button>
            <Button variant="outline" class="btn gap-2">
              <Heart
                @click="setFav()"
                :class="`size-5 hover:scale-105 transition-all duration-300 ${
                  fill ? `text-red-500 fill-red-500` : `text-muted-foreground`
                }`"
                class="`${(rate.people / data.views) * 100}`"
              />
            </Button>
          </div>

          <!-- More Details -->
          <div class="mt-12 md:mt-16">
            <Tabs default-value="specification" class="dir-rtl">
              <TabsList class="grid w-full grid-cols-2 pb-2 dir-rtl">
                <TabsTrigger value="specification">
                  {{ $t('product_details.specifications') }}
                </TabsTrigger>
                <TabsTrigger value="reviews"> {{ $t('product_details.reviews') }} </TabsTrigger>
              </TabsList>
              <TabsContent value="reviews">
                <div class="mt-8 max-w-lg">
                  <h3 class="text-lg font-bold text-foreground">
                    {{ $t('product_details.customers_reviews') }}
                  </h3>
                  <div class="space-y-3 mt-4">
                    <div class="flex items-center">
                      <p class="text-sm text-foreground font-bold">5.0</p>
                      <svg
                        class="w-4 h-4 text-yellow-300 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>

                      <progress
                        aria-labelledby="rating-label"
                        id="rating"
                        max="100"
                        value="70"
                        class="mx-2 [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400 block h-2 w-full overflow-hidden rounded"
                      ></progress>
                      <p class="text-sm text-foreground font-bold">66%</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-sm text-foreground font-bold">5.0</p>
                      <svg
                        class="w-4 h-4 text-yellow-300 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>

                      <progress
                        aria-labelledby="rating-label"
                        id="rating"
                        max="100"
                        value="70"
                        class="mx-2 [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400 block h-2 w-full overflow-hidden rounded"
                      ></progress>
                      <p class="text-sm text-foreground font-bold">66%</p>
                    </div>
                  </div>

                  <div class="flex items-start mt-8 mb-4 border p-2 rounded-sm">
                    <div
                      class="font-bold bg-muted items-center w-16 h-9 rounded-full border-2 flex justify-center"
                    >
                      J
                    </div>
                    <div class="mx-3">
                      <h4 class="text-sm font-bold">John Doe</h4>
                      <div class="flex space-x-1 mt-1">
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                          />
                        </svg>

                        <svg
                          class="w-4 fill-muted"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                          />
                        </svg>
                        <svg
                          class="w-4 fill-muted"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                          />
                        </svg>
                        <p class="text-xs !ms-2 font-semibold">2 mins ago</p>
                      </div>
                      <p class="text-xs mt-4 text-muted-foreground">
                        The service was amazing. I never had to wait that long for my food. The
                        staff was friendly and attentive, and the delivery was impressively prompt.
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" class="w-full">
                    {{ $t('product_details.read_all') }}
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="specification">
                <div class="mt-8">
                  <h3 class="text-lg font-bold text-foreground">
                    {{ $t('product_details.product_specifications') }}
                  </h3>
                </div>

                <ul class="space-y-3 list-disc mt-6 ps-4 text-sm text-foreground">
                  <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                  <li>
                    Available in a wide range of sizes, from extra small to extra large, and even in
                    tall and petite sizes.
                  </li>
                  <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                  <li>
                    Personalize them with your own designs, patterns, or embellishments to make them
                    uniquely yours.
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          <!-- Customer Review -->
        </div>
      </div>
    </div>
  </Container>

  <!-- Related Products -->

  <Container>
    <div class="py-8 md:py-16">
      <h2
        class="border-b pb-4 text-2xl md:text-3xl text-foreground font-semibold mb-6 md:mb-8 leading-tight"
      >
        {{ $t('product_details.related_products') }}
      </h2>

      <div
        class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
      >
        <ProductCard v-for="item in newItems" :key="item.id" :item="item" />
      </div>
    </div>
  </Container>

  <Footer />
</template>

<script setup>
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar.vue'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
import { Heart, ShoppingBag } from 'lucide-vue-next'
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const emblaMainApi = ref()
const emblaThumbnailApi = ref()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

const fill = ref(false)

function setFav() {
  fill.value = fill.value === true ? false : true
}

const newItems = ref([
  {
    title: 'Mega LCD TV For Sports',
    id: 1,
    price: 440,
    pre_price: 500,
    img: '../assets/pc.png',
    category: 'Computers',
    stars: 4
  },
  {
    title: 'Apple Watch',
    id: 2,
    img: '../assets/watch.png',
    category: 'Accessories',
    price: 240,
    pre_price: 400.0,
    stars: 2
  },
  {
    title: 'Iphone X',
    id: 3,
    img: '../assets/squares-bg.png',
    category: 'Phones',
    price: 840,
    pre_price: 900.0,
    stars: 3
  }
])

let rating = [
  {
    total: '4.8',
    reviews: '198',
    views: '58',
    stars: {
      one: {
        name: '1',
        people: '7'
      },
      two: {
        name: '2',
        people: '35'
      },

      three: {
        name: '3',
        people: '5'
      }
    }
  }
]
</script>
