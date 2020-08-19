<template>
  <router-link :to="`note/${note.id}`" class="link">
    <div class="listItem">
      <div class="listItem__title">{{ note.title }}</div>
      <div class="listItem__descr">{{ note.smallDescr }}</div>
      <div class="listItem__comments">
        <img src="../assets/comments.png" />
        <span>{{ note.comments.length }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ListItem",
  props: ["note"]
};
</script>

<style lang="scss" scoped>
.listItem {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  &__title {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
  }
  &__descr {
    font-size: 15px;
    font-weight: normal;
  }
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
.link {
  text-decoration: none;
  color: black;
}
</style>
