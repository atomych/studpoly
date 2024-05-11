<template>
  <div class="container">
    <div class="bar">
      <div class="player">
        <div class="name">1</div>
        <div class="money">22</div>
      </div>
      <div class="player">
        <div class="name">1</div>
        <div class="money">22</div>
      </div>
      <div class="player">
        <div class="name">1</div>
        <div class="money">22</div>
      </div>
      <div class="player">
        <div class="name">1</div>
        <div class="money">22</div>
      </div>
    </div>
    <div class="field">
      <div class="left">
        <div class="cell corner start">
          <div class="text"></div>
        </div>
        <div class="cell default">
          <div class="text">искусство</div>
        </div>
        <div class="cell default">
          <div class="text">хореография</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор средств</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default">
          <div class="text">культурология</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell corner">
          <div class="text">общежитие</div>
        </div>
      </div>
      <div class="right">
        <div class="cell corner">
          <div class="text">поездка к родителям</div>
        </div>
        <div class="cell default">
          <div class="text">искусство</div>
        </div>
        <div class="cell default">
          <div class="text">хореография</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор средств</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default">
          <div class="text">культурология</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell corner">
          <div class="text">общежитие</div>
        </div>
      </div>
      <div class="top">
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор средств</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
      </div>
      <div class="bottom">
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell chance default">
          <div class="text">шанс</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell default">
          <div class="text">актерское мастерство</div>
        </div>
        <div class="cell exam default">
          <div class="text">экзамен</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell money default">
          <div class="text">сбор средств</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
        <div class="cell default">
          <div class="text">социология</div>
        </div>
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

      .text {
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
  }

  .right {
    .cell {
      .text {
        transform: rotate(-90deg);
      }
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
  }

  .top {
    top: 0;
    left: 125px;
  }

  .bottom {
    bottom: 0;
    left: 125px;
  }
}

.cell {
  border: 1px solid #000;

  &.corner {
    width: 125px;
    height: 125px;
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

export default {
  name: "GamePage",

  data() {
    return {
      cells: CELLS,
    };
  },
};
</script>
