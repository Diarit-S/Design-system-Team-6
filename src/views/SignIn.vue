<template>
    <FormLayout>
        <Form formTitle="Sign In" submitLabel="Sign In">
            <FormElementGroup label="Email">
                <InputField type="email" name="email" placeholder="Placeholder"/>
            </FormElementGroup>
            <FormElementGroup label="Password">
                <InputField type="password" name="password" placeholder="Placeholder"/>
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
    name: 'SignUp',
    components: {
        FormLayout,
        InputField,
        FormElementGroup,
        Form
    }
}
</script>

