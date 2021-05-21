import { createRouter, createWebHistory } from 'vue-router'
import PasswordRetrieve from '../views/PasswordRetrieve.vue'
import SingIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'SingIn',
        component: SingIn
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/PasswordRetrieve',
        name: 'PasswordRetrieve',
        component: PasswordRetrieve
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router