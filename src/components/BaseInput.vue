<template>
  <div class="TextInput" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label class="block mb-2 text-sm md:text-base text-foreground" :for="name">{{
      label
    }}</label>
    <input
      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:opacity-50 outline-0"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
    />

    <p class="text-red-400" v-if="errorMessage">
      {{ $t(`${errorMessage}`) }}
    </p>
  </div>
</template>

<script>
import { toRef } from "vue";
import { useField } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // use `toRef` to create reactive references to `name` prop which is passed to `useField`
    // this is important because vee-validte needs to know if the field name changes
    // https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
    const name = toRef(props, "name");

    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const { value: inputValue, errorMessage, handleBlur, handleChange, meta } = useField(
      name,
      undefined,
      {
        initialValue: props.value,
      }
    );

    return {
      handleChange,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>
