<template>
  <div class="list">
    <div v-if="notes.length">
      <ListItem v-for="note in notes" :key="note.id" :note="note" />
    </div>
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
}
</style>
