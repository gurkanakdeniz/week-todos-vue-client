import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: SocketIO('http://localhost:3000') // options object is Optional
  })
)
Vue.use(Vuetify)
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
