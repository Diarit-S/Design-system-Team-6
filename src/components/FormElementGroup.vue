<template>
  <div class="form-element-group">
    <label :for="name">
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormElementGroup',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.form-element-group {
  label {
    display: block;
  }
}
</style>