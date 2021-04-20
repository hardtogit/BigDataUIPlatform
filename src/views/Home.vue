<template>
  <Page>
    <Header></Header>
    <AMap></AMap>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@components/Page.vue'
// import Panel from '@components/Panel.vue';
import Header from '@components/Header.vue'
import AMap from '@components/amap/Map.vue'
export default {
  name: 'Home',
  components: {
    // Panel,
    Page,
    Header,
    AMap
  },
};
</script>
