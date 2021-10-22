<template>
  <Header />
  <router-view />
</template>
<script>
import Header from "./shared/components/layout/Header.vue";
export default {
  components: {
    Header,
  },
  setup() {},
};
</script>