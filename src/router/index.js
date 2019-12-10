import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Katalog from '../views/Katalog.vue'
import RestaurantPage from '../views/RestaurantPage.vue'
import BookPage from '../views/BookPage.vue'
import Invoice from '../views/Invoice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/katalog',
    name: 'katalog',
    component: Katalog
  },
  {
    path: '/katalog/get',
    name: 'getKatalog',
    component: Katalog
  },
  {
    path: '/user/login',
    name: 'login',
    component: Home
  },
  {
    path: '/restaurant/1',
    name: 'restaurant',
    component: RestaurantPage
  },
  {
    path: '/restaurant/1/book',
    name: 'book',
    component: BookPage
  },
  {
    path: '/order/12342069',
    name: 'invoice',
    component: Invoice
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
