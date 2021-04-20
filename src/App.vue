<template>
  <div id="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@styles/base.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0e1829;
  align-items: center;
  display: flex;
  justify-content: center;
}
#container {
  width: 1920px;
  height: 1080px;
  position: relative;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
