<template>
  <Page>
    <Header></Header>
    <AMap></AMap>
    <Panel :position="{ top: 112, left: 22 }" title="IC卡分类">
      <v-chart class="chart" :option="option" :style="`height:${height}px`" />
    </Panel>
    <Panel :position="{ top: 430, left: 22 }" title="客流变化">
      <v-chart class="chart" :option="option" :style="`height:${height}px`" />
    </Panel>
    <Panel :position="{ bottom: 28, left: 22 }" title="下属公司情况">
      <v-chart class="chart" :option="option" :style="`height:${height}px`" />
    </Panel>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@components/Page.vue";
import Header from "@components/Header.vue";
import Panel from "@components/Panel.vue";
import { rem } from "@/utils/index";

import AMap from "@components/amap/Map.vue";
export default {
  name: "Home",
  data() {
    return {
      option: {},
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
    this.option = {
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
  },
};
</script>
