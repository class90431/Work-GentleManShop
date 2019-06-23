<template>
  <div class="product">
    <Navbar/>
    <keep-alive v-if="!$route.meta.carouselActive">
      <Carousel/>
    </keep-alive>
    <Alert/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Alert from '../components/AlertMessage'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
export default {
  name: 'product',
  components: {
    Navbar,
    Alert,
    Carousel,
    Footer
  }
}

</script>
