<template>
  <div class="container">
    <div class="block">
      <div class="text">Количество игроков</div>
      <input type="text" v-model="players" />
    </div>
    <div class="block">
      <div class="text">Код комнаты</div>
      <input type="text" v-model="roomCode" disabled />
    </div>
    <button class="create" @click="createGame()">Создать</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block {
  margin-bottom: 20px;
}
</style>

<script>
import { writeData } from "../firebase/database";
import { getKey } from "../js/key";

export default {
  name: "CreatePage",

  data() {
    return {
      roomCode: "",
      players: "",
    };
  },

  created() {
    this.roomCode = getKey();
  },

  methods: {
    createGame() {
      /// создание игры
      const PLAYER_ID = localStorage.getItem("STUDPOLY_PLAYER_ID");
      const PLAYER_NAME = localStorage.getItem("STUDPOLY_PLAYER_NAME");

      writeData(`rooms/${this.roomCode}`, {
        roomCode: this.roomCode,
        playersCnt: +this.players,
        players: [[PLAYER_ID, PLAYER_NAME]],
        state: "room",
        mainPlayer: PLAYER_ID,
      });

      this.$router.push({ name: "room", params: { roomID: this.roomCode } });
    },
  },
};
</script>
