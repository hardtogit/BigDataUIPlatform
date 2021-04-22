import { ref } from "vue";
// import { rem } from "@/";

/**
 *
 * @param {*} rem
 */
export function useCompany(rem) {
  const columns = ref([]);
  const companies = ref([]);
  columns.value = [
    {
      width: Math.ceil(rem.ActualPixels(110)) + "px",
      field: "name",
      title: "公司名称",
      align: "left",
    },
    {
      width: Math.ceil(rem.ActualPixels(67)) + "px",
      field: "num",
      title: "出车数",
      align: "left",
    },
    {
      //72
      width: Math.ceil(rem.ActualPixels(72)) + "px",
      field: "bc",
      title: "班次数",
      align: "left",
    },
    {
      //72
      width: Math.ceil(rem.ActualPixels(93)) + "px",
      field: "dis",
      title: "里程数",
      align: "left",
    },
    {
      //72
      width: Math.ceil(rem.ActualPixels(90)) + "px",
      field: "pl",
      title: "人次数",
      align: "left",
    },
  ];

  companies.value = Array.from({ length: 10}).map(()=>({
       name: "九龙坡分公司",
      num: 1234,
      bc: 1234,
      dis: 199,
      pl: 9
  })) 
  

  return {
    columns,
    companies
  };
}
