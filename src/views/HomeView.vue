<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  created() {
    // this.$watch(() => this.$route.params, () => {
    //   // Do something on route change
    // });
  },
  mounted() {
    this.$nextTick(() => {
      // Do something on next tick
    });
  },
};
</script>

<style lang="scss" scoped>
// @import './src/styles/views/some-view';
</style>
