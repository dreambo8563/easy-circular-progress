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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
