<template>
    <FormLayout>
        <Form formTitle="Sign In">
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

