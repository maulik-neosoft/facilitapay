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
      import('../views/account/Login.vue')
  },
  {
    path: '/subject/companies',
    name: 'Companies',
    component: () =>
      import('../views/companies/Company-List.vue')
  },
  {
    path: '/subject/companies/add',
    name: 'AddCompany',
    component: () =>
      import('../views/companies/Add-Company.vue')
  },
  {
    path: '/subject/companies/:id/detail',
    name: 'CompanyDetail',
    component: () =>
      import('../views/companies/Company-Detail.vue')
  },
  {
    path: '/subject/people',
    name: 'People',
    component: () =>
      import('../views/people/List.vue')
  },
  {
    path: '/subject/people/add',
    name: 'AddPeople',
    component: () =>
      import('../views/people/Add.vue')
  },
  {
    path: '/subject/people/:id/detail',
    name: 'PeopleDetail',
    component: () =>
      import('../views/people/Detail.vue')
  },
  {
    path: '/subject/bank-account',
    name: 'BankAccount',
    component: () =>
      import('../views/bank-account/List.vue')
  },
  {
    path: '/subject/bank-account/add',
    name: 'AddBankAccount',
    component: () =>
      import('../views/bank-account/Add.vue')
  },
  {
    path: '/subject/bank-account/:id/detail',
    name: 'BankAccountDetail',
    component: () =>
      import('../views/bank-account/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
