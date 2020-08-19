<template>
  <div class="popup">
    <div class="popup__content">
      <textarea
        v-model="title"
        placeholder="Введите название записи"
        rows="2"
        class="popup__content__title"
      />
      <textarea
        v-model="smallDescr"
        placeholder="Введите краткое описание"
        rows="4"
        class="popup__content__small"
      />
      <textarea
        v-model="fullDescr"
        placeholder="Введите полное описание"
        rows="6"
        class="popup__content__full"
      />
      <div class="popup__close" @click="closePopup">
        <img src="../assets/close.png" />
      </div>
      <div class="popup__bottom">
        <button class="popup__save" @click="saveNote" :disabled="disable">
          Сохранить
        </button>
        <p v-if="disable">Каждое поле должно быть заполнено</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Popup",
  data: () => ({
    title: "",
    smallDescr: "",
    fullDescr: ""
  }),
  computed: {
    disable: function() {
      return !(this.title && this.smallDescr && this.fullDescr);
    }
  },
  methods: {
    ...mapMutations(["createNote"]),
    closePopup: function() {
      this.$emit("close");
    },
    saveNote: function() {
      this.createNote({
        title: this.title,
        smallDescr: this.smallDescr,
        fullDescr: this.fullDescr
      });
      this.closePopup();
    }
  }
};
</script>

<style lang="scss">
.popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  &__content {
    position: relative;
    background-color: white;
    width: 800px;
    min-height: 100px;
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    textarea {
      width: 80%;
      margin-bottom: 15px;
      margin-left: 20px;
      &:focus {
        outline: none;
      }
    }
    &__title {
      margin-top: 20px;
    }
    &__small {
      height: 40px;
    }
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  &__save {
    width: 150px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid gray;
    background-color: #ededed;
    margin-left: 20px;
  }
  &__bottom {
    display: flex;
    p {
      margin-left: 10px;
      color: gray;
    }
  }
  @media (max-width: 767px) {
    margin-left: -20px;
    &__content {
      box-shadow: none;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
