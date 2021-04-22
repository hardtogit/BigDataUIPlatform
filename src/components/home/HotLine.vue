<template>
  <div class="hot-line">
    <div class="hot-line-header">热门线路</div>
    <div class="hot-line-body">
      <div
        :class="['hot-line-item', index === 2 && 'active']"
        v-for="(value, index) in list"
        :key="value"
      >
        <div class="num">{{ index + 1 }}</div>
        <div class="content">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [123, 345, 321, 434, 546, 654, 232, 323, 567, 213],
    };
  },
};
</script>

<style lang="scss" scoped>
.hot-line {
  width: 135px;
  height: 322px;
  position: absolute;
  background-image: url("../../assets/img/hot_line_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  top: 265px;
  left: 517px;
  .hot-line-header {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: #66fad5;
  }
  .hot-line-body {
    padding: 0 6px;
    .hot-line-item {
      width: 122px;
      height: 22px;
      line-height: 22px;
      margin-top: 6px;
      cursor: pointer;
      .num {
        width: 26px;
        height: 22px;
        float: left;
        font-size: 13px;
        text-align: center;
        color: #fff;
        background-color: rgba(67, 124, 172, 0.2);
      }
      .content {
        font-size: 18px;
        color: #f7d37d;
        text-align: center;
        width: 96px;
        height: 22px;
        float: left;
        font-weight: 700;
        background-color: #12283f;
      }
      &:hover,
      &.active {
        .num {
          background-color: #008ab6;
        }
        .content {
          background-color: #00587c;
        }
      }
    }
  }
}
</style>