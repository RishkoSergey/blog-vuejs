<template>
  <div class="header">
    <img src="../assets/logo.png" class="header__logo" />
    <div class="header__buttons">
      <div class="header__button">
        <img src="../assets/allNotes.png" />
        <p>Все записи</p>
      </div>
      <div class="header__button">
        <img src="../assets/addNote.png" />
        <p>Добавить запись</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  top: 0;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-left: 20px;
  width: calc(100% - 20px);
  &__logo {
    height: 70%;
    margin-right: 10px;
  }
  &__buttons {
    height: 100%;
    display: flex;
  }
  &__button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: #ededed;
    }
    img {
      height: 70%;
      margin-right: 5px;
    }
  }
  @media (max-width: 767px) {
    font-size: 13px;
    height: 30px;
  }
}
</style>
