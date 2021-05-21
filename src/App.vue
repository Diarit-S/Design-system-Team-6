<template>
  <router-view/>
  <Button>Valider</Button>
  <!-- <FormElementGroup label="Pseudo">
    <InputField/>
  </FormElementGroup> -->
</template>

<script>
import Button from '@/components/Button.vue';
/* import InputField from '@/components/Fields/InputField.vue'
import FormElementGroup from '@/components/FormElementGroup.vue' */

export default {
  name: 'App',
  components: {
    Button,
    /* InputField,
    FormElementGroup */
  }
}
</script>

<style>
#app {
  
}
</style>
