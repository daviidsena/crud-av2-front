<template>
  <div id="app">

    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./pages/template/Header";
import Footer from "./pages/template/Footer";
import Content from "./pages/template/Content";

export default {
  components: { Header, Content, Footer },
  computed: {}
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}

</style>
