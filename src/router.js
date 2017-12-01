/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'
import AppCanvas from './components/AppCanvas';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: AppCanvas, name: "home" },
    { path: '/about', component: About , name: "about" },
    { path: '*', redirect: { name: "home" } }
  ]
})

export default router
