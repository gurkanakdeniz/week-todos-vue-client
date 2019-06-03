<template>
  <v-app id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <Week />
  </v-app>
</template>

<script>
import Week from './components/Week'

export default {
  name: 'App',
  components: {
    Week
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
