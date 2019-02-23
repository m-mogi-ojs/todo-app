<template>
  <div id="app">
    <global-header/>
    <router-view/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from '@/components/globals/GlobalHeader'
import GlobalFooter from '@/components/globals/GlobalFooter'

export default {
  name: 'App',
  components: { GlobalHeader, GlobalFooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
