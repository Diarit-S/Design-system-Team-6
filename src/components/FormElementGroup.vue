<template>
  <div class="form-element-group">
    <label :for="name">
      {{ label }}
    </label>
    <input-field :id="name" :type="type" :placeholder="placeholder" :name="name" />
  </div>
</template>

<script>
import InputField from '@/components/Fields/InputField.vue'

export default {
  name: 'FormElementGroup',
  components: {
    InputField
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    type: {
      type: String,
      default: "text"
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