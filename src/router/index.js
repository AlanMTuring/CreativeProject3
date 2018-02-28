import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photos from '@/components/Photos'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Music from '@/components/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Conact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Photos',
      name: 'Photos',
      component: Photos
    },
  ]
})
