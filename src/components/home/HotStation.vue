<template>
  <div class="hot-station">
    <div class="hot-station-header">热门站点</div>
    <div class="hot-station-body">
      <div
        :class="['hot-station-item', index === 2 && 'active']"
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
      list: [
        "嘉州恒大中渝广场",
        "红旗河沟西",
        "轨道嘉州路",
        "轨道鸳鸯",
        "嘉州恒大中渝广场",
        "红旗河沟西",
        "轨道嘉州路",
        "轨道鸳鸯",
        "南坪",
        "沙坪坝",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hot-station {
  width: 167px;
  height: 322px;
  position: absolute;
  background-image: url("../../assets/img/hot_line_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  top: 610px;
  left: 517px;
  .hot-station-header {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: #66fad5;
  }
  .hot-station-body {
    padding: 0 6px;
    .hot-station-item {
      width: 154px;
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
        font-size: 13px;
        color: #f7d37d;
        text-align: center;
        width: 128px;
        height: 22px;
        float: left;
        font-weight: 700;
        background-color: #12283f;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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