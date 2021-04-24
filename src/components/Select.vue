<template>
  <Select :options="options">
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
      options: ["全部选项", "近30个月", "近半年"],
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