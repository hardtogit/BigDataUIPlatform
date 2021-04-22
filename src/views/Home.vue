<template>
  <Page>
    <Header></Header>
    <AMap @ready="handleReady"></AMap>
    <Panel :position="{ top: 112, left: 22 }" title="IC卡分类">
      <v-chart class="chart" :option="cardConfig" />
    </Panel>
    <Panel :position="{ top: 430, left: 22 }" title="客流变化">
      <v-chart class="chart" :option="customConfig" />
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
import { useCustomConfig } from '@hooks/csutomConfig'


import AMap from "@components/amap/Map.vue";
export default {
  setup(){
    const cardConfig =  useCardConfig(rem)
    const customConfig = useCustomConfig(rem)
    return {
      cardConfig,
      customConfig
    }
  },
  name: "Home",
  data() {
    return {};
  },
  methods: {
    handleReady(map){
      console.log('0000', map)
    }
  },
  components: {
    Panel,
    Page,
    Header,
    AMap,
  }
};
</script>
<style lang="scss" scoped>
.chart {
  height: 260px;
}
</style>