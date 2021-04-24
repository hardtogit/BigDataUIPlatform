<template>
  <div class="header" @mouseenter="handleEnter" @mouseleave="handleLeave">
    <h4>公交运营调度平台</h4>
    <div class="date-time">2021 03 15 13:34:06</div>
    <Nav v-show="visible" />
  </div>
</template>
<script>
import Nav from "./Nav.vue";

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleEnter() {
      this.visible = true;
    },
    handleLeave() {
      this.visible = false;
    },
  },
  components: {
    Nav,
  },
};
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
    text-shadow: 0 9px 9px rgba(32, 96, 150, 0.67);
    position: absolute;
    top: 20px;
    // left: 0;
    // right: 0;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  }
  .date-time {
    position: absolute;
    top: 7px;
    right: 21px;
    z-index: 2;
    font-size: 18px;
    font-family: DINAlternate, DINAlternate-Bold;
    font-weight: 700;
    text-align: center;
    color: #64d9f1;
    letter-spacing: 2px;
  }
}
</style>