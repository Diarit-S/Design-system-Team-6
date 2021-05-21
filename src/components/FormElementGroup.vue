<template>
  <div class="form-element-group">
    <label :for="name">
      {{ label }}
    </label>
    <slot/>
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
@import '@/styles/vars';

.form-element-group {
  margin-bottom: $form-element-margin-bottom;
  label {
    display: block;
  }
}
</style>