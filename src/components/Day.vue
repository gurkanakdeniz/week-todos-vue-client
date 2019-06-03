<template>
  <v-layout>
    <v-card>
      <p>{{ name }}</p>
      <todo
        v-bind:view="{ isCreateTodo: false }"
        v-on:delete-todo="deleteTodo"
        v-on:update-todo="updateTodo"
        v-for="todo in todos"
        :todo.sync="todo"
      ></todo>
      <todo
        v-on:create-todo="createTodo"
        v-bind:view="{ isCreateTodo: true }"
        v-bind:todo="{ title: '', description: '' }"
      ></todo>
    </v-card>
  </v-layout>
</template>
<script>
import Todo from './Todo'

export default {
  name: 'Day',
  props: ['todos', 'index'],
  components: {
    Todo
  },
  data() {
    return {
      compDate: null
    }
  },
  computed: {
    name: function() {
      Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
      }
      Date.prototype.dayWeek = function(dayName) {
        let days = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }
        return days[dayName]
      }

      let now = new Date()
      let day = '' + this.$props.index
      now = now.addDays(now.dayWeek(day) - now.getDay())
      this.compDate = now

      return now.toLocaleDateString('en-GB')
    }
  },
  methods: {
    createTodo(newTodo) {
      newTodo.date = this.compDate
      this.$socket.emit('addTodo', newTodo)
    },
    deleteTodo(todo) {
      this.$socket.emit('deleteTodo', todo)
    },
    updateTodo(todo) {
      this.$socket.emit('updateTodo', todo)
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/style.css';
</style>
