<template>
  <v-container>
    <v-layout row wrap>
      <Day
        v-for="(item, index) in todos"
        v-bind:todos="item"
        v-bind:index="index"
        v-bind:key="index"
      ></Day>
    </v-layout>
  </v-container>
</template>
<script>
import Day from './Day'
import axios from 'axios'

export default {
  name: 'Week',
  components: {
    Day
  },
  data() {
    return {
      todos: ''
    }
  },
  mounted() {},
  sockets: {
    connect() {
      console.log('true')
    },

    disconnect() {
      console.log('false')
    },

    weekTodos(data) {
      console.log(data)
      this.todos = data.data
    }
  },
  methods: {}
}
</script>
