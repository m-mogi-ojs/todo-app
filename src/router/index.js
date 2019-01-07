import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase/app'
import 'firebase/auth'
import Service from '@/components/pages/Service'
import Top from '@/components/pages/Top'
import SignUp from '@/components/pages/SignUp'
import SignIn from '@/components/pages/SignIn'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Top', component: Top },
    { path: '/service', name: 'Service', component: Service, meta: { requiresAuth: true } },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/sign-in', name: 'SignIn', component: SignIn }
  ]
})

router.beforeEach((to, from, next) => {
  // 認証チェック
  const isRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (isRequiresAuth) {
    Firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        // 認証情報がない場合はログインページへリダイレクト
        next({
          path: '/sign-in',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
