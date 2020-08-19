<template>
  <div class="comment">
    <div class="comment__body">
      <div class="comment__name">{{ comment.name }}</div>
      <div class="comment__text">{{ comment.comment }}</div>
    </div>
    <div class="comment__button" @click="removeComment">
      <img src="../assets/delete.png" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Comment",
  props: ["comment"],
  methods: {
    ...mapMutations(["deleteComment"]),
    removeComment() {
      this.deleteComment({
        id: this.comment.id,
        noteId: this.comment.noteId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  border-bottom: 1px solid gray;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__button {
    cursor: pointer;
    img {
      width: 20px;
    }
  }
  &__name {
    color: #006496;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
  }
  &__text {
    font-weight: normal;
    font-size: 15px;
  }
}
</style>
