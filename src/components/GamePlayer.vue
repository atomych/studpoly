<template>
  <div class="player" :class="{ main: main }">
    <div class="photo">
      <img src="../assets/img/player0.png" alt="" v-if="photo == 0" />
      <img src="../assets/img/player1.png" alt="" v-if="photo == 1" />
      <img src="../assets/img/player2.png" alt="" v-if="photo == 2" />
      <img src="../assets/img/player3.png" alt="" v-if="photo == 3" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="money">${{ money }}</div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Aven";
  src: url("../assets/fonts/AVENGEANCE_MIGHTIEST_AVENGER_RUS_0.ttf");
  font-weight: 400;
}

.player {
  width: 300px;
  height: 200px;

  position: relative;

  border: 1px solid #000;
  background-color: #faebdb;

  &.main {
    background-color: #ffdf8f;
  }

  .photo {
    width: 150px;
    height: 200px;

    position: absolute;
    left: 10px;
    bottom: 0;

    display: flex;
    align-items: end;

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  .name {
    position: absolute;
    top: 10px;
    right: 10px;

    font-family: "Aven";
    background-color: #fff;
    border: 2px solid #000;
    font-size: 20px;
    padding: 5px 10px;
  }

  .money {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-family: "Aven";

    font-size: 30px;
  }
}
</style>

<script>
export default {
  name: "GamePlayer",

  props: {
    name: {
      type: String,
      default: "",
    },
    money: {
      type: Number,
      default: 0,
    },
    photo: {
      type: Number,
      default: 4,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
