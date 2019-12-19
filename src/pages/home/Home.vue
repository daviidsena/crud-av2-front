<template>
  <div id="home">
    <h1>Bem vindo ao Programa em Vue</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState({
      Link: state => state.Link
    })
  }
};
</script>

<style>
</style>
