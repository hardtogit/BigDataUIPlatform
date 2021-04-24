import { ref } from "vue";

export function toRuntimePx(rem, num) {
  return `${Math.ceil(rem.ActualPixels(num))}px`;
}
export function useDataConfig(rem) {
  const dataLines = ref([]);
  const dataColumns = ref([]);

  dataColumns.value = [
    {
      width: toRuntimePx(rem, 119),
      field: "name",
      title: "数据名称",
      align: "left",
      color: "#fff",
    },
    {
      width: toRuntimePx(rem, 172),
      field: "value",
      title: "去年",
      align: "center",
      color: "#66FAD5",
    },
    {
      width: toRuntimePx(rem, 136),
      field: "value2",
      title: "今年",
      align: "center",
      color: "#16CAFF",
    },
  ];

  dataLines.value = Array.from({ length: 10 }).map(() => {
    return {
      name: "总客运量",
      value: 834734,
      value2: 111,
    };
  });

  return {
    dataLines,
    dataColumns,
  };
}
