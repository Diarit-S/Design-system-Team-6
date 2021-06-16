<template>
    <FormLayout>
        <Form formTitle="Sign In" submitLabel="Sign In">
            <FormElementGroup label="Email" name="email" type="email" placeholder="Placeholder">
            </FormElementGroup>
            <FormElementGroup label="Password" name="password" type="password" placeholder="Placeholder">
            </FormElementGroup>
        </Form>
    </FormLayout>
</template>

<script>
import FormLayout from "@/layout/FormLayout.vue";
import FormElementGroup from '@/components/FormElementGroup.vue'
import Form from '@/components/Form.vue'

export default {
    name: 'SignUp',
    components: {
        FormLayout,
        FormElementGroup,
        Form
    }
}
</script>

