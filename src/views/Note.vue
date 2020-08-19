<template>
  <div class="note">
    <div class="note__title">{{ note.title }}</div>
    <div class="note__smallDescr">{{ note.smallDescr }}</div>
    <div class="note__fullDescr">{{ note.fullDescr }}</div>
    <div v-if="note.comments.length">
      <h1>Комментарии</h1>
      <Comment
        v-for="comment in note.comments"
        :key="comment.title"
        :comment="comment"
      />
    </div>
    <h1 v-else>Комментариев пока нет</h1>
    <AddComment />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Comment from "../components/Comment";
import AddComment from "../components/AddComment";

export default {
  name: "Note",
  components: {
    Comment,
    AddComment
  },
  computed: {
    ...mapState(["notes"]),
    note: function() {
      return this.notes.find(note => note.id == this.$route.params.id);
    }
  },
  methods: mapMutations(["getInfo"]),
  mounted() {
    this.getInfo();
  }
};
</script>

<style lang="scss" scoped>
.note {
  margin: 30px 20px 0 20px;
  background-color: white;
  padding: 20px;
  padding-bottom: 10px;
  &__title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &__smallDescr {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__fullDescr {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
  }
}
</style>
