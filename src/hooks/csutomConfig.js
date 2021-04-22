import { ref } from "vue";

/**
 * 客流
 */
export function useCustomConfig(rem) {
  console.log(rem);

  const colors = ["#F05B49", "#16CAFF"];
  const customRef = ref({});
  customRef.value = {
    color: colors,
    tooltip: {
      trigger: "axis",
      showContent: false
    },
    legend: {
      data: ["班次", "人次"],
      top: rem.ActualPixels(10),
      left: rem.ActualPixels(10)
    },
    xAxis: {
      type: "category",
      nameLocation: "start",
      axisLine: {
        show: false,
        onZero: false,
        lineStyle: {
          color: "#9EBFCB"
        }
      },
      data: ["0", "3", "6", "9", "12", "15", "18", "21"]
    },
    yAxis: {
      gridIndex: 0,
      axisLine: {
        show: false,
        onZero: false,
        lineStyle: {
          color: "#9EBFCB"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#9EBFCB"]
        }
      }
    },
    grid: {
      show: true,
      borderColor: "#9EBFCB",
      left: rem.ActualPixels(60),
      top: rem.ActualPixels(60),
      bottom: rem.ActualPixels(50),
      right: rem.ActualPixels(20)
    },
    series: [
      {
        type: "line",
        name: "班次",
        data: [50, 20, 100, 120, 140, 160, 200, 110],
        smooth: true,
        symbol: "emptyCircle",
        lineStyle: {
          color: colors[0]
        },
        itemStyle: {
          color: colors[0]
        }
      },
      {
        type: "line",
        name: "人次",
        data: [70, 40, 130, 150, 170, 190, 250, 130],
        smooth: true,
        lineStyle: {
          color: colors[1]
        },
        itemStyle: {
          color: colors[1]
        }
      }
    ]
  };
  return customRef;
}
