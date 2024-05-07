<template>
  <div class="container">
    <div class="link" @click="toCreate()">create</div>
    <div class="link" @click="toRoom()">join</div>
    <input type="text" class="room" v-model="roomCode" />
    <input type="text" class="name" v-model="name" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 25px;
}

.link {
  cursor: pointer;
  margin-bottom: 20px;

  *:last-child {
    margin-bottom: 0;
  }
}

.room {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: "EntryPage",

  data() {
    return {
      roomCode: "",
      name: localStorage.getItem("STUDPOLY_PLAYER_NAME"),
    };
  },

  watch: {
    name(newValue) {
      localStorage.setItem("STUDPOLY_PLAYER_NAME", newValue);
    },
  },

  methods: {
    toCreate() {
      this.$router.push({ name: "create" });
    },
    toRoom() {
      if (this.roomCode)
        this.$router.push({ name: "room", params: { roomID: this.roomCode } });
    },
  },
};
</script>
