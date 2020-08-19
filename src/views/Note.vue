<template>
  <div class="note">
    <div class="note__title">{{ note.title }}</div>
    <div class="note__smallDescr">{{ note.smallDescr }}</div>
    <div class="note__fullDescr">{{ note.fullDescr }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Note",
  computed: {
    ...mapState(["notes"]),
    note: function() {
      return this.notes.find(note => note.id == this.$route.params.id);
    }
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
  }
}
</style>
