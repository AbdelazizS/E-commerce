<template>
  <!-- Breadcrumb -->
  <nav class="flex py-3 border bg-muted-foreground/5" aria-label="Breadcrumb">
    <Container>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <RouterLink to="/">
                {{ $t('home_page') }}
              </RouterLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="rtl:rotate-180" v-if="$slots.root" />
          <BreadcrumbItem v-if="$slots.root">
            <BreadcrumbLink>
              <RouterLink :to="`/${props.rootRoute}`">
                <slot name="root"></slot>
              </RouterLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="rtl:rotate-180" v-if="$slots.base" />
          <BreadcrumbItem v-if="$slots.base">
            <BreadcrumbLink>
              <RouterLink :to="`/${props.baseRoute}`">
                <slot name="base"></slot>
              </RouterLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="rtl:rotate-180" />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <slot />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  </nav>
</template>

<script setup>
import Container from '@/layouts/Container.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const props = defineProps({
  baseRoute: String,
  rootRoute: String
})

console.log(props)
</script>
