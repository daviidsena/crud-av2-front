import Vue from 'vue'
import App from './App.vue'

new Vue({
  // el é o elemento aonde quero rendeziar o componente.
  el: '#app',
  // no render é aonde passaremos o componente que será renderizado, que neste caso é o App.
  render: h => h(App)
})
