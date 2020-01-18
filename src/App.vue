<template>
  <div id="app">
    <Navigation /> 
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "Risuto",
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0; 

  background: $main;
  color: $text;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid; 
  grid-template-rows: 60px 1fr 50px;
  grid-template-columns: 1fr;
  grid-template-areas: "Navigation" "Content" "Footer";
  width: 100%;
  height: 100%;
}

</style>
