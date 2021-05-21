<template>
  <Form formTitle="Create your account">
    <FormElementGroup label="Pseudo">
      <InputField type="text" name="name" placeholder="Placeholder"/>
    </FormElementGroup>
    <FormElementGroup label="Pseudo">
      <InputField type="text" name="name" placeholder="Placeholder"/>
    </FormElementGroup>
    <FormElementGroup label="Pseudo">
      <InputField type="text" name="name" placeholder="Placeholder"/>
    </FormElementGroup>
  </Form>
</template>

<script>
import InputField from '@/components/Fields/InputField.vue'
import FormElementGroup from '@/components/FormElementGroup.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'SignUp',
  components: {
    InputField,
    FormElementGroup,
    Form
  }
}
</script>