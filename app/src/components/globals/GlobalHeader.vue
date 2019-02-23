<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body">
      <h1>
        <router-link to="/">トップへ  </router-link>
        <router-link to="/service">サービスへ  </router-link>
        <button v-if="isSigned" class="button is-info" @click="signOut">ログアウト</button>
        <div class="user-name">{{ name }}</div>
      </h1>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase/app'

export default {
  name: 'GlobalHeader',
  data () {
    return {
      name: Firebase.auth().currentUser ? Firebase.auth().currentUser.email : ''
    }
  },
  methods: {
    signOut: function () {
      Firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    },
    isSigned: function () {
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button, .user-name {
  float: right;
}

</style>
