<template>
  <div class="sub-scorevoard">
    <div class="item">
      <div class="label">出车数：</div>
      <div class="value">8456</div>
    </div>
    <div class="item">
      <div class="label">出勤驾驶员：</div>
      <div class="value">8765</div>
    </div>
    <div class="item">
      <div class="label">运行班次：</div>
      <div class="value">5634</div>
    </div>
    <div class="item">
      <div class="label">运行里程：</div>
      <div class="value">2345</div>
      <div class="extra">万公里</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sub-scorevoard {
  position: absolute;
  z-index: 2;
  width: 920px;
  height: 36px;
  left: 500px;
  top: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    display: flex;
    align-items: center;
    margin: 0 18px;
    .label {
      font-size: 15px;
      color: #fff;
    }
    .value {
      color: #66fad5;
      font-weight: 700;
      font-size: 23px;
    }
    .extra{
        color: #66fad5;
        font-size: 15px;
    }
  }
}
</style>