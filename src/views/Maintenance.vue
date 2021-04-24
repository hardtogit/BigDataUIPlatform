<template>
  <Page>
    <Scoreboard
      prefix="实时刷卡人次"
      suffix="次"
      countNum="5428447"
    ></Scoreboard>
    <SubScoreboard></SubScoreboard>
    <AMap @ready="handleReady"></AMap>
    <Panel :position="{ top: 112, left: 22 }" title="IC卡分类"></Panel>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@components/Page.vue";
import Panel from "@components/Panel.vue";



import AMap from "@components/amap/Map.vue";

export default {
  name: "Maintenance",
  data() {
    return {};
  },
  methods: {
    handleReady(map) {
      console.log("0000", map);
    },
  },
  components: {
    Panel,
    Page,
    AMap,
     
  },
};
</script>
<style lang="scss" scoped>
.chart {
  height: 260px;
}
</style>