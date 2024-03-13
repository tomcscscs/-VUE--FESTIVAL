<template>
  <navigation></navigation>
  <RouterView />
</template>
<script>
import Navigation from "./commons/Navigation.vue";
export default {
  components: { Navigation },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");

* {
  font-family: "Poor Story", system-ui;
  font-weight: 400;
  font-style: normal;
}

#app {
  min-width: 1200px;
}
</style>
