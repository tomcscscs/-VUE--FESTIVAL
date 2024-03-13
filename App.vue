<template>
  <RouterView />
</template>
<script>
import { computed } from "vue";
export default {
  data: function () {
    return { user: null, token: null };
  },
  methods: {
    setUser: function (val) {
      this.user = val;
    },
    setToken: function (val) {
      this.token = val;
    },
  },
  provide: function () {
    return {
      user: computed(() => this.user),
      token: computed(() => this.token),
      setUser: this.setUser,
      setToken: this.setToken,
    };
  },
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
  min-width: 986px;
}
.fs-7 {
  font-size: 0.9rem;
}
</style>
