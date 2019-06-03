<template>
  <v-container>
    <v-layout v-show="!isEditing && !view.isCreateTodo">
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-0">{{ todo.title }}</v-card-text>
          <v-card-text class="px-0">{{ todo.description }}</v-card-text>
          <v-btn fab dark small color="cyan" v-on:click="edit">
            <v-icon dark>edit</v-icon>
          </v-btn>
          <v-btn fab dark small color="red" v-on:click="deleteTodo(todo)">
            <v-icon dark>remove</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-show="isEditing">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="todo.title"
          :counter="20"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="todo.description"
          :rules="descRules"
          label="Description"
          required
        ></v-text-field>

        <v-layout v-if="!view.isCreateTodo">
          <v-btn color="success" v-on:click="save(todo)">
            save
          </v-btn>
          <v-btn color="warning" v-on:click="cancel">
            cancel
          </v-btn>
        </v-layout>
        <v-layout v-else>
          <v-btn color="success" v-on:click="sendFormCreate(todo)">
            save
          </v-btn>
          <v-btn color="warning" v-on:click="cancelCreate">
            cancel
          </v-btn>
        </v-layout>
      </v-form>
    </v-layout>
    <v-btn
      fab
      dark
      small
      v-on:click="openForm"
      v-show="!isEditing && view.isCreateTodo"
    >
      <v-icon dark>add</v-icon>
    </v-btn>
  </v-container>
</template>
<script type="text/javascript">
export default {
  name: 'Todo',
  props: ['todo', 'view'],
  data() {
    return {
      isEditing: false,
      valid: true,
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 20) || 'title must be less than 20 characters'
      ],
      descRules: [
        v => !!v || 'Description is required',
        v =>
          (v && v.length <= 20) || 'Description must be less than 20 characters'
      ]
    }
  },
  // data() {
  //   return {
  //     isEditing: false
  //   }
  // },
  methods: {
    deleteTodo(todo) {
      this.$emit('delete-todo', todo)
    },
    edit() {
      this.isEditing = true
    },
    save(todo) {
      this.$emit('update-todo', todo)
      this.isEditing = false
    },
    cancel() {
      this.isEditing = false
    },
    openForm() {
      this.isEditing = true
    },
    cancelCreate() {
      this.isEditing = false
    },
    sendFormCreate(todo) {
      if (todo) {
        const title = todo.title
        const description = todo.description
        this.$emit('create-todo', {
          title,
          description,
          date: null,
          done: false
        })
        this.isEditing = false
      }
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/style.css';
</style>
