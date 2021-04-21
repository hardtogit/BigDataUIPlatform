<template>
  <Page>
    <Header></Header>
    <AMap></AMap>
    <Panel :position="{ top: 112, left: 22 }" title="IC卡分类">
      <v-chart class="chart" :option="cardConfig" />
    </Panel>
    <Panel :position="{ top: 430, left: 22 }" title="客流变化">
      <v-chart class="chart" :option="optionTwo" />
    </Panel>
    <Panel :position="{ bottom: 28, left: 22 }" title="下属公司情况">
      <v-chart class="chart" :option="option" />
    </Panel>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@components/Page.vue";
import Header from "@components/Header.vue";
import Panel from "@components/Panel.vue";
import { rem } from "@/utils/index";
import { useCardConfig } from '@hooks/cardConfg'

import AMap from "@components/amap/Map.vue";
export default {
  setup(){
    const cardConfig =  useCardConfig(rem)
    return {
      cardConfig
    }
  },
  name: "Home",
  data() {
    return {
      optionOne: {},
      optionTwo: {},
      height: rem.ActualPixels(260),
    };
  },
  components: {
    Panel,
    Page,
    Header,
    AMap,
  },
  mounted() {
    console.log(rem.ActualPixels(100));
    this.optionOne = {
      tooltip: {
        trigger: "item",
        formatter: "{b} : {d}% ({c})",
        backgroundColor: "#090C12",
        borderColor: "#60b4cd",
        color: "#fff",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["普通卡", "免费卡", "学生卡", "员工卡", "移动支付"],
        itemWidth: rem.ActualPixels(16),
        itemHeight: rem.ActualPixels(10),
        textStyle: {
          fontSize: rem.ActualPixels(13),
          color: "#fff",
        },
        padding: [rem.ActualPixels(24), 0, 0, rem.ActualPixels(30)],
      },
      series: [
        {
          type: "pie",
          radius: [rem.ActualPixels(60), rem.ActualPixels(110)],
          center: ["60%", "50%"],
          roseType: "radius",
          data: [
            { value: 25, name: "学生卡" },
            { value: 10, name: "员工卡" },
            { value: 10, name: "移动支付" },
            { value: 34, name: "普通卡" },
            { value: 21, name: "免费卡" },
          ],
          labelLine: {
            show: false,
          },
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: rem.ActualPixels(12),
            color: "#fff",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    this.optionTwo = {
      legend: {},
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
          ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7]
        ],
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.chart {
  height: 260px;
}
</style>