<template>
  <div class="page">
    <div class="container">
      <div class="top">
        <a href="" @click.prevent="toRools()">о игре</a>
      </div>
      <div class="nickname">
        <input type="text" class="field" v-model="name" />
        <button class="save" @click="changeName()">Сохранить</button>
      </div>
      <img src="../assets/img/1.png" alt="" />
      <div class="btns">
        <button class="create" @click="createRoom()">
          Создание <br />
          комнаты
        </button>
        <div class="roomcode" :class="{ err: codeErr }">
          <div class="text">
            Введи код <br />
            комнаты
          </div>
          <input
            type="text"
            class="code"
            v-model="roomCode"
            @keydown.enter="connectByCode(roomCode)"
          />
        </div>
      </div>
      <div class="rooms">
        <h1 class="title">Подключиться к уже имеющимся</h1>
        <div class="rooms__inner">
          <div class="titles">
            <h2>Код комнаты</h2>
            <h2>Кол-во Игроков</h2>
          </div>
          <div
            class="rooms__item"
            v-for="room in rooms"
            :key="room.id"
            :class="room.id == 'bot12' ? 'none' : ''"
          >
            <h2 class="code">{{ room.id }}</h2>
            <h2 class="players">{{ room.players.length }}</h2>
            <button
              class="connect"
              v-if="room.players.indexOf(id) == -1"
              @click="connect(room.id)"
            >
              Подключиться
            </button>
            <button
              class="disconnect"
              v-if="room.players.indexOf(id) != -1"
              @click="disconnect()"
            >
              Отключиться
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "MontMed";
  src: url("../assets/fonts/MontserratAlternates-Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "MontSem";
  src: url("../assets/fonts/MontserratAlternates-SemiBold.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "MontBold";
  src: url("../assets/fonts/MontserratAlternates-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Moul";
  src: url("../assets/fonts/Moul-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Aven";
  src: url("../assets/fonts/AVENGEANCE_MIGHTIEST_AVENGER_RUS_0.ttf");
  font-weight: 400;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-size: 25px;
}

.container {
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
}

.top {
  background-color: #f8cf3f;

  display: flex;
  justify-content: end;

  padding: 10px;
  padding-right: 30px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    opacity: 0.6;
    font-family: "MontMed";
  }

  margin-bottom: 20px;
}

.nickname {
  display: flex;
  justify-content: center;
  position: relative;

  width: 100%;
  max-width: 500px;

  margin: 0 auto;
  margin-bottom: 20px;

  .field {
    font-family: "MontMed";
    border: 2px solid #000;
    outline: none;

    display: block;
    width: 100%;

    padding: 5px 10px;
    font-size: 18px;

    box-shadow: 8px 5px 4px #000;
  }

  .save {
    border: none;
    cursor: pointer;

    position: absolute;

    font-size: 18px;
    padding: 5px 10px;
    padding-bottom: 6px;

    top: 1px;
    right: 1px;

    font-family: "MontBold";
    background-color: #ffb966;
  }
}

.btns {
  display: flex;
  justify-content: center;

  margin-bottom: 60px;

  .create {
    border: 2px solid #000;

    font-size: 18px;
    text-align: left;

    padding: 10px 20px;
    padding-right: 70px;

    background-color: #aa77c5;
    color: #fff;
    font-family: "MontSem";
    font-size: 20px;

    box-shadow: 6px 6px 0px #aa77c5;

    cursor: pointer;

    position: relative;

    transform: rotate(-4deg);
    margin-right: 30px;

    &::after {
      content: "+";
      display: block;

      position: absolute;

      font-size: 80px;
      color: #fff;
      opacity: 0.6;

      top: 50%;
      right: 10px;

      transform: translateY(-50%);
    }
  }

  .roomcode {
    display: flex;
    justify-content: center;

    position: relative;

    background-color: #d871a8;
    border: 2px solid #000;
    color: #fff;

    padding: 10px 10px;

    transform: rotate(4deg);

    font-family: "MontSem";
    font-size: 20px;

    box-shadow: 6px 6px 0px #d871a8;

    &.err::after {
      content: "";
      display: block;
      position: absolute;

      width: 160px;
      height: 55px;

      background: url("../assets/img/err.png");
      background-repeat: no-repeat;
      background-size: contain;

      top: -65%;
      right: -50%;
    }

    .code {
      border: none;
      padding: 0;
      background-color: #d871a8;

      margin-left: 20px;

      font-family: "Moul";

      color: #fff;
      opacity: 0.6;

      font-size: 30px;

      width: 100px;

      &:focus {
        outline: none;
      }
    }
  }
}

.rooms {
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #fffaea;
  border: 2px solid #000;

  padding: 20px;
  padding-top: 60px;

  margin-bottom: 20px;

  .title {
    position: absolute;

    top: 0;
    left: 50%;

    transform: translate(-50%, -50%);
    width: max-content;
    text-align: center;
    padding: 5px 10px;

    background-color: #00ae8f;
    color: #fff;
    font-family: "MontBold";
    font-size: 40px;

    border: 2px solid #000;
    box-shadow: 6px 6px 0px #00ae8f;
  }

  &__inner {
    display: flex;
    flex-direction: column;

    justify-content: center;

    .titles {
      display: flex;

      font-size: 14px;
      font-family: "MontBold";

      h2 {
        padding: 5px 10px;
        border: 2px solid #000;

        background-color: #fff;

        &:first-child {
          margin-right: 15px;
        }
      }

      margin-bottom: 20px;
    }
  }

  &__item {
    display: flex;

    font-size: 16px;
    font-family: "Aven";

    margin-bottom: 10px;

    &.none {
      display: none;
    }

    .code {
      width: 185px;
      text-align: center;

      padding: 5px 10px;
      border: 2px solid #000;
      margin-right: 15px;
      background-color: #fff;
    }

    .players {
      width: 201px;

      text-align: center;

      padding: 5px 10px;
      border: 2px solid #000;

      margin-right: 15px;
      background-color: #fff;
    }

    .connect,
    .disconnect {
      display: block;
      flex-grow: 1;

      cursor: pointer;

      background-color: #fff;
      font-family: "Aven";
      border: 2px solid #000;
      font-size: 25px;

      padding: 0;
    }
  }
}
</style>

<script>
import { getKey } from "../js/key";
import { readData, subscribeToUpadate, writeData } from "../firebase/database";

export default {
  name: "EntryPage",

  data() {
    return {
      name: "player",
      id: "",
      rooms: [],
      codeErr: false,
      roomCode: "",
    };
  },

  created() {
    // переадресация в игру, если найдется комната state = game
    // ...

    if (localStorage.getItem("STUDPOLY_PLAYER_ID")) {
      this.name = localStorage.getItem("STUDPOLY_PLAYER_NAME");
      this.id = localStorage.getItem("STUDPOLY_PLAYER_ID");
    } else {
      const userID = getKey();
      this.id = userID;

      localStorage.setItem("STUDPOLY_PLAYER_ID", userID);
      localStorage.setItem("STUDPOLY_PLAYER_NAME", "player");
    }

    readData(`rooms/`).then((data) => {
      const rooms = data.val();
      const playerID = localStorage.getItem("STUDPOLY_PLAYER_ID");

      for (let item of Object.values(rooms)) {
        if (item.players.indexOf(playerID) != -1 && item.state == "game") {
          console.log(1);
          this.$router.push({ name: "game", params: { roomID: item.id } });
        }
      }
    });

    writeData(`names/${this.id}`, this.name);

    subscribeToUpadate("rooms/", (data) => {
      if (data.val()) {
        this.rooms = Object.values(data.val()).filter(
          (item) => item.state == "room"
        );

        const room = this.rooms.filter(
          (item) => item.players.indexOf(this.id) != -1
        );

        if (room.length) {
          if (room[0].players.length == 4) {
            console.log("room is full");
            // переадресация в игру при заполнении комнаты
            // ...
            this.$router.push({ name: "game", params: { roomID: room[0].id } });
            writeData(`rooms/${room[0].id}/state`, "game");
          }
        }
      }
    });
  },

  watch: {
    roomCode() {
      this.codeErr = false;

      if (this.roomCode.length > 5)
        this.roomCode = this.roomCode.substring(0, 5);
      if (this.roomCode.length == 5) {
        let res = false;

        for (let item of this.rooms) {
          if (item.id == this.roomCode) res = true;
        }

        if (!res) this.codeErr = true;
      }
    },
  },

  methods: {
    changeName() {
      writeData(`names/${this.id}`, this.name);
      localStorage.setItem("STUDPOLY_PLAYER_NAME", this.name);
    },

    toRools() {
      this.$router.push({ name: "rools" });
    },

    createRoom() {
      const data = this.rooms.filter(
        (item) => item.players.indexOf(this.id) != -1
      );

      if (!data.length) {
        const roomKey = getKey();

        writeData(`rooms/${roomKey}`, {
          id: roomKey,
          state: "room",
          players: [this.id],
        });
      } else {
        if (data[0].players.length > 1) {
          writeData(
            `rooms/${data[0].id}/players`,
            data[0].players.filter((item) => item != this.id)
          );
        } else {
          writeData(`rooms/${data[0].id}/`, null);
        }
        this.createRoom();
      }
    },

    connect(newID) {
      const room = this.rooms.filter(
        (item) => item.players.indexOf(this.id) != -1
      );

      if (room.length) this.disconnect();

      const newRoom = this.rooms.filter((item) => item.id == newID)[0];
      writeData(`rooms/${newID}/players`, [...newRoom.players, this.id]);
    },

    connectByCode(code) {
      if (this.roomCode.length == 5 && this.codeErr == false && this.id == "")
        this.connect(code);
    },

    disconnect() {
      const room = this.rooms.filter(
        (item) => item.players.indexOf(this.id) != -1
      )[0];

      if (room.players.length > 1) {
        writeData(
          `rooms/${room.id}/players`,
          room.players.filter((item) => item != this.id)
        );
      } else {
        writeData(`rooms/${room.id}/`, null);
      }

      this.id = "";
    },
  },
};
</script>
