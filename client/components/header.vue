<template>
  <div class="site-header">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>Recipes</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <font-awesome-icon :icon="['far', 'user-circle']" size="lg" class="text-white"></font-awesome-icon>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: "header"
}
</script>