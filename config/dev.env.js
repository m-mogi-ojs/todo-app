'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_FIREBASE_API_KEY: '"AIzaSyCSXj6GDimkRfLH7cWr8mm4DaW5Dx1vNLw"',
  VUE_APP_FIREBASE_AUTH_DOMAIN: '"todo-app-577ed.firebaseapp.com"',
  VUE_APP_FIREBASE_DATABASE_URL: '"https://todo-app-577ed.firebaseio.com"',
  VUE_APP_FIREBASE_PROJECT_ID: '"todo-app-577ed"',
  VUE_APP_FIREBASE_STORAGE_BUCKET: '"todo-app-577ed.appspot.com"',
  VUE_APP_FIREBASE_MESSAGING_SENDER_ID: '"414532926687"'
})
