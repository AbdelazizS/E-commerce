<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
    <div
      class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16"
    >
      <div class="lg:col-span-5 lg:mt-0">
        <a href="#">
          <img
            class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
            alt="peripherals"
          />
          <img
            class="mb-4 hidden dark:block md:h-full"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
            alt="peripherals"
          />
        </a>
      </div>
      <div class="me-auto place-self-center lg:col-span-7">
        <h1
          class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl"
        >
          Save $500 today on your purchase <br />
          of a new iMac computer.
        </h1>
        <p class="mb-6 text-gray-500 dark:text-gray-400">
          Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified
          activation. Pre-order now to secure your discount.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Pre-order now
        </a>
      </div>
    </div>
  </section>

  <!-- component -->
  <div class="relative overflow-hidden bg-white">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-75"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
    </div>

    <!-- Callout -->
    <section
      aria-labelledby="sale-heading"
      class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2
          id="sale-heading"
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Get 25% off during our one-time sale
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">
          Most of our products are limited releases that won't come back. Get your favorite items
          while they're in stock.
        </p>
        <a
          href="#"
          class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto"
          >Get access to our one-time sale</a
        >
      </div>
    </section>

    <!-- Testimonials -->
    <section
      aria-labelledby="testimonial-heading"
      class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">
          What are people saying?
        </h2>

        <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                My order arrived super quickly. The product is even better than I hoped it would be.
                Very happy customer over here!
              </p>
              <cite class="mt-4 block font-semibold not-italic text-gray-900"
                >Shehab , England</cite
              >
            </div>
          </blockquote>
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                I had to return a purchase that didn’t fit. The whole process was so simple that I
                ended up ordering two new items!
              </p>
              <cite class="mt-4 block font-semibold not-italic text-gray-900">Najib, malaysia</cite>
            </div>
          </blockquote>
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s
                just so convenient, and I know the quality will always be there.
              </p>
              <cite class="mt-4 block font-semibold not-italic text-gray-900"
                >Yousef, New York</cite
              >
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div>

  <section class="py-24 relative">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-12 gap-y-11">
        <div
          class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto"
        >
          <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">
            Lowest Prices Best Quality Shoppings
          </h2>
          <div
            class="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]"
          >
            <div
              class="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200"
            >
              <button
                class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M11.7143 19.75C11.7143 20.5784 11.0235 21.25 10.1714 21.25C9.31933 21.25 8.62857 20.5784 8.62857 19.75M17.8857 19.75C17.8857 20.5784 17.195 21.25 16.3429 21.25C15.4908 21.25 14.8 20.5784 14.8 19.75M4.51429 6.25L5.96114 13.9854C6.25319 15.5468 6.39921 16.3275 6.95475 16.7887C7.51029 17.25 8.30451 17.25 9.89296 17.25H16.6218C18.2103 17.25 19.0046 17.25 19.5601 16.7887C20.1157 16.3274 20.2617 15.5467 20.5537 13.9852L21.1146 10.9852C21.5248 8.79152 21.7299 7.69469 21.1301 6.97234C20.5303 6.25 19.4144 6.25 17.1827 6.25H4.51429ZM4.51429 6.25L4 3.25"
                    stroke="#4F46E5"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <p class="font-medium text-sm text-black">Free delivery</p>
            </div>
            <div class="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200">
              <button
                class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.25C20 11.9069 16.4183 13.25 12 13.25C7.58172 13.25 4 11.9069 4 10.25M20 14.25C20 15.9069 16.4183 17.25 12 17.25C7.58172 17.25 4 15.9069 4 14.25M20 18.25C20 19.9069 16.4183 21.25 12 21.25C7.58172 21.25 4 19.9069 4 18.25M20 6.25C20 7.90685 16.4183 9.25 12 9.25C7.58172 9.25 4 7.90685 4 6.25C4 4.59315 7.58172 3.25 12 3.25C16.4183 3.25 20 4.59315 20 6.25Z"
                    stroke="#4F46E5"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <p class="font-medium text-sm text-black">Cash on delivery</p>
            </div>
            <div class="flex items-center gap-4 pl-6">
              <button
                class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19.25L20 3.25M10 5.75C10 7.683 8.433 9.25 6.5 9.25C4.567 9.25 3 7.683 3 5.75C3 3.817 4.567 2.25 6.5 2.25C8.433 2.25 10 3.817 10 5.75ZM21 16.75C21 18.683 19.433 20.25 17.5 20.25C15.567 20.25 14 18.683 14 16.75C14 14.817 15.567 13.25 17.5 13.25C19.433 13.25 21 14.817 21 16.75Z"
                    stroke="#4F46E5"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <p class="font-medium text-sm text-black">Best discount</p>
            </div>
          </div>

          <a
            href="javascript:;"
            class="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-indigo-600 transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14119_17549)">
                <path d="M10 0.5L20 20.5L10 17.1263L0 20.4794L10 0.5Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_14119_17549">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <span class="px-2 font-semibold text-base text-white">Download the app</span>
          </a>
        </div>
        <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto">
          <img
            src="https://pagedone.io/asset/uploads/1701234779.png"
            alt="Warehouse image"
            class="w-full h-full max-lg:rounded-3xl lg:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
