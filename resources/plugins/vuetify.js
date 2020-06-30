import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
    iconfont: 'mdi'
})

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#002E5B",
          secondary: "#FD4A52",
          info: "#FF9671",
          error: "#b71c1c"
        }
      },
      options: {
        customProperties: true
      }
    }
  });