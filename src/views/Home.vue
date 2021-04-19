<template>
  <Page>
    <Header></Header>
    
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@components/Page.vue'
// import Panel from '@components/Panel.vue';
import Header from '@components/Header.vue'

export default {
  name: 'Home',
  components: {
    // Panel,
    Page,
    Header
  },
};
</script>
