<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <h2>
        アカウント登録フォーム
      </h2>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button class="button is-info" @click="signUp">登録</button>
      <div>
        <router-link to="/sign-in">アカウントを持っている人はこちらからログイン</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      Firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
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
