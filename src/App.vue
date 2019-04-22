<template>
  <div id="app">
    <Progress></Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #fff;
  background: #3e423a;
}
body {
  margin: 0;
  padding: 0;
}
</style>
