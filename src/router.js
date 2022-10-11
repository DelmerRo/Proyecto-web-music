import Vue from "vue"
import VueRouter from "vue-router"

import Home from './components/Home.vue'
import Theme from './components/Theme.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/home', component: Home },
        { path: '/theme/:nomTema', component: Theme, name:'n-theme'}
]
})


