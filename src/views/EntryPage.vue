<template>
  <div class="page">
    <div class="container">
      <div class="top">
        <a href="">О игре</a>
      </div>
      <div class="nickname">
        <input type="text" class="field" />
        <button class="save">Сохранить</button>
      </div>
      <img src="../assets/img/1.png" alt="" />
      <div class="btns">
        <button class="create">
          Создание <br />
          комнаты
        </button>
        <div class="roomcode">
          <div class="text">
            Введи код <br />
            комнаты
          </div>
          <input type="text" class="code" />
        </div>
      </div>
      <div class="rooms">
        <h1 class="title">Подключиться к уже имеющимся</h1>
        <div class="rooms__inner">
          <div class="titles">
            <h2>Код комнаты</h2>
            <h2>Кол-во Игроков</h2>
          </div>
          <div class="rooms__item">
            <h2 class="code">1834</h2>
            <h2 class="players">3</h2>
            <button class="connect">Подключиться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  color: #000;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 500;

  display: flex;
  justify-content: end;

  padding: 10px;
  padding-right: 30px;

  a {
    text-decoration: none;
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
    border: 2px solid #000;
    outline: none;

    display: block;
    width: 100%;

    padding: 5px 10px;
    font-size: 18px;
  }

  .save {
    border: none;
    cursor: pointer;

    position: absolute;

    font-size: 18px;
    padding: 5px 10px;

    top: 1px;
    right: 1px;

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

    padding: 5px 10px;
    padding-right: 70px;

    background-color: #aa77c5;
    color: #fff;

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

    background-color: #d871a8;
    border: 2px solid #000;
    color: #fff;

    padding: 5px 10px;

    transform: rotate(4deg);

    .code {
      border: none;
      padding: 0;
      background-color: #d871a8;

      margin-left: 10px;

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
  border: 1px solid #000;

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
  }

  &__inner {
    display: flex;
    flex-direction: column;

    justify-content: center;

    .titles {
      display: flex;

      font-size: 16px;

      h2 {
        padding: 5px 10px;
        border: 2px solid #000;

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

    .code {
      width: 166px;
      text-align: center;

      padding: 5px 10px;
      border: 2px solid #000;
      margin-right: 15px;
    }

    .players {
      width: 196px;

      text-align: center;

      padding: 5px 10px;
      border: 2px solid #000;

      margin-right: 15px;
    }
  }
}
</style>

<script>
export default {
  name: "EntryPage",
};
</script>
