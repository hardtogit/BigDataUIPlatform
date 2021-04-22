<template>
  <div class="table">
    <div class="table-header">
      <span
        v-for="it in columns"
        :key="it.field"
        :style="{ width: it.width, 'text-align': it.align }"
        >{{ it.title }}</span
      >
    </div>
    <div class="table-body">
      <vue-seamless-scroll :data="data" class="table-box" :classOption="classOption">
        <ul class="item">
          <li v-for="(item, index) in data" :key="index">
            <span
              v-for="it in columns"
              :key="it.field"
              :style="{ width: it.width, 'text-align': it.align }"
              :class="{ double: index % 2 === 0 }"
              >{{ item[it.field] }}</span
            >
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
<script>
import vueSeamlessScroll from "./Scroll.vue";
import { ActualPixels } from '@/utils/rem'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      classOption: {
        singleHeight: Math.ceil(ActualPixels(38)) * 2,
        waitTime: 3000
      },
    };
  },
  components: {
    vueSeamlessScroll,
  },
};
</script>
<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  font-size: 0;
  height: 100%;
}
.table-header {
  height: 24px;
  // opacity: 0.6;
  background-color: rgba($color: #4174a3, $alpha: 0.6);
  border-radius: 1px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  span {
    font-size: 13px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    // display: inline-block;
  }
}
.table-body {
  flex: 1;
  padding-top: 6px;
  overflow: hidden;
}
.table-box {
  height: 100%;
  width: 100%;
  .item {
    list-style: none;
    padding: 0;
    li {
      height: 28px;
      padding-left: 8px;
      background: url(../../assets/img/line-bg.png);
      font-size: 13px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      span {
        display: inline-block;
        color: #64d9f1;
        &.double {
          color: #ffd563;
        }
      }
    }
  }
}
</style>