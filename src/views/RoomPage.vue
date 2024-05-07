<template>
  <div class="container">
    <div class="block">
      <div class="text">Количество игроков {{ roomObj.playersCnt }}</div>
    </div>
    <div class="block">
      <div class="player" v-for="player in roomObj.players" :key="player[0]">
        <div class="name">{{ player[1] }}</div>
      </div>
    </div>
    <button
      class="create"
      v-if="
        roomObj.mainPlayer == this.playerID &&
        roomObj.players.length == roomObj.playersCnt
      "
      @click="startGame()"
    >
      Создать
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.block {
  margin-bottom: 20px;
}
</style>

<script>
import { readData, writeData } from "../firebase/database";

export default {
  name: "RoomPage",

  data() {
    return {
      roomObj: {},
      playerID: localStorage.getItem("STUDPOLY_PLAYER_ID"),
    };
  },

  created() {
    const roomID = this.$route.params.roomID;

    readData(`rooms/${roomID}`).then((data) => {
      this.roomObj = data.val();
    });
  },

  methods: {
    startGame() {
      writeData(`rooms/${this.roomObj.roomCode}/state`, "game").then(() => {
        this.$router.push({
          name: "game",
          params: { roomID: this.roomObj.roomCode },
        });
      });
    },
  },
};
</script>
