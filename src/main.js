// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Firebase from 'firebase/app'

Vue.config.productionTip = false

/* eslint-disable */
const firebaseConfig = {
  apiKey:             process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain:         process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:        process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId:          process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket:      process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

Firebase.initializeApp(firebaseConfig)
Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(Buefy)
