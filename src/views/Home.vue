<template>
  <div class="home ">
    <div class="bgImg"></div>
    <div class="position-absolute font-style text-light">SUIT</div>
  </div>
</template>

<script>

export default {
  name: 'home'
}

</script>
<style  lang="scss" scoped>
  .bgImg {
    background-image: url(../../public/images/home/hunters-race-408744-unsplash.jpg);
    background-size: cover;
    height: 100vh;
    background-position: center center;
  }
  .font-style{
    font-family: Trebuchet MS;
    font-size: 5rem;
    bottom: 20%;
    left: 30%;
  }

</style>
