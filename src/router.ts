import { createRouter, createWebHistory } from 'vue-router'

import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import CreatePost from './views/CreatePost.vue'
import ColumnDetail from './views/ColumnDetail.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: { requireLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  console.log(next)
  console.log(to.meta.requireLogin as boolean)

  if (to.meta.requireLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
