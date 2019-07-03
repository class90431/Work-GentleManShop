<template>
  <div class="sticky-top bg-white">
      <div class="d-flex justify-content-between pl-4 pt-3 position-relative">
        <router-link :to="{name : 'home'}" class="text-decoration-none text-dark logo">GentleMan</router-link>
        <nav class="navbar navbar-expand-lg navbar-light bg-white ">
          <div class=" ">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link :to="{name : 'login'}" class="nav-link"><i class="fas fa-user fa-xs icon-marginR"></i>Login</router-link>
              </li>
              <li class="nav-item" @click="status.cart = !status.cart">
                <router-link to="" class="nav-link"><i class="fas fa-shopping-cart fa-xs icon-marginR"></i>Cart</router-link>
              </li>
              <span class="bg-dark text-white rounded-circle cart-num-position" v-if="cart.carts.length !== 0" style="width:18px;height:18px;font-size:.5rem;">{{ cart.carts.length }}</span>
              <div class="drop-menu-position border" style="min-width: 250px" v-if="status.cart">
                <ul class="list-unstyled ul-style bg-white" v-if="cart.carts.length > 0">
                    <li class="border-bottom p-2 d-flex justify-content-around cart-hover-style" v-for="(item, index) in cart.carts" :key="index">
                      <router-link to="" class="text-muted text-decoration-none flex-row d-flex" @click.native="goToOneProduct(item.product)">
                        <div class="mr-2 cart-img" :style="{backgroundImage:`url(${item.product.imageUrl})`}" style="width:60px;height:80px">
                        </div>
                        <div class="nav-font-style">
                          <p class="m-0 text-left">{{ item.product.title }}</p>
                          <p class="m-0 text-left">SIZE: {{ item.size }}</p>
                          <p class="m-0 text-left">QTY: {{ item.qty }}</p>
                        </div>
                      </router-link>
                      <button class="btn" @click="removeCartItem(item.id)" :disabled="$store.state.isLoading">
                        <i class="fas fa-times"></i>
                      </button>
                    </li>
                </ul>
                <router-link v-if="cart.carts.length !== 0" :to="{name : 'cart'}" class="text-muted text-decoration-none d-block py-2 checkout-hover-style">CHECKOUT</router-link>
                <ul class="list-unstyled" v-if="cart.carts.length === 0">
                  <li class="py-4">
                    購物車目前尚無商品哦！
                  </li>
                </ul>
              </div>
              <!--  -->
            </ul>
          </div>
        </nav>
      </div>

    <hr class=" my-0">

      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav nav-font-style font-weight-bold">
            <li class="nav-item px-2">
              <router-link :to="{name : 'new'}" class="nav-link">最新商品</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'hot'}" class="nav-link">熱賣商品</router-link>
            </li>
            <li class="nav-item px-2 nav-li-style">
              <router-link :to="{name : 'preorder'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '人氣預購'"
                  onMouseOut="this.innerHTML = 'PREORDER'" style="width:80px">PREORDER
                </span>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'sale'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '優惠折扣'"
                  onMouseOut="this.innerHTML = 'SALE'" style="width:80px">SALE</span>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'suit'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '套裝'"
                  onMouseOut="this.innerHTML = 'SUIT'" style="width:50px">SUIT</span>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'top'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '上身'"
                  onMouseOut="this.innerHTML = 'TOP'" style="width:50px">TOP</span>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'bottom'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '下身'"
                  onMouseOut="this.innerHTML = 'BOTTOM'" style="width:70px">BOTTOM</span>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name : 'shoes'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '鞋子'"
                  onMouseOut="this.innerHTML = 'SHOES'" style="width:70px">SHOES</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'acc'}" class="nav-link p-0">
                <span class="translate_en d-inline-block p-2"
                  onMouseOver="this.innerHTML = '配件'"
                  onMouseOut="this.innerHTML = 'ACC'" style="width:50px">ACC</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      path: this.$router.currentRoute.path,
      status: {
        cart: false
      }
    }
  },
  methods: {
    goToOneProduct (item) {
      console.log(item.id)
      console.log('path', this.path)
      this.$router.push(`/product/${item.id}`)
    },
    removeCartItem (id) {
      this.$store.dispatch('removeCartItem', { id, vm: this })
      this.switchCrossDisabled()
    },
    ...mapActions(['getCart'])
  },
  computed: {
    // ...mapGetters(['isLoading', 'cart'])
    ...mapGetters(['cart', 'isLoading'])
  },
  watch: {
    '$route' (to, from) { // 監聽 router，如果改變則重新載入頁面 => 解決 url 改變，網頁卻沒有轉換的問題。
      window.location.reload()
    }
  },
  created () {
    this.getCart()
    console.log('path', this.path)
    console.log(this.$store.state.isLoading)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/all";
  .logo {
    font-size: 2rem;
    font-family: Baskerville;
    &:hover {
      font-size: 2.2rem;
      transition-duration: 1s;
    }
  }
  .icon-marginR{
    margin-right: 0.5rem;
  }
  .nav-font-style{
    font-size: 0.8rem;
  }
  .position-relative {
    position: relative;
  }
  .drop-menu-position {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    z-index: 1;
  }
  @media(max-width: 992px){
    .drop-menu-position{
      top: 100%;
    }
  }
  @media(max-width: 992px){
    .cart-num-position{
      position: absolute;
      top: 50%;
      right: 50%;
    }
  }
  .cart-img {
    background-position: center;
    background-size: cover
  }
  .badge-position {
    position: absolute;
    right: 5px;
  }
  .checkout-hover-style {
    &:hover{
      background: #8080805e;
    }
  }
  .cart-hover-style {
    &:hover{
      background: #8080805e;
    }
  }
  .ul-style {
    max-height: 50vh;
    overflow: scroll;
  }
</style>
