<template>
  <div class="cell__wrapper">
    <div
      class="text"
      :class="{
        f12:
          ['exam', 'money', 'home', 'tohome', 'to start'].indexOf(obj.type) !=
          -1,
        left: [31, 32, 33, 34, 35, 36, 37, 38, 39].indexOf(obj.id) != -1,
        right: [11, 12, 13, 14, 15, 16, 17, 18, 19].indexOf(obj.id) != -1,
      }"
    >
      {{ text }}
    </div>
    <div class="first-p" v-if="obj.players.indexOf(0) != -1"></div>
    <div class="second-p" v-if="obj.players.indexOf(1) != -1"></div>
    <div class="third-p" v-if="obj.players.indexOf(2) != -1"></div>
    <div class="fourth-p" v-if="obj.players.indexOf(3) != -1"></div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Lobelia";
  src: url("../assets/fonts/Lobelia.ttf");
}

.cell__wrapper {
  font-family: "Lobelia";
  font-size: 8px;
  text-align: center;

  .text {
    &.f12 {
      font-size: 12px !important;
    }

    &.left {
      transform: rotate(90deg);
      width: 85px;
    }

    &.right {
      transform: rotate(-90deg);
      width: 85px;
    }
  }

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
    background-color: #262261;
    top: 5px;
    left: 5px;
  }

  .second-p {
    background-color: #a87c4f;
    top: 5px;
    right: 5px;
  }

  .third-p {
    background-color: #3b934e;
    bottom: 5px;
    left: 5px;
  }

  .fourth-p {
    background-color: #ff4f4f;
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
