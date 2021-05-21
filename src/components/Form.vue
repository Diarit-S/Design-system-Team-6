<template>
  <div>
    <h1>{{ formTitle }}</h1>
    <form>
      <slot/>
      <Button> {{ submitLabel }} </Button>
    </form>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "Form",
  components: {
    Button
  },
  props: {
    formTitle: {
      type: String,
      required: true
    },
    submitLabel: {
      type: String,
      required: true
    }
  }
}
</script>