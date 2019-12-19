<template>
  <div id="sair">
    <h1>Muito obrigado por visitar nosso sistema {{ usuario }}!</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Sair",
  computed: {
    ...mapState({
      usuario: state => state.usuario
    })
  }
};
</script>

<style>
</style>
