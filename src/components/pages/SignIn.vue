<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <h2>
        ログインフォーム
      </h2>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button class="button is-info" @click="signIn">ログイン</button>
      <div>
        <router-link to="/sign-up">アカウントを持っていない人はこちらからアカウント登録</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase/app'

export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      Firebase.auth().signInWithEmailAndPassword(this.username, this.password)
        .then(user => {
          this.$router.push('/')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-body {
  display: flex;
  flex-flow: column nowrap;
}
input,button {
  margin: 5px 0px;
}
</style>
