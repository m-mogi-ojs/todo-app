#!/bin/bash
#This script is set dev.env.js
#しかしFirebaseのAPIKeyとかは機密情報じゃないのでいらなくなった

ENV_TMP="./env.tmp"
ENV_FILE="../config/dev.env.js"

if [ ! -f ./env.tmp ]; then
  touch $ENV_TMP
  echo "Please fill in env.tmp"
fi

ENV_VAL_LIST=("apiKey" "authDomain" "databaseURL" "projectId" "storageBucket" "messagingSenderId")
VUE_ENV_VAL_LIST=("VUE_APP_FIREBASE_API_KEY" "VUE_APP_FIREBASE_AUTH_DOMAIN" "VUE_APP_FIREBASE_DATABASE_URL" "VUE_APP_FIREBASE_PROJECT_ID" "VUE_APP_FIREBASE_STORAGE_BUCKET" "VUE_APP_FIREBASE_MESSAGING_SENDER_ID")

for valName in $(seq 1 ${#ENV_VAL_LIST[@]}); do
  envValName=${ENV_VAL_LIST[$valName-1]}
  envVueValName=${VUE_ENV_VAL_LIST[$valName-1]}
  value=$(grep $envValName $ENV_TMP | awk -F '["]' '{print $2}')
  echo "==========================="
  sed -i -e "s@\(  ${envVueValName}: '\)\(.*\)\('.*\)@\1${value}\3@" $ENV_FILE
  echo "==========================="
done
