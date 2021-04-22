<template>
  <div class="header">
    <h4>公交运营调度平台</h4>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  background: url("../assets/img/bj.png") no-repeat;
  background-size: 100%;
  background-position: top;
  height: 97px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  h4 {
    // background: linear-gradient(0deg, #65dbe6 0%, #fdffff 100%);
    font-size: 46px;
    font-family: Tensentype XiChaoHeiJ, Tensentype XiChaoHeiJ-Bold;
    font-weight: 700;
    text-align: center;
    color: #e4f6ff;
    letter-spacing: 9px;
    text-shadow: 0 9px 9px  rgba(32, 96, 150, 0.67);
    position: absolute;
    top: 20px;
    // left: 0;
    // right: 0;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    
  }
}
</style>