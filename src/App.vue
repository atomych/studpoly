<template>
  <router-view></router-view>
</template>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100vh;
}
</style>

<script>
import { getKey } from "./js/key";

export default {
  name: "App",

  created() {
    if (!localStorage.getItem("STUDPOLY_PLAYER_ID")) {
      localStorage.setItem("STUDPOLY_PLAYER_ID", getKey());
      localStorage.setItem("STUDPOLY_PLAYER_NAME", "player");
    }
  },
};
</script>
