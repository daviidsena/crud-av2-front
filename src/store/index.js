import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const AuthStr = "Bearer ".concat(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NTQyNjQwM30.92MQ2q1zHscx8fa2MLZA7JjBUpbgiRPKoDSPQmQJuqQ"
);

export default new Vuex.Store({
  state: {
    Link: 0,
    usuario: "David Sena",
    email: "daviidsena@gmail.com",
    host: "http://localhost:3333/produto",
    token: AuthStr
  },
  mutations: {

  },
  actions: {

  }
})
