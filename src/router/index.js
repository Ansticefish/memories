import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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

export default router
