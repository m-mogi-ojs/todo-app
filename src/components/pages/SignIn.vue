<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <h2>
        ログインフォーム
      </h2>
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <button class="button is-info">ログイン</button>
      <div>
        <router-link to="/sign-up">アカウントを持っていない人はこちらからアカウント登録</router-link>
      </div>
    </div>
  </section>
</template>

<script>
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
