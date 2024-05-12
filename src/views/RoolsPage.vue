<template>
  <div class="container">
    <div class="top">
      <a href="" @click.prevent="toMain()">на главную</a>
    </div>
    <div class="rools">
      <img src="../assets/img/2.png" alt="" />
      <h1 class="title">правила игры</h1>
      <div class="text big">
        Давай, гоним в игру!<br />
        Брось кубик, сделай свой ход.
      </div>
      <div class="text h">клетка с предметом!</div>
      <div class="text def">
        Тебе предстоит выбор: либо потратить 200 и не отвечать на вопрос, либо
        рискнуть и ответить (правильный ответ подкинет тебе +200, а неправильный
        вычтет -100).
      </div>
      <div class="text h">экзамен!</div>
      <div class="text def">
        Приготовься отвечать на вопрос по любой теме. Если ответишь верно,
        заберешь +400, а если ошибешься, придется отдать -400.
      </div>
      <div class="text h">клетка шанса!</div>
      <div class="text def">
        Тут всегда весело, ведь ты можешь выиграть рандомную сумму. Например,
        тебе может повезти и ты получишь денежный приз +100 за победу на
        олимпиаде.
      </div>
      <div class="text h">Теперь общественный сбор.</div>
      <div class="text def">
        Готовься раскошелиться, ведь тут тебе придется потерять рандомную сумму.
        Например, платеж за студенческий совет -150(обидно).
      </div>
      <div class="text h">И поехали в общагу!</div>
      <div class="text def">
        Тут ты пропускаешь ход и не заработаешь +200, но если после каждого
        круга ты оказываешься тут, добавляй к своему балансу +200
      </div>
      <div class="text h">Еще один интересный момент:</div>
      <div class="text def">
        если не знаешь ответ на вопрос, можешь перекинуть его на следующего
        игрока. Так вопрос не пропадет, а игра будет шагать к своему завершению.
      </div>
      <div class="text bottom">
        Помним, что когда деньги на нуле, проигрыш близок. Побеждает тот, кто
        выживет до конца!
      </div>
      <div class="text end">удачи!</div>
    </div>

    <img src="../assets/img/star-bg.png" alt="" class="star n1" />
    <img src="../assets/img/star-bg.png" alt="" class="star n2" />
    <img src="../assets/img/star-bg.png" alt="" class="star n3" />
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Aven";
  src: url("../assets/fonts/AVENGEANCE_MIGHTIEST_AVENGER_RUS_0.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "MontReg";
  src: url("../assets/fonts/MontserratAlternates-Regular.ttf");
  font-weight: 400;
}

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

.container {
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding-bottom: 20px;

  position: relative;

  .star {
    position: absolute;

    width: 140px;
    height: auto;

    &.n1 {
      top: 18%;
      left: -20px;
    }

    &.n2 {
      right: -30px;
      top: 40%;
    }

    &.n3 {
      bottom: 0;
      right: 0;
    }
  }
}

.top {
  background-color: #f8cf3f;

  display: flex;
  justify-content: end;

  padding: 10px;
  padding-right: 30px;

  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    opacity: 0.6;
    font-family: "MontMed";
  }
}

.rools {
  display: flex;
  flex-direction: column;

  background-color: #ffeaea;
  border: 2px solid #000;

  padding: 20px;

  img {
    max-width: 100%;
    height: auto;
  }

  .title {
    font-family: "Aven";
    text-align: center;

    margin-bottom: 50px;
  }

  .text {
    padding: 0 50px;

    &.big {
      font-family: "MontSem";
      font-size: 25px;

      margin-bottom: 30px;
    }

    &.h {
      font-family: "MontBold";
      font-size: 18px;

      margin-bottom: 5px;
    }

    &.def {
      font-family: "MontReg";
      font-size: 16px;

      margin-bottom: 30px;
    }

    &.bottom {
      font-family: "MontBold";
      font-size: 20px;

      margin-bottom: 30px;
    }

    &.end {
      font-family: "Aven";
      font-size: 50px;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  name: "RoolsPage",

  methods: {
    toMain() {
      this.$router.push({ name: "entry" });
    },
  },
};
</script>
