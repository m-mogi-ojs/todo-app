<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div>{{ name }}</div>
      <button class="button is-info" @click="signOut">ログアウト</button>
      <router-link to="/sign-in">sign in</router-link>
      <router-link to="/sign-up">sign up</router-link>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase/app'

export default {
  name: 'Main',
  data () {
    return {
      name: Firebase.auth().currentUser ? Firebase.auth().currentUser.email : ''
    }
  },
  methods: {
    signOut: function () {
      Firebase.auth().signOut().then(() => {
        this.$router.push('/sign-in')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
