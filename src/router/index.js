import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/account/Login.vue')
  },
  {
    path: '/subject/companies',
    name: 'Companies',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/companies/Company-List.vue')
  },
  {
    path: '/subject/companies/add',
    name: 'AddCompany',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/companies/Add-Company.vue')
  },
  {
    path: '/subject/companies/:id/detail',
    name: 'CompanyDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/companies/Company-Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
