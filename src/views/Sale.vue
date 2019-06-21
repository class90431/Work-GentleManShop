<template>
  <div class="new">
    <loading :active.sync="isLoading"></loading>
      <div class="main">
        <div class="container">
          <div class="row px-3">
            <p class="font-weight-bold text-left">SALE</p>
          </div>
          <div class="row d-flex justify-content-start">
            <div class="col-4 card mb-5" style="width: 18rem;" v-for="(item, index) in sale_Products" :key="index">
              <!-- <img :src="item.imageUrl" class="card-img-top" alt="..."> -->
              <router-link to="" class="card-img-top"
                :style="{backgroundImage:`url(${item.imageUrl})`}"
                @click.native="goToOneProduct(item)">
              </router-link>
              <div class="card-body text-left text-secondary">
                <p class="font-weight-bold card-text my-1">{{ item.title }}</p>
                <p class="mb-1">S M L</p>
                <span :class="{'text-decoration-through' : item.origin_price > item.price,'text-opacity50': item.origin_price > item.price}"
                  >NT {{ item.origin_price | currency }}</span>
                <span class="ml-3" v-if="item.origin_price !== item.price" >NT {{ item.price | currency }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <!-- <Pagination :paginationComponent="pagination" v-on:turnpage="getProducts"></Pagination> -->
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    goToOneProduct (item) {
      console.log(item.id)
      this.$router.push({
        path: `/${item.id}`
      })
    },
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['isLoading', 'tempProducts', 'sale_Products'])
  },
  created () {
    this.getProducts()
  }
}

</script>
<style lang="scss" scoped>
  @import "../assets/all.scss";
  .carousel .carousel-item img {
    min-height: 300px;
    max-height: 400px;
    object-fit: cover;
  }
  .main {
    margin-top: 10%;
  }
  .card-img-top {
    height: 350px;
    background-position: center;
    background-size: cover
  }
  .text-decoration-through {
    text-decoration:line-through;
  }
  .text-opacity50 {
    opacity: 0.5;
  }
</style>
