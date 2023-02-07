import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import JudyHome from '../views/JudyHome.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/forJudy',
    name: 'forJudy',
    component: JudyHome
  },
  {
    path: '/sample',
    name: 'sample',
    component: JudyHome
  },
  {
    path: '/album/sea',
    name: 'sea',
    component: () => import('../views/SeaAlbum')
  },
  {
    path: '/album/mountain',
    name: 'mountain',
    component: () => import('../views/MountainAlbum')
  },
  {
    path: '/album/badminton',
    name: 'badminton',
    component: () => import('../views/BadmintonAlbum')
  },
  {
    path: '/album/celebration',
    name: 'celebration',
    component: () => import('../views/CelebrationAlbum')
  },
  {
    path: '/card/Fish',
    name: 'FishCard',
    component: () => import('../views/FishCard')
  },
  {
    path: '/card/Kiki',
    name: 'KikiCard',
    component: () => import('../views/KikiCard')
  },
  {
    path: '/card/Sally',
    name: 'SallyCard',
    component: () => import('../views/SallyCard')
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  if (store.state.login === false && to.name !== 'login') {
    next({ name: 'login' })
  }

  next()
})


export default router

