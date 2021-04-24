<template>
  <div class="nav animate__animated animate__fadeInDown">
    <div class="nav-group">
      <div class="nav-item active">公交运营调度平台</div>
      <div class="nav-item">公交安全管控平台</div>
    </div>
    <div class="nav-group">
      <div class="nav-item">公交机务维护平台</div>
      <div class="nav-item">公交服务管理平台</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.nav {
  position: absolute;
  bottom: 0;
  left: 92px;
  right: 92px;
  display: flex;
  justify-content: space-between;
  .nav-group {
    display: flex;
    .nav-item {
      width: 221px;
      color: #fff;
      font-size: 18px;
      text-align: center;
      padding-top: 7px;
      cursor: pointer;
      &:not(:last-of-type) {
        margin-right: 35px;
      }
      background-image: url(../assets/img/menu.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center top;
      height: 49px;
      &.active {
        color: #66fad5;
        cursor: default;
    
        background-image: url(../assets/img/menu-active.png);
      }
      &:hover{
           color: #66fad5;
        background-image: url(../assets/img/menu-active.png);
      }
    }
  }
}
</style>