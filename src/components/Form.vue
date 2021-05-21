<template>
  <div>
    <h1>{{ formTitle }}</h1>
    <form>
      <slot/>
    </form>
  </div>
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