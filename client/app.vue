<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

<script>

  // Components
  import SiteHeader from './components/header.vue';

  export default {
    components: {
      SiteHeader
    }
  }
</script>