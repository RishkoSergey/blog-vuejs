<template>
  <div class="list">
    <div v-if="notes.length">
      <div v-for="note in notes" :key="note.id" class="list__item">
        <div class="list__item__title">{{ note.title }}</div>
        <div class="list__item__descr">{{ note.smallDescr }}</div>
        <div class="list__item__comments">
          <img src="../assets/comments.png" />
          <span>{{ note.comments.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: mapState(["notes"]),
  methods: mapMutations(["getInfo"]),
  mounted() {
    this.getInfo();
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 30px 20px 0 20px;
  &__item {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    &__comments {
      margin-left: auto;
      margin-top: 5px;
      display: flex;
      align-items: center;
      img {
        width: 20px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
