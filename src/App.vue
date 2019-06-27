<template>
  <div id="app">
    <div class="position-relative">
      <keep-alive>
        <router-link v-if="!$route.meta.keepAlive" :to="{name: 'home'}" class="position-absolute text-white text-decoration-none logo">GentleMan</router-link>
      </keep-alive>
      <keep-alive>
        <a v-if="!$route.meta.keepAlive" class="position-absolute text-white text-decoration-none menuLink" @click.prevent="status.menuSwitch = !status.menuSwitch">Menu<i class="fas fa-bars ml-3"></i></a>
      </keep-alive>
      <keep-alive>
        <transition name="slide" v-if="!$route.meta.keepAlive">
          <ul v-if="status.menuSwitch" class="position-absolute list-unstyled ul-style w-100 m-0 flex-column justify-content-around border-top border-bottom">
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product">NEW</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/hot">HOT</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/preorder">PREORDER</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/sale">SALE</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/suit">SUIT</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/top">TOP</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/bottom">BOTTOM</router-link></li>
            <li class="border-bottom li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/shoes">SHOES</router-link></li>
            <li class="li-hover-style"><router-link class="text-light d-block py-3 text-decoration-none" to="/product/acc">ACC</router-link></li>
          </ul>
        </transition>
      </keep-alive>
      <keep-alive>
        <router-link v-if="!$route.meta.keepAlive" to="/product/hot" class="position-absolute text-white text-decoration-none hotLink ">HOT</router-link>
      </keep-alive>
      <keep-alive>
        <router-link v-if="!$route.meta.keepAlive" to="/product" class="position-absolute text-white text-decoration-none newLink">NEW</router-link>
      </keep-alive>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      status: {
        menuSwitch: false
      }
    }
  },
  watch: {
    '$route' (to, from) { // 監聽 router，如果改變則關閉 menu
      // this.$router.go(0)
      this.status.menuSwitch = false
    }
  }
}
</script>
<style lang="scss" >
  @import "./assets/all";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .logo {
    font-size: 2rem;
    left: 5%;
    top: 3%;
    font-family: Baskerville;

    &:hover {
      color: #000 !important;
      transition-duration: 1s;
    }
  }

  .menuLink {
    right: 5%;
    top: 5%;

    &:hover {
      color: #000 !important;
      font-size: 1.2rem;
      transition-duration: .8s;
      cursor: pointer;
    }
  }

  .hotLink {
    left: 5%;
    bottom: 3%;

    &:hover {
      color: #000 !important;
      font-size: 1.2rem;
      transition-duration: .8s;
    }
  }

  .newLink {
    right: 5%;
    bottom: 3%;

    &:hover {
      color: #000 !important;
      font-size: 1.2rem;
      transition-duration: .8s;
    }
  }

  .ul-style {
    top: 15%;
    background: #1f1e1edb;
    z-index: 1;
  }

  .li-hover-style {
    &:hover {
      background: #888888;
      transition: .5s;
    }
  }

  .slide-enter-active {
    transition-duration: 1s;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to, .slide-leave {
    height: 100%;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    height: 0;
  }

</style>
