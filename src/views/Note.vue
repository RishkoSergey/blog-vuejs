<template>
  <div class="note">
    <div class="note__top">
      <div class="note__title">{{ note.title }}</div>
      <div class="note__buttons">
        <div class="note__edit" @click="showPopup = true">
          <img src="../assets/edit.png" />
          <p>Редактировать</p>
        </div>
        <div class="note_delete" @click="removeNote">
          <img src="../assets/delete.png" />
          <p>Удалить запись</p>
        </div>
      </div>
    </div>
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
    <Popup v-if="showPopup" @close="showPopup = false" :id="$route.params.id" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Comment from "../components/Comment";
import AddComment from "../components/AddComment";
import Popup from "../components/Popup";

export default {
  name: "Note",
  components: {
    Comment,
    AddComment,
    Popup
  },
  data: () => ({
    showPopup: false
  }),
  computed: {
    ...mapState(["notes"]),
    note: function() {
      return this.notes.find(note => note.id == this.$route.params.id);
    }
  },
  methods: {
    ...mapMutations(["getInfo", "deleteNote"]),
    removeNote() {
      this.deleteNote(this.$route.params.id);
      this.$router.push("/");
    }
  },
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
  position: relative;
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &__smallDescr {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  &__fullDescr {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  &__buttons {
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 5px;
      &:hover {
        background-color: #ededed;
      }
      img {
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  &__edit {
    margin-bottom: 5px;
  }
  @media (max-width: 767px) {
    margin: 15px 10px 0 10px;
    padding: 10px;
    padding-bottom: 5px;
    &__title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    &__smallDescr {
      font-size: 14px;
      margin-bottom: 5px;
    }
    &__fullDescr {
      font-size: 14px;
      margin-bottom: 15px;
    }
    &__buttons {
      div {
        &:hover {
          background-color: #ededed;
        }
        img {
          height: 15px;
          margin-right: 5px;
        }
        p {
          display: none;
        }
      }
    }
  }
}
h1 {
  @media (max-width: 767px) {
    font-size: 22px;
  }
}
</style>
