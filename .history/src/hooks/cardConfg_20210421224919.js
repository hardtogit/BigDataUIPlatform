import { ref } from "vue";

/**
 * 返回card 配置
 */
export function useCardConfig(rem) {
  let config = ref({});
  setTimeout(() => {
    config.value = {
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
  }, 1000);

  return config;
}
