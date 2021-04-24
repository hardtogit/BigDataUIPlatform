<template>
  <div class="sub-bus">
    <div class="item">
      <div class="label">线路数</div>
      <div class="value">3753</div>
    </div>
    <div class="item">
      <div class="label">常规公交线路数</div>
      <div class="value">2740</div>
    </div>
    <div class="item">
      <div class="label">新兴市场线路数</div>
      <div class="value">1013</div>
    </div>
    <div class="item">
      <div class="label">营运车数</div>
      <div class="value">4098</div>
    </div>
    <div class="item">
      <div class="label">常规公交车数</div>
      <div class="value">2901</div>
    </div>
    <div class="item">
      <div class="label">新兴市场车数</div>
      <div class="value">1197</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sub-bus {
  position: absolute;
  z-index: 2;
  width: 920px;
  height: 86px;
  left: 500px;
  bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    text-align: center;
    margin: 0 7px;
    width: 136px;
    height: 86px;
    background: url("../../assets/img/map_bottom_num_bg.png") no-repeat;
    background-size: 100% 100%;

    .label {
      line-height: 34px;
      font-size: 15px;
      color: #fff;
    }
    .value {
      line-height: 52px;
      color: #16caff;
      font-weight: Bold;
      font-size: 32px;
    }

    .extra {
      color: #66fad5;
      font-size: 15px;
    }
  }
  .item:nth-child(-n + 3) {
    .value {
      color: #f1c462;
    }
  }
}
</style>
