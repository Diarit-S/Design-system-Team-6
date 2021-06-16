<template>
  <FormLayout>
    <Form formTitle="Password retrieve" submitLabel="Recover">
      <FormElementGroup label="Email">
        <InputField type="email" name="email" placeholder="Placeholder"/>
      </FormElementGroup>
    </Form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/layout/FormLayout.vue";
import InputField from '@/components/Fields/InputField.vue'
import FormElementGroup from '@/components/FormElementGroup.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'passwordRetrieve',
  components: {
    FormLayout,
    InputField,
    FormElementGroup,
    Form
  }
}
</script>