'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_FIREBASE_API_KEY: '',
  VUE_APP_FIREBASE_AUTH_DOMAIN: '',
  VUE_APP_FIREBASE_DATABASE_URL: '',
  VUE_APP_FIREBASE_PROJECT_ID: '',
  VUE_APP_FIREBASE_STORAGE_BUCKET: '',
  VUE_APP_FIREBASE_MESSAGING_SENDER_ID: ''
})
