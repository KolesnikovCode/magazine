import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Delivery from './views/Delivery.vue'
import Registration from './views/Registration.vue'
import Singup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'prod',
      component: Products
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/reg',
      name: 'registration',
      component: Registration
    },
    {
      path: '/sign',
      name: 'signup',
      component: Singup
    }
  ]
})
