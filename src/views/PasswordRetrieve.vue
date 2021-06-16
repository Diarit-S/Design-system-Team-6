<template>
  <FormLayout>
    <Form formTitle="Password retrieve" submitLabel="Recover">
      <FormElementGroup label="Email" type="email" name="email" placeholder="Placeholder"/>
    </Form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/layout/FormLayout.vue";
import FormElementGroup from '@/components/FormElementGroup.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'passwordRetrieve',
  components: {
    FormLayout,
    FormElementGroup,
    Form
  }
}
</script>