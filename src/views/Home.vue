<template>
  <Page>
    <Scoreboard
      prefix="实时刷卡人次"
      suffix="次"
      countNum="5428447"
    ></Scoreboard>
    <SubScoreboard></SubScoreboard>
    <AMap @ready="handleReady"></AMap>
    <Panel :position="{ top: 112, left: 22 }" title="IC卡分类">
      <v-chart class="chart" :option="cardConfig" />
    </Panel>
    <Panel :position="{ top: 430, left: 22 }" title="客流变化">
      <v-chart class="chart" :option="customConfig" />
    </Panel>
    <Panel :position="{ bottom: 28, left: 22 }" title="下属公司情况">
      <div class="box">
        <Table :columns="columns" :data="data" />
      </div>
    </Panel>
    <HotLine></HotLine>
    <BusStatistics></BusStatistics>
    <HotStation></HotStation>
    <Panel :position="{ right: 22, top: 112 }" title="统计">
      <PercentBar label="工作车率" percent="83.3" color="#fff"></PercentBar>
      <PercentBar label="班次完成率" percent="60" color="#66FAD5"></PercentBar>
      <PercentBar
        label="早高峰出车率"
        percent="83.3"
        color="#16CAFF"
      ></PercentBar>
      <PercentBar
        label="高峰班次完成率(本月)"
        percent="76"
        color="#fff"
      ></PercentBar>
      <PercentBar
        label="优先道正点率(本月)"
        percent="92"
        color="#F05B49
"
      ></PercentBar>
    </Panel>
    <Panel :position="{ right: 22, top: 430 }" title="里程与客运量趋势分析">
      <v-chart class="chart" :option="mileConfig" />
    </Panel>
    <Panel :position="{ right: 22, bottom: 28 }" title="数据总览">
      <Dataline />
    </Panel>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@components/Page.vue";
import Panel from "@components/Panel.vue";
import HotLine from "@/components/home/HotLine.vue";
import BusStatistics from "@/components/home/BusStatistics.vue";
import HotStation from "@/components/home/HotStation.vue";
import PercentBar from "@/components/home/PercentBar.vue";
import Table from "@components/scroll-table/Table.vue";
import Scoreboard from "@/components/home/Scoreboard.vue";
import SubScoreboard from "@/components/home/SubScoreboard.vue";
import Dataline from "@components/home/DataLine.vue";

import { rem } from "@/utils/index";
import { useCardConfig } from "@hooks/cardConfg";
import { useCustomConfig } from "@hooks/csutomConfig";
import { useMileConfig } from "@hooks/mileConfig";
import { useCompany } from "@hooks/company";
import AMap from "@components/amap/Map.vue";

export default {
  setup() {
    const cardConfig = useCardConfig(rem);
    const customConfig = useCustomConfig(rem);
    const mileConfig = useMileConfig(rem);
    const companies = useCompany(rem);
    return {
      cardConfig,
      customConfig,
      mileConfig,
      columns: companies.columns,
      data: companies.companies,
    };
  },
  name: "Home",
  data() {
    return {};
  },
  methods: {
    handleReady(map) {
      console.log("0000", map);
    },
  },
  mounted(){
    console.log(this.$echrts)
  },
  components: {
    Panel,
    Page,
    AMap,
    HotLine,
    BusStatistics,
    HotStation,
    PercentBar,
    Table,
    Scoreboard,
    SubScoreboard,
    Dataline,
  },
};
</script>
<style lang="scss" scoped>
.chart {
  height: 260px;
}
.box {
  padding: 11px 7px 0 7px;
  height: 100%;
}
</style>