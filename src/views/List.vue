<template>
  <div class="list">
    <div v-if="notes.length">
      <ListItem v-for="note in notes" :key="note.id" :note="note" />
    </div>
    <h1 v-else>Записей пока нет</h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ListItem from "../components/ListItem";

export default {
  name: "List",
  components: {
    ListItem
  },
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
  @media (max-width: 767px) {
    padding: 15px 10px 0 10px;
  }
}
</style>
