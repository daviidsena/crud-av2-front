<template>
  <header class="bg-primary d-flex align-items-center text-white header">
    <div class="container text-center">
      <h1>AV2 - DAW</h1>
    </div>
    <div class="p-5">{{ usuario }}</div>

    <router-link to="/" class="pr-1">
      <i class="btn btn-outline-dark">Home</i>
    </router-link>

    <router-link to="/lista" class="pr-1">
      <i class="btn btn-outline-dark">Lista</i>
    </router-link>

    <router-link to="/sair" class="pr-5">
      <i class="btn btn-outline-dark">Sair</i>
    </router-link>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState({
      usuario: state => state.usuario
    })
  }
};
</script>

<style>
.header {
  grid-area: header;
  background-color: #efefef;
}
</style>