<template>
  <input :type="type" :name="name" class="common-input-field" :placeholder="placeholder">
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: "Field"
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/vars';
@import '@/styles/colors';
@import '@/styles/fonts';

.common-input-field {
  padding: 20px 16px;
  border-radius: $field-border-radius;
  margin: $field-margin;
  border-color: $brand-primary-lighter;
  border-style: solid;

  &:focus {
    outline: none;
    border-color: $brand-primary-initial;
  }

  &::placeholder {
    @include input-placeholder-font-style
  }
}
</style>
