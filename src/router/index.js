import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/Main'
import SighUp from '@/components/pages/SignUp'
import SignIn from '@/components/pages/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/sign-up',
      name: 'SighUp',
      component: SighUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
