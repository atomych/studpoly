<template>
  <div class="container">
    <div class="bar">
      <div class="player" v-for="(item, idx) in roomObj.players" :key="item">
        <div class="name">
          {{ roomObj.game.names ? roomObj.game.names[idx] : "" }}
        </div>
        <div class="money">
          {{ roomObj.game.money ? roomObj.game.money[idx] : "" }}
        </div>
      </div>
    </div>
    <div class="field">
      <div class="left">
        <div class="cell corner start">
          <field-cell :obj="cells[0]" :text="''"></field-cell>
        </div>
        <div class="cell default red">
          <div class="text">искусство</div>
        </div>
        <div class="cell default red">
          <div class="text">хореография</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор <br />средств</div>
        </div>
        <div class="cell default red">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default blue">
          <div class="text">философия</div>
        </div>
        <div class="cell default blue">
          <div class="text">культурология</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default blue">
          <div class="text">социология</div>
        </div>
        <div class="cell corner">
          <div class="text">общежитие</div>
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
          <div class="text">шанс</div>
        </div>
        <div class="cell default red">
          <div class="text">политология</div>
        </div>
        <div class="cell default red">
          <div class="text">история</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default blue">
          <div class="text">информатика</div>
        </div>
        <div class="cell money default">
          <div class="text">
            сбор <br />
            средств
          </div>
        </div>
        <div class="cell default blue">
          <div class="text">программиро <br />вание</div>
        </div>
        <div class="cell default blue">
          <div class="text">базы данных</div>
        </div>
        <div class="cell corner">
          <div class="text">поездка к родителям</div>
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
          <div class="text">теория <br />вероятности</div>
        </div>
        <div class="cell default blue">
          <div class="text">линейная <br />алгебра</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор средств</div>
        </div>
        <div class="cell default blue">
          <div class="text">высшая <br />математика</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор <br />средств</div>
        </div>
        <div class="cell default green">
          <div class="text">физкультура</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default green">
          <div class="text">бжд</div>
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
    // проверка на то что пользователь обновил страницу, а не зашел в первый раз
    // ...

    this.roomID = this.$route.params.roomID;
    this.id = localStorage.getItem("STUDPOLY_PLAYER_ID");

    readData(`rooms/${this.roomID}`).then((data) => {
      this.roomObj = data.val();
      const names = [];

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
    });

    subscribeToUpadate(`rooms/${this.roomID}`, (data) => {
      this.roomObj = data.val();
    });
  },

  methods: {
    roll() {},
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
