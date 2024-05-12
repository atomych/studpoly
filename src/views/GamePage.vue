<template>
  <div class="container">
    <div class="bar">
      <div
        class="player"
        v-for="(item, idx) in roomObj?.game?.names"
        :key="idx"
      >
        <div class="name">
          {{ item }}
        </div>
        <div class="money">
          {{ roomObj.game.money[idx] }}
        </div>
      </div>
    </div>
    <div class="field">
      <div class="left">
        <div class="cell corner start">
          <field-cell :obj="cells[0]" :text="''"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[30]" :text="'искусство'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell :obj="cells[31]" :text="'хореография'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[32]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default red">
          <field-cell
            :obj="cells[33]"
            :text="'актерское мастерство'"
          ></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[34]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[35]" :text="'философия'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[36]" :text="'культурология'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[37]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[38]" :text="'социология'"></field-cell>
        </div>
        <div class="cell corner">
          <field-cell :obj="cells[39]" :text="'общежитие'"></field-cell>
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
            :obj="cells[21]"
            :text="'теория вероятности'"
          ></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[22]" :text="'линейная алгебра'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[23]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default blue">
          <field-cell :obj="cells[24]" :text="'высшая математика'"></field-cell>
        </div>
        <div class="cell exam default">
          <field-cell :obj="cells[25]" :text="'экзамен'"></field-cell>
        </div>
        <div class="cell money default">
          <field-cell :obj="cells[26]" :text="'сбор средств'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[27]" :text="'физкультура'"></field-cell>
        </div>
        <div class="cell chance default">
          <field-cell :obj="cells[28]" :text="'шанс'"></field-cell>
        </div>
        <div class="cell default green">
          <field-cell :obj="cells[29]" :text="'бжд'"></field-cell>
        </div>
      </div>
      <div class="window" v-if="canRoll">
        <button @click="roll()">Бросить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Lobelia";
  src: url("../assets/fonts/Lobelia.ttf");
}

.container {
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 20px 0;
}

.bar {
  display: flex;
  flex-direction: column;

  margin-right: 50px;

  .player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;

    width: 100px;
    height: 100px;

    border: 1px solid #000;

    .name {
      margin-bottom: 10px;
    }
  }
}

.field {
  display: flex;
  justify-content: space-between;

  position: relative;

  width: 100%;
  max-width: 1015px;

  background: url("../assets/img/background.png");

  .window {
    width: 200px;
    height: 200px;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
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
import { CELLS } from "../js/studpoly";
import { readData, subscribeToUpadate, writeData } from "../firebase/database";

import FieldCell from "../components/FieldCell.vue";

export default {
  name: "GamePage",

  data() {
    return {
      cells: CELLS,
      roomID: "",
      id: "",
      roomObj: {},
    };
  },

  components: { FieldCell },

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
    });
  },

  methods: {
    roll() {
      const firstNum = Math.floor(Math.random() * 6 + 1);
      const secondNum = Math.floor(Math.random() * 6 + 1);
      const sum = firstNum + secondNum;
      const currentPos = this.roomObj.game.position[this.roomObj.game.move];
      let newPos = 0;

      if (sum + currentPos < 39) newPos = sum + currentPos;
      else newPos = sum - (39 - currentPos) - 1;

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
      let newBalance = 1000;
      // ...
      // Произошла обработка клетки, игрок выполнил действия
      // Теперь надо передать ход, изменить баланс игрока

      writeData(
        `rooms/${this.roomID}/game/money/${this.roomObj.game.move}`,
        newBalance
      );

      let newMove = 0;
      if (this.roomObj.game.move == 3) newMove = 0;
      else newMove = this.roomObj.game.move + 1;

      writeData(`rooms/${this.roomID}/game/move`, newMove);
    },
  },

  computed: {
    canRoll() {
      if (this.roomObj.game)
        return this.roomObj.game.move == this.roomObj.players.indexOf(this.id);
      else return false;
    },
  },
};
</script>
