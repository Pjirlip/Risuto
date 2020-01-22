<template>
  <div id="app">
    <Navigation />
    <Modal> </Modal>
    <router-view />
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  import Modal from "./components/Modal/Modal";

  export default {
    name: "Risuto",
    components: {
      Navigation,
      Modal
    },
    created() {
      this.$eventStore.$data.personalList = [];
    }
  }
</script>

<style lang="scss">
  html {
    scrollbar-color: $highligth $main;
  }

  body {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;

    background: $main;
    color: $text;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "Navigation""Content";
    width: 100%;
    height: 100vh;

    ::-webkit-scrollbar {
      width: 5px;
      background-color: lighten($color: $main, $amount: 3);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: $highligth;
    }
  }
</style>