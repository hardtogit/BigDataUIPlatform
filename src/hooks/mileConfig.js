import { ref } from "vue";
// import ECharts from "vue-echarts";

/**
 * 里程与客运量趋势分析
 */
export function useMileConfig(rem) {
  const colors = ["#F1C462", "#66FAD5"];
  const customRef = ref({});
  customRef.value = {
    // color: colors,
    tooltip: {
      trigger: "axis",
      backgroundColor: "#090C12",
      borderColor: "#60b4cd",
      color: "#fff",
      axisPointer: {
        type: "line",
        lineStyle: {
          type: "solid",
          color: "#637D83"
        }
      }
    },
    legend: {
      data: ["里程", "客运量"],
      top: rem.ActualPixels(10),
      left: rem.ActualPixels(30),
      textStyle: {
        color: "#9ebfcb"
      }
    },
    xAxis: {
      type: "category",
      nameLocation: "start",
      boundaryGap: false,
      axisLine: {
        show: true,
        onZero: false,
        lineStyle: {
          color: "#637D83"
        }
      },
      data: [
        "3-1",
        "3-4",
        "3-7",
        "3-10",
        "3-13",
        "3-16",
        "3-19",
        "3-22",
        "3-25",
        "3-28",
        "3-31"
      ]
    },
    yAxis: {
      containLabel: true,
      axisLine: {
        show: true,
        onZero: false,
        lineStyle: {
          color: "#637D83"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#293E4D", "#293E4D", "#293E4D"]
        }
      }
    },
    grid: {
      show: true,
      borderColor: "#293E4D",
      left: rem.ActualPixels(60),
      top: rem.ActualPixels(60),
      bottom: rem.ActualPixels(50),
      right: rem.ActualPixels(20)
    },
    series: [
      {
        type: "line",
        name: "里程",
        data: [50, 20, 100, 120, 140, 160, 200, 110, 120, 340, 100],
        smooth: false,
        symbol: "emptyCircle",
        lineStyle: {
          color: colors[0]
        },

        // areaStyle: {
        //   opacity: 0.8,
        //   color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [
        //     {
        //       offset: 0,
        //       color: "rgba(128, 255, 165)"
        //     },
        //     {
        //       offset: 1,
        //       color: "rgba(1, 191, 236)"
        //     }
        //   ])
        // },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: colors[0] // 0% 处的颜色
              },
              {
                offset: 1,
                color: colors[0] // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        itemStyle: {
          color: colors[0]
        }
      },
      {
        type: "line",
        name: "客运量",
        data: [70, 40, 130, 150, 170, 190, 250, 130, 150, 400, 140],
        smooth: false,
        lineStyle: {
          color: colors[1]
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#002b50" // 0% 处的颜色
              },
              {
                offset: 1,
                color: colors[1] // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        itemStyle: {
          color: colors[1]
        }
      }
    ]
  };
  return customRef;
}
