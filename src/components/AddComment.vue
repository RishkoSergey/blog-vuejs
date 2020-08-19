<template>
  <div class="addComment">
    <p class="addComment__title">Оставить комментарий</p>
    <textarea
      v-model="name"
      placeholder="Введите имя"
      rows="2"
      class="addComment__name"
    />
    <textarea
      v-model="comment"
      placeholder="Введите комментарий"
      rows="6"
      class="addComment__comment"
    />
    <div class="addComment__bottom">
      <button class="addComment__save" @click="saveComment" :disabled="disable">
        Сохранить
      </button>
      <p v-if="disable">Каждое поле должно быть заполнено</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddComment",
  data: () => ({
    name: "",
    comment: ""
  }),
  computed: {
    disable: function() {
      return !(this.name && this.comment);
    }
  },
  methods: {
    ...mapMutations(["addComment"]),
    saveComment: function() {
      this.addComment({
        noteId: this.$route.params.id,
        name: this.name,
        comment: this.comment
      });
      this.name = "";
      this.comment = "";
    }
  }
};
</script>

<style lang="scss">
.addComment {
  background-color: #fff;
  margin-top: 20px;
  &__title {
    font-size: 20px;
  }
  textarea {
    width: 80%;
    margin-bottom: 15px;
    &:focus {
      outline: none;
    }
  }
  &__name {
    margin-top: 20px;
  }
  &__save {
    width: 150px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid gray;
    background-color: #ededed;
  }
  &__bottom {
    display: flex;
    p {
      margin-left: 10px;
      color: gray;
    }
  }
}
</style>
