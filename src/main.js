import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './assets/scss/app.scss'

require('axios').defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NTQyNjQwM30.92MQ2q1zHscx8fa2MLZA7JjBUpbgiRPKoDSPQmQJuqQ'

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
