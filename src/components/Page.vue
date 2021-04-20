<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.page {
    height:100%;
    display: flex;
    flex-direction: column;
    background-color: #0e1829;
}
</style>