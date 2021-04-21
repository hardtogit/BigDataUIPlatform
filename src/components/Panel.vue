<template>
  <div
    class="panel-box"
    :style="`width:${realityWidth}px;height:${realityHeight}px;left:${realityPosition.left}px;right:${realityPosition.right}px;top:${realityPosition.top}px;bottom:${realityPosition.bottom}px`"
  >
    <div class="panel-header">{{ title }}</div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { rem } from "@/utils";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    width: {
      type: Number,
      default: 475,
    },
    height: {
      type: Number,
      default: 300,
    },
    position: {
      type: Object,
      default: () => ({
        left: 0,
        top: 0,
        bottom: null,
        right: null,
      }),
    },
  },
  computed: {
    realityWidth: function () {
      return rem.ActualPixels(this.width);
    },
    realityHeight: function () {
      return rem.ActualPixels(this.height);
    },
    realityPosition: function () {
      return {
        left: rem.ActualPixels(this.position.left),
        right: rem.ActualPixels(this.position.right),
        bottom: rem.ActualPixels(this.position.bottom),
        top: rem.ActualPixels(this.position.top),
      };
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.panel-box {
  position: absolute;
  z-index: 2;
  padding: 8px;
  background-image: url("../assets/img/panel_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .panel-header {
    height: 32px;
    line-height: 32px;
    font-size: 20px;
    color: #66fad5;
    font-weight: 500;
    padding-left: 18px;
    background-image: url("../assets/img/panel_header_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
 