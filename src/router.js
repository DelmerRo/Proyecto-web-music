import Vue from "vue"
import VueRouter from "vue-router"

import Home from './components/Home'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: './home', component: Home }
],
})

