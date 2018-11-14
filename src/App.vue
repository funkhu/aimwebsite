<template>
  <div id="app">
    <div id="aim-container" class="container">
      <Navbar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  background-color: #dedede;
  overflow: auto;
}

#aim-container {
  height: 100vh;
}
</style>
