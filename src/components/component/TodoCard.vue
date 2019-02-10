<template>
  <div class="card" @dragstart="dragstart(task, $event)" @dragend="dragend" @dragenter="dragenter(task)" draggable="true">
    <div class="card-header">card-header</div>
    <div class="card-content">{{ task.name }}</div>
    <div class="card-footer">card-footer</div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      draggingItem: null,
      draggingOverItem: null
    }
  },
  methods: {
    dragstart (task, e) {
      this.draggingItem = task
      e.target.style.opacity = 0.5
      console.log('drag start.' + task.name)
    },
    dragend (e) {
      e.target.style.opacity = 1
    },
    dragenter (task) {
      console.log('enter task is ' + task.name)
      console.log('dragging task is ' + this.draggingItem.name)
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 10px
  }
</style>
