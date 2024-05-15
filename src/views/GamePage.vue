<template>
  <div class="container" :class="{ black: loseTemp == true }">
    <div class="bar">
      <game-player
        :name="mainPlayer.name"
        :money="mainPlayer.money"
        :photo="mainPlayer.photo"
        class="pf"
        :main="true"
      />
      <game-player
        :name="item.name"
        :money="item.money"
        :photo="item.photo"
        class="of"
        v-for="(item, idx) in otherPlayers"
        :key="idx"
      />
    </div>
    <div class="field">
      <div class="left">
        <div class="cell corner start">
          <field-cell :obj="cells[0]" :text="''"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[39]" :text="'искусство'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[38]" :text="'хореография'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[37]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell
            :obj="cells[36]"
            :text="'актерское мастерство'"
          ></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[35]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[34]" :text="'философия'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[33]" :text="'культурология'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[32]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[31]" :text="'социология'"></field-cell>
        </div>
        <div class="cell corner">
          <field-cell :obj="cells[30]" :text="'общежитие'"></field-cell>
        </div>
      </div>
      <div class="right">
        <div class="cell corner">
          <field-cell :obj="cells[10]" :text="'общежитие'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[11]" :text="'правоведение'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[12]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[13]" :text="'политология'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[14]" :text="'история'"></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[15]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[16]" :text="'информатика'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[17]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[18]" :text="'программирование'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[19]" :text="'базы данных'"></field-cell>
        </div>
        <div class="cell corner">
          <field-cell
            :obj="cells[20]"
            :text="'поездка к родителям'"
          ></field-cell>
        </div>
      </div>
      <div class="top">
        <div class="cell default green">
          <field-cell :obj="cells[1]" :text="'биология'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[2]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[3]" :text="'почвоведение'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[4]" :text="'экология'"></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[5]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[6]" :text="'экономика'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[7]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[8]" :text="'менеджмент'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell
            :obj="cells[9]"
            :text="'управление бизнесом'"
          ></field-cell>
        </div>
      </div>
      <div class="bottom">
        <div class="cell default blue">
          <field-cell
            :obj="cells[29]"
            :text="'теория вероятности'"
          ></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[28]" :text="'линейная алгебра'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[27]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[26]" :text="'высшая математика'"></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[25]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[24]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[23]" :text="'физкультура'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[22]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[21]" :text="'бжд'"></field-cell>
        </div>
      </div>
      <button class="roll" v-if="canRoll" @click="roll()">Бросить кубик</button>
      <div class="chat">
        <div class="messages">
          <div
            class="messages__item"
            :class="{
              green: item.color == 'green',
              blue: item.color == 'blue',
            }"
            v-for="(item, idx) in messagesList"
            :key="idx"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="control">
          <input type="text" class="text" v-model="messageText" />
          <button class="send" @click="sendMessage()">отправить</button>
        </div>
      </div>
      <div class="mask" v-if="mask" :class="{ black: loseTemp }"></div>
      <div class="question" v-if="question">
        <div class="text">{{ question.text }}</div>
        <div class="answers">
          <div
            class="answer"
            :class="{ a1: idx == 0, a2: idx == 1, a3: idx == 2, a4: idx == 3 }"
            v-for="(item, idx) in question.answers"
            :key="idx"
            @click="sendAnswer(idx)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="win" v-if="winTemp">
        <div class="title">поздравляем!!!</div>
        <div class="text">
          Ты стал самым лучшим студентом<br />
          и смог получить диплом
        </div>
        <button class="back" @click="$router.push({ name: 'entry' })">
          вернуться на главный экран
        </button>
      </div>
      <div class="lose" v-if="loseTemp">
        <div class="title">отчислен!!!</div>
        <div class="text">
          К сожалению, на твоём балансе не <br />
          осталось средств. Ты не можешь<br />
          продолжать игру дальше. Ждём тебя<br />
          на второй год
        </div>
        <button class="back" @click="$router.push({ name: 'entry' })">
          вернуться на главный экран
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Lobelia";
  src: url("../assets/fonts/Lobelia.ttf");
}

@font-face {
  font-family: "Aven";
  src: url("../assets/fonts/AVENGEANCE_MIGHTIEST_AVENGER_RUS_0.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "MontReg";
  src: url("../assets/fonts/MontserratAlternates-Regular.ttf");
  font-weight: 600;
}

.container {
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 20px;

  &.black {
    background-color: #292929;
  }
}

.bar {
  display: flex;
  flex-direction: column;
  align-items: end;

  margin-right: 50px;

  width: 300px;

  .pf {
    margin-bottom: 40px;
  }

  .of {
    margin-bottom: 20px;
  }
}

.field {
  display: flex;
  justify-content: space-between;

  position: relative;

  width: 100%;
  max-width: 1015px;

  background: url("../assets/img/background.png");

  .lose {
    position: absolute;

    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);

    width: 90%;
    height: 700px;

    background-color: #292929;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-family: "Aven";
      font-size: 60px;
      color: #fe682f;

      margin-bottom: 100px;
    }

    .text {
      font-family: "MontReg";
      font-size: 30px;
      text-align: center;
      color: #faebdb;
    }

    .back {
      display: block;
      position: absolute;
      color: #faebdb;

      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);

      font-family: "Aven";
      font-size: 20px;

      background-color: #fe6a2f85;

      padding: 20px 25px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 27px;
    }
  }

  .win {
    position: absolute;

    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);

    width: 90%;
    height: 700px;

    background-color: #ffdf8f;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-family: "Aven";
      font-size: 60px;
      color: #fe682f;

      margin-bottom: 100px;
    }

    .text {
      font-family: "MontReg";
      font-size: 30px;
      text-align: center;
    }

    .back {
      display: block;
      position: absolute;

      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);

      font-family: "Aven";
      font-size: 20px;

      background-color: #fe6a2f85;

      padding: 20px 25px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 27px;
    }
  }

  .roll {
    font-family: "Lobelia";

    position: absolute;
    top: 350px;
    left: 50%;
    transform: translateX(-50%);

    background-color: #45ac8f;
    color: #fff;
    font-size: 20px;

    border: none;
    border-radius: 8px;
    padding: 10px 15px;

    cursor: pointer;
  }

  .mask {
    position: absolute;

    width: 100%;
    height: 100%;

    background-color: #fff;

    z-index: 100;

    &.black {
      background-color: #292929;
    }
  }

  .question {
    position: absolute;

    width: 70%;
    height: 300px;

    background-color: #faebdb;
    border: 1px solid #000;

    top: 50%;
    left: 50%;
    z-index: 200;

    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    padding: 20px 10px;

    .text {
      font-family: "Aven";
      font-size: 30px;
      text-align: center;

      margin-bottom: 30px;
    }

    .answers {
      flex-grow: 1;

      padding: 30px;

      position: relative;

      .answer {
        position: absolute;

        font-family: "Aven";
        font-size: 20px;
        color: #fff;
        background-color: #45ac8f;
        border-radius: 25px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 300px;
        height: 50px;

        cursor: pointer;

        &.a1 {
          top: 10px;
          left: 10px;
        }

        &.a2 {
          top: 10px;
          right: 10px;
        }

        &.a3 {
          bottom: 10px;
          left: 10px;
        }

        &.a4 {
          bottom: 10px;
          right: 10px;
        }
      }
    }
  }

  .chat {
    display: flex;
    flex-direction: column;

    width: 730px;
    height: 350px;

    border: 1px solid #ababab;

    position: absolute;
    left: 50%;
    bottom: 220px;

    transform: translate(-50%, 0);

    padding: 20px;

    .messages {
      flex-grow: 1;
      overflow-y: scroll;
      margin-bottom: 10px;

      &__item {
        font-family: "Aven";
        margin-bottom: 15px;

        &.green {
          color: #45ac8f;
        }

        &.blue {
          color: #9c76c1;
        }
      }
    }

    .control {
      display: flex;

      .text {
        border-radius: 8px;

        border: none;
        outline: none;

        flex-grow: 1;
        margin-right: 20px;
        font-family: "Aven";
        color: #8a8a8a;
      }

      .send {
        font-family: "Aven";
        background-color: #45ac8f;
        color: #fff;
        font-size: 10px;
        padding: 14px 30px;
        border-radius: 8px;
        border: none;
      }
    }

    background-color: #ffdf8f;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;

    .cell.default {
      width: 125px;
      height: 85px;
    }

    .cell {
      display: flex;
      justify-content: center;
      align-items: center;

      &__wrapper .text {
        text-align: center;
      }

      &.corner {
        .text {
          transform: rotate(0deg);
        }
      }
    }
  }

  .left {
    .cell {
      .text {
        transform: rotate(90deg);
      }
    }

    .cell.exam,
    .cell.money {
      justify-content: end;
      position: relative;
    }

    .cell.exam::before {
      content: "";
      display: block;
      position: absolute;

      width: 71px;
      height: 60px;
      background: url("../assets/img/exam.png");

      left: 0;
      top: 10px;

      transform: rotate(90deg);
    }

    .cell.money::before {
      content: "";
      display: block;
      position: absolute;

      width: 73px;
      height: 74px;
      background: url("../assets/img/money.png");

      left: 0;
      top: 10px;

      transform: rotate(90deg);
    }

    .cell.red,
    .cell.blue {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;

        width: 30px;
        height: 83px;

        top: 0;
        right: 0;
      }
    }

    .cell.red::before {
      background-color: #ffc568;
    }

    .cell.blue::before {
      background-color: #9c76c1;
    }
  }

  .right {
    .cell {
      .text {
        transform: rotate(-90deg);
      }
    }

    .cell.exam,
    .cell.money {
      justify-content: flex-start;
      position: relative;
    }

    .cell.exam::before {
      content: "";
      display: block;
      position: absolute;

      width: 71px;
      height: 60px;
      background: url("../assets/img/exam.png");

      right: 0;
      top: 10px;

      transform: rotate(-90deg);
    }

    .cell.money::before {
      content: "";
      display: block;
      position: absolute;

      width: 73px;
      height: 74px;
      background: url("../assets/img/money.png");

      right: 0;
      top: 10px;

      transform: rotate(-90deg);
    }

    .cell.red,
    .cell.blue {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;

        width: 30px;
        height: 83px;

        top: 0;
        left: 0;
      }
    }

    .cell.red::before {
      background-color: #fc7877;
    }

    .cell.blue::before {
      background-color: #b79ec4;
    }
  }

  .top,
  .bottom {
    position: absolute;

    display: flex;

    .cell.default {
      width: 85px;
      height: 125px;
    }

    .cell {
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        text-align: center;
      }
    }

    .cell.money,
    .cell.exam {
      padding-top: 10px;
      align-items: flex-start;
    }

    .cell.exam {
      background: url("../assets/img/exam.png") no-repeat 70% 70%;
    }

    .cell.money {
      background: url("../assets/img/money.png") no-repeat 70% bottom;
    }
  }

  .top {
    top: 0;
    left: 125px;

    .cell.green,
    .cell.blue {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;

        width: 83px;
        height: 30px;

        bottom: 0;
        left: 0;
      }
    }

    .cell.green::before {
      background-color: #7cd55f;
    }

    .cell.blue::before {
      background-color: #61cfd4;
    }
  }

  .bottom {
    bottom: 0;
    left: 125px;

    .cell.green,
    .cell.blue {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;

        width: 83px;
        height: 30px;

        top: 0;
        left: 0;
      }
    }

    .cell.green::before {
      background-color: #549b70;
    }

    .cell.blue::before {
      background-color: #76a6c1;
    }
  }
}

.cell {
  border: 1px solid #000;
  position: relative;

  &.corner {
    width: 125px;
    height: 125px;
  }

  &.start {
    background: url("../assets/img/start.png") no-repeat center center;
  }

  &.chance {
    background: url("../assets/img/star.png") no-repeat center center;
  }

  &.chance,
  &.exam,
  &.money,
  &.corner {
    .text {
      font-size: 12px;
    }
  }

  .text {
    font-family: "Lobelia";
    font-size: 8px;
  }
}
</style>

<script>
import { CELLS, QUESTIONS } from "../js/studpoly";
import { readData, subscribeToUpadate, writeData } from "../firebase/database";
import { getKey } from "../js/key";

import FieldCell from "../components/FieldCell.vue";
import GamePlayer from "../components/GamePlayer.vue";

export default {
  name: "GamePage",

  data() {
    return {
      cells: CELLS,
      roomID: "",
      id: "",
      roomObj: {},
      messageText: "",
      question: null,
      mask: false,
      winTemp: false,
      loseTemp: false,
    };
  },

  components: { FieldCell, GamePlayer },

  created() {
    this.roomID = this.$route.params.roomID;
    this.id = localStorage.getItem("STUDPOLY_PLAYER_ID");

    readData(`rooms/${this.roomID}`).then((data) => {
      this.roomObj = data.val();
      const names = [];

      // проверка на то что пользователь обновил страницу, а не зашел в первый раз
      // ...
      if (this.roomObj.game) {
        console.log("try to connect...");
        // заполнение поля если пользователь обновил страницу
        // ...
        for (let i = 0; i < 4; i++) {
          const item = this.roomObj.game.position[i];
          this.cells[item].players.push(i);
        }
      } else {
        // получение имен игроков
        // ...
        readData(`names/${this.roomObj.players[0]}`).then((data) => {
          names.push(data.val());
          readData(`names/${this.roomObj.players[1]}`).then((data) => {
            names.push(data.val());
            readData(`names/${this.roomObj.players[2]}`).then((data) => {
              names.push(data.val());
              readData(`names/${this.roomObj.players[3]}`).then((data) => {
                names.push(data.val());

                this.roomObj.game = {
                  move: 0,
                  names: names,
                  money: [1000, 1000, 1000, 1000],
                  position: [0, 0, 0, 0],
                  messages: [
                    { from: "Система", text: "Добро пожаловать в вузополию!" },
                  ],
                  lose: [],
                };

                for (let i = 0; i < 4; i++) this.cells[0].players.push(i);
                writeData(`rooms/${this.roomID}`, this.roomObj);
              });
            });
          });
        });
      }
    });

    subscribeToUpadate(`rooms/${this.roomID}`, (data) => {
      this.roomObj = data.val();

      // обновление позиций игроков
      // ...
      if (this.roomObj.game) {
        for (let item of this.cells) {
          item.players = [];
        }

        for (let i = 0; i < 4; i++) {
          this.cells[this.roomObj.game.position[i]].players.push(i);
        }
      }

      // проверка на победу
      // ...
      if (this.roomObj.game && this.roomObj.game.lose) {
        const index = this.roomObj.players.indexOf(this.id);
        if (
          this.roomObj.game.lose.length == 3 &&
          this.roomObj.game.lose.indexOf(index) == -1
        ) {
          this.win();
        }

        // удаление пригравших с поля
        // ...
        for (let cell of this.cells) {
          for (let item of this.roomObj.game.lose) {
            if (cell.players.indexOf(item) != -1) {
              cell.players = cell.players.filter((el) => el != item);
            }
          }
        }
      }
    });
  },

  computed: {
    mainPlayer() {
      const res = {};

      if (this.roomObj.game) {
        const idx = this.roomObj.players.indexOf(this.id);
        res.name = this.roomObj.game.names[idx];
        res.money = this.roomObj.game.money[idx];
        res.photo = idx;
      }

      return res;
    },

    otherPlayers() {
      const res = [];

      if (this.roomObj.game) {
        const idx = this.roomObj.players.indexOf(this.id);

        for (let i = 0; i < 4; i++) {
          if (i != idx) {
            res.push({
              name: this.roomObj.game.names[i],
              money: this.roomObj.game.money[i],
              photo: i,
            });
          }
        }
      }

      return res;
    },

    messagesList() {
      const res = [];

      if (this.roomObj.game) {
        for (let item of this.roomObj.game.messages) {
          res.push({
            text: `${item.from}: ${item.text}`,
            color: item.from == "Система" ? "green" : "blue",
          });
        }
      }

      return res;
    },

    canRoll() {
      if (this.roomObj.game)
        return this.roomObj.game.move == this.roomObj.players.indexOf(this.id);
      else return false;
    },
  },

  methods: {
    roll() {
      const firstNum = Math.floor(Math.random() * 6 + 1);
      const secondNum = Math.floor(Math.random() * 6 + 1);
      const sum = firstNum + secondNum;
      const currentPos = this.roomObj.game.position[this.roomObj.game.move];
      let newPos = 0;

      if (sum + currentPos <= 39) newPos = sum + currentPos;
      else newPos = sum + currentPos - 40;

      this.cells[currentPos].players = this.cells[currentPos].players.filter(
        (item) => item != this.roomObj.game.move
      );
      this.cells[newPos].players.push(this.roomObj.game.move);

      writeData(
        `rooms/${this.roomObj.id}/game/position/${this.roomObj.game.move}`,
        newPos
      );

      // Информация о передвижении игрока появилась у других, но ход еще не передался дальше
      // Здесь идет обработка клетки куда наступил игрок
      // Другие игроки видят у себя, что игрок что то делает, но ходить пока не могут
      // ...
      // ... обработка клетки
      let balance = this.roomObj.game.money[this.roomObj.game.move];

      console.log(this.cells[newPos].type, newPos);

      const endRoll = () => {
        writeData(
          `rooms/${this.roomID}/game/money/${this.roomObj.game.move}`,
          balance
        );

        let newMove = 0;

        do {
          if (this.roomObj.game.move == 3) newMove = 0;
          else {
            newMove = this.roomObj.game.move + 1;
          }
        } while (this.roomObj.game.lose.indexOf(newMove) != -1);

        writeData(`rooms/${this.roomID}/game/move`, newMove);

        if (balance <= 0) this.lose();
      };

      if (this.cells[newPos].type == "money") {
        balance = balance - 150;
        endRoll();
      } else if (this.cells[newPos].type == "chance") {
        const num = Math.floor(Math.random() * 2 + 1);
        balance = num % 2 == 0 ? balance + 100 : balance + 0;
        endRoll();
      } else if (this.cells[newPos].type == "exam") {
        // экзамен
        // ...
        this.question = QUESTIONS[0];
      } else if (this.cells[newPos].type == "default") {
        // предмет
        // ...
        const list = QUESTIONS.filter(
          (el) => el.theme == this.cells[newPos].theme
        );

        if (list.length) this.question = list[0];
      } else if (this.cells[newPos].type == "start") {
        balance += 200;
        endRoll();
      } else if (this.cells[newPos].type == "home") {
        writeData(
          `rooms/${this.roomObj.id}/game/position/${this.roomObj.game.move}`,
          30
        );
        this.cells[10].players = this.cells[10].players.filter(
          (el) => el != this.roomObj.game.move
        );
        this.cells[30].players.push(this.roomObj.game.move);
        endRoll();
      } else if (this.cells[newPos].type == "tohome") {
        writeData(
          `rooms/${this.roomObj.id}/game/position/${this.roomObj.game.move}`,
          10
        );
        this.cells[30].players = this.cells[30].players.filter(
          (el) => el != this.roomObj.game.move
        );
        this.cells[10].players.push(this.roomObj.game.move);
        endRoll();
      }
    },

    lose() {
      // игрок проиграл
      // ...
      console.log("игрок  проиграл");
      console.log(`игрок: ${this.id}`);

      if (this.roomObj.game.lose) {
        this.roomObj.game.lose.push(this.roomObj.players.indexOf(this.id));
      } else {
        this.roomObj.game.lose = [this.roomObj.players.indexOf(this.id)];
      }

      writeData(`rooms/${this.roomID}/game/lose`, this.roomObj.game.lose);

      localStorage.setItem("STUDPOLY_PLAYER_ID", getKey());

      this.loseTemp = true;
      this.mask = true;
    },

    win() {
      this.mask = true;
      this.winTemp = true;
      localStorage.setItem("STUDPOLY_PLAYER_ID", getKey());
    },

    sendAnswer(answer) {
      let balance = this.roomObj.game.money[this.roomObj.game.move];

      if (this.question.right == answer) {
        balance += 200;
      } else {
        balance -= 200;
      }

      writeData(
        `rooms/${this.roomID}/game/money/${this.roomObj.game.move}`,
        balance
      );

      let newMove = 0;
      if (this.roomObj.game.move == 3) newMove = 0;
      else newMove = this.roomObj.game.move + 1;

      writeData(`rooms/${this.roomID}/game/move`, newMove);

      this.question = null;

      if (balance <= 0) this.lose();
    },

    sendMessage() {
      if (this.messageText.length) {
        writeData(`rooms/${this.roomID}/game/messages`, [
          ...this.roomObj.game.messages,
          {
            from: localStorage.getItem("STUDPOLY_PLAYER_NAME"),
            text: this.messageText,
          },
        ]);

        this.messageText = "";
      }
    },
  },
};
</script>
