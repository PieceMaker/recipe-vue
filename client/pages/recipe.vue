<template>
  <div class="recipe">
    <b-row class="img-placeholder mx-auto" align-v="center" align-h="center">
      Image Placeholder
    </b-row>
    <div class="info text-center">
      <h1 style="display: inline;">Title</h1>
      <h4 style="display: inline;">- Author</h4>
      <p class="text-muted">Published/Updated: 10/31/20XX</p>
    </div>
  </div>
</template>

<style scoped>
  .img-placeholder {
    height: 200px;
    width: 600px;
    background-color: #808080;
    color: #DCDCDC;
  }

  .info {
    padding-top: 25px;
  }
</style>

<script>
export default {
  name: "recipe"
}
</script>