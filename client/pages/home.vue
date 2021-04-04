<template>
  <div class="home">
    <b-carousel
        id="carousel"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ABABAB"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
          caption="First slide"
          img-blank
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </b-carousel-slide>
      <b-carousel-slide
          caption="Second slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-blank
      >
        <p>Dictumst vestibulum rhoncus est pellentesque elit.</p>
      </b-carousel-slide>
      <b-carousel-slide
          caption="Third slide"
          img-blank
      >
        <p>Interdum posuere lorem ipsum dolor sit amet.</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        slide: 0
      }
    }
  }
</script>

<style scoped>

</style>