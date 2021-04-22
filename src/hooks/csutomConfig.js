import { ref } from "vue";

/**
 * 客流
 */
export function useCustomConfig(rem) {
  const colors = ["#F05B49", "#16CAFF"];
  const customRef = ref({});
  customRef.value = {
    color: colors,
    tooltip: {
      trigger: "axis",
      backgroundColor: "#090C12",
      borderColor: "#60b4cd",
      color: "#fff",
      axisPointer: {
        type: 'line',
        lineStyle: {
          type: 'solid',
          color: '#637D83'
        }
      }
    },
    legend: {
      data: ["班次", "人次"],
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
      data: ["0", "3", "6", "9", "12", "15", "18", "21"]
    },
    yAxis: {
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
          color: ["#293E4D", '#293E4D', '#293E4D']
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
