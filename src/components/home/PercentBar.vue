<template>
  <div class="percent-bar">
    <div class="label">
      {{ label }}
    </div>
    <div class="bar">
      <div class="default">
        <div class="item" v-for="(value, index) in num" :key="index"></div>
      </div>
      <div class="active" :style="`width:${comPercent}%`">
        <div
          class="item"
          :style="`background-color:${color}`"
          v-for="(value, index) in num"
          :key="index"
        ></div>
      </div>
    </div>
    <div class="percent" :style="`color:${color}`">{{ comPercent }}%</div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
    },
    percent: {
      type: String || Number,
      require: true,
    },
    color: {
      type: String,
      default: "#66FAD5",
    },
  },
  data() {
    return {
      num: new Array(27).fill(""),
    };
  },
  computed: {
    comPercent: function () {
      return parseFloat(this.percent).toFixed(1);
    },
  },
};
</script>
<style lang="scss" scoped>
.percent-bar {
  width: 459px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  .label {
    flex-shrink: 0;
    width: 176px;
    font-size: 14px;
    padding-left: 20px;
    color: #fff;
  }
  .bar {
    width: 192px;
    height: 10px;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    .default {
      position: absolute;
      left: 0;
      top: 0;
      .item {
        width: 3.472px;
        height: 10px;
        display: inline-block;
        vertical-align: top;
        margin-right: 3.472px;
        background-color: #294e61;
      }
    }
    .active {
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      overflow: hidden;
      white-space: nowrap;
      .item {
        width: 3.472px;
        height: 10px;
        display: inline-block;
        vertical-align: top;
        margin-right: 3.472px;
        background-color: #16caff;
      }
    }
  }
  .percent {
    width: 90px;
    flex-shrink: 0;
    font-size: 22px;
    font-weight: 700;
    padding-left: 16px;
    color: #fff;
  }
}
</style>