<template>
  <input :type="type" :name="name" class="common-input-field">
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
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/vars';
@import '@/styles/colors';

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
}
</style>
