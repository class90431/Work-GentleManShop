<template>
  <div class="carousel">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/images/new/bruchin-noeka-1524597-unsplash.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="../../public/images/new/d-ng-tr-n-qu-c-104956-unsplash.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="../../public/images/new/firdaus-roslan-596536-unsplash.jpg" class="d-block w-100" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel .carousel-item img {
    min-height: 300px;
    max-height: 400px;
    object-fit: cover;
  }
  .card-img-top {
    height: 350px;
    background-position: center;
    background-size: cover
  }
</style>
