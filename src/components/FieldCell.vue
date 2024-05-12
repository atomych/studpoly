<template>
  <div class="cell__wrapper">
    <div class="text">{{ text }}</div>
    <div class="first-p" v-if="obj.players.indexOf(0) != -1"></div>
    <div class="second-p" v-if="obj.players.indexOf(1) != -1"></div>
    <div class="third-p" v-if="obj.players.indexOf(2) != -1"></div>
    <div class="fourth-p" v-if="obj.players.indexOf(3) != -1"></div>
  </div>
</template>

<style lang="scss" scoped>
.cell__wrapper {
  .first-p,
  .second-p,
  .third-p,
  .fourth-p {
    border-radius: 50%;
    width: 30px;
    height: 30px;

    position: absolute;

    z-index: 100;
  }

  .first-p {
    background-color: red;
    top: 5px;
    left: 5px;
  }

  .second-p {
    background-color: blue;
    top: 5px;
    right: 5px;
  }

  .third-p {
    background-color: green;
    bottom: 5px;
    left: 5px;
  }

  .fourth-p {
    background-color: yellow;
    bottom: 5px;
    right: 5px;
  }
}
</style>

<script>
export default {
  name: "FieldCell",

  props: {
    text: {
      type: String,
      default: "",
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
