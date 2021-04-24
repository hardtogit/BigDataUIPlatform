<template>
  <Select :options="options" v-model="val">
     <template #open-indicator="{ attributes }">
      <span v-bind="attributes" class="aciton"></span>
    </template>
  </Select>
</template>

<script>
import Select from "./Select/index";

export default {
  data() {
    return {
      options: ["本年度数据", "近30个月", "近半年"],
      val: '本年度数据'
    };
  },
  components: {
    Select,
  },
};
</script>

<style lang="scss">
.action{
  display: block;
 
}
</style>