<template>
  <Page>
    <Header></Header>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@components/Page.vue";
// import Panel from '@components/Panel.vue';
import Header from "@components/Header.vue";
import { rem } from "@/utils/index";

export default {
  name: "Home",
  components: {
    // Panel,
    Page,
    Header,
  },
  mounted() {
    console.log(rem.ActualPixels(100));
  },
};
</script>
