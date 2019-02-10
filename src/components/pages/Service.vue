<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="tags">
            <span class="tag">aaaa</span>
            <span class="tag is-dark">bbbb</span>
          </div>
          <todo-card v-bind:task="task" v-for="task in tasks" v-bind:key="task.name"/>
        </div>
        <div class="column">
          <div class="tags">
            <span class="tag">aaaa</span>
            <span class="tag is-dark">bbbb</span>
          </div>
          <todo-card v-bind:task="task" v-for="task in tasks" v-bind:key="task.name"/>
        </div>
        <div class="column">
          <div class="tags">
            <span class="tag">aaaa</span>
            <span class="tag is-dark">bbbb</span>
          </div>
          <todo-card v-bind:task="task" v-for="task in tasks" v-bind:key="task.name"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase/app'
import TodoCard from '@/components/component/TodoCard'

export default {
  name: 'Service',
  data () {
    return {
      name: Firebase.auth().currentUser ? Firebase.auth().currentUser.email : '',
      tasks: [
        { id: 0, name: 'task1', status: 1 },
        { id: 1, name: 'task2', status: 2 },
        { id: 2, name: 'task3', status: 3 }
      ]
    }
  },
  methods: {
    signOut: function () {
      Firebase.auth().signOut().then(() => {
        this.$router.push('/sign-in')
      })
    }
  },
  components: {
    TodoCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
