<template>
  <div class="scoreboard">
    <div class="prefix">
      {{ prefix }}
    </div>
    <div class="numbers">
      <div
        :class="['num', num === 'chart' && 'chart']"
        v-for="(num, index) in numList"
        :key="index"
      >
        {{ num === "chart" ? "," : num }}
        <!-- <img src="./img/chart.png" v-if="num === 'chart'" alt="" /> -->
      </div>
    </div>
    <div class="suffix">{{ suffix }}</div>
  </div>
</template>

<script>
export default {
  props: {
    countNum: {
      type: Number || String,
      default: 5428447,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
  },
  computed: {
    numList: function () {
      let result = [];
      const arr = this.countNum.toString().split("").reverse();
      const length = arr.length;
      for (let i = 0; i < length; i++) {
        result.unshift(arr[i]);
        if (i % 3 === 2 && i !== length - 1) {
          result.unshift("chart");
        }
      }
      console.log(result);
      return result;
    },
  },
};
</script>

<style lang="scss">
.scoreboard {
  position: absolute;
  padding-top: 9px;
  z-index: 2;
  width: 920px;
  height: 72px;
  left: 500px;
  top: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .numbers {
      height: 50px;
      overflow: hidden;
      margin: 0 16px;
    .num {
      background-size: 100% 100%;
      display: inline-block;
      vertical-align: top;
      width: 33px;
      height: 50px;
      margin: 0 5px;
      font-size: 43px;
      font-family: DIN, DIN-Regular;
      font-weight: bold;
      color: #fff;
      background-image: url("../../assets/img/num_bg.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      line-height: 50px;
      text-align: center;
      &.chart {
        background: none;
        width: 24px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .prefix,
  .suffix {
    font-size: 20px;
    color: #fff;
  }
}
</style>