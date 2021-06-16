<template>
    <FormLayout>
        <Form formTitle="Create your account" submitLabel="Sign In">
            <FormElementGroup label="Pseudo" type="text" name="name" placeholder="Placeholder"/>
            <FormElementGroup label="Email" type="email" name="email" placeholder="Placeholder"/>
            <FormElementGroup label="Password" type="password" name="password" placeholder="Placeholder"/>
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