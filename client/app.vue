<template>
  <div class="app">
    <site-header></site-header>
    <b-container>
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
  .app {
    .container {
      padding-bottom: 50px;
      padding-top: 50px;
      height: calc(100vh - 56px);
    }
  }
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