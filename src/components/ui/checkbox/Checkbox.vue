<script setup>
import { computed } from 'vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

// const props = defineProps({
//   defaultChecked: { type: Boolean, required: false },
//   checked: { type: [Boolean, String], required: false },
//   disabled: { type: Boolean, required: false },
//   required: { type: Boolean, required: false },
//   name: { type: String, required: false },
//   label: { label: String, required: false },
//   value: { type: String, required: false },
//   id: { type: String, required: false },
//   asChild: { type: Boolean, required: false },
//   as: { type: null, required: false },
//   class: { type: null, required: false }
// })
const emits = defineEmits(['update:checked'])

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)

import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  hide_error: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  successMessage: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const name = toRef(props, 'name')
const hide_error = toRef(props, 'hide_error')
const {
  value: inputValue,
  errorMessage,
  // handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})

console.log(meta)
</script>

<template>
  <div class="flex items-center gap-1">
    <CheckboxRoot
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      v-bind="forwarded"
      :class="
        cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          props.class
        )
      "
    >
      <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
        <slot>
          <Check class="h-4 w-4" />
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>

    <label :class="{ ' text-red-500': !meta.valid, success: meta.valid }" for="terms" class="">{{
      props.label
    }}</label>
  </div>
</template>
