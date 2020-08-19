<template>
  <div class="comment">
    <div class="comment__name">{{ comment.name }}</div>
    <div class="comment__text">{{ comment.comment }}</div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"]
};
</script>

<style lang="scss" scoped>
.comment {
  border-bottom: 1px solid gray;
  padding: 15px 0;
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
