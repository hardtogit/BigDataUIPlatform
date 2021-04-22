<template>
  <vue-seamless-scroll :data="listData" class="table-box">
      <ul class="item">
      <li v-for="(item, index) in listData" :key="index">
        <span class="title" v-text="item.title"></span>
        <span class="date" v-text="item.date"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.table-box {
  height: 100%;
  width: 100%;
}
</style>