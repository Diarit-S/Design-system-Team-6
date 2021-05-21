<template>
  <h1>{{ formTitle }}</h1>
  <form>
    <slot/>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    formTitle: {
      type: String,
      required: true
    }
  }
}
</script>