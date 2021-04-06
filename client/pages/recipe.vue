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
    <b-card no-body class="text-center w-50 mx-auto" id="description">
      <div class="bg-secondary text-light">
        <i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Suspendisse potenti nullam ac tortor vitae purus. Ultricies integer quis auctor elit sed.
        </i>
      </div>
    </b-card>
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