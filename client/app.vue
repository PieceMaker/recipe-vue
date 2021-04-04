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
    <site-footer></site-footer>
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
  import SiteFooter from './components/footer.vue';

  export default {
    components: {
      SiteFooter,
      SiteHeader
    }
  }
</script>