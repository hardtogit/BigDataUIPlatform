import  { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ECharts from "vue-echarts";
import * as Core from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import * as Chart from "echarts/charts";
import * as Components from "echarts/components";
const TotalChart = Object.keys(Chart).reduce((total, current) => {
  return [...total, Chart[current]];
}, []);
const TotalComponents = Object.keys(Components).reduce((total, current) => {
  return [...total, Components[current]];
}, []);
Core.use([...TotalChart, ...TotalComponents, CanvasRenderer]);
const app = createApp(App);
app
  .use(store)
  .use(router)
  .component("v-chart", ECharts)
  .mount("#app");
app.config.globalProperties.$echrts = Core;
