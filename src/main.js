// 第三方套件
import Vue from 'vue'
import Vuex from 'vuex' // Import Vuex
import axios from 'axios' // Import 可 AJAX 的插件
import VueAxios from 'vue-axios' // Import 可 AJAX 的插件
import Loading from 'vue-loading-overlay' // Import '等待 loading' 的插件
import VeeValidate from 'vee-validate' // Import 表格驗證の插件
import zhTWvalidate from 'vee-validate/dist/locale/zh_TW' // Import 中文化驗證の插件
import 'vue-loading-overlay/dist/vue-loading.css' // Import '等待 loading' 的插件
import 'bootstrap/scss/bootstrap.scss' // Import css file
import 'bootstrap' // Import js file
// 自己撰寫
import App from './App.vue'
import router from './router'// 載入路由器
import currencyFilter from './filters/currency' // 載入錢幣的 filter
import timeFilter from './filters/time' // 載入時間的 filter
import integerFilter from './filters/integer' // 載入只取整數的 filter
import store from './store' // 載入 store

Vue.use(VueAxios, axios)
Vue.use(VeeValidate, { // 表格驗證
  events: 'input|blur'
})
Vue.use(Vuex)

Vue.component('Loading', Loading) // 全域宣告使用 Loading 元件
Vue.filter('currency', currencyFilter) // 全域宣告使用 currency 的 Filter
Vue.filter('time', timeFilter) // 全域宣告使用 time 的 Filter
Vue.filter('integer', integerFilter) // 全域宣告使用 integer 的 Filter

Vue.config.productionTip = false

axios.defaults.withCredentials = true // 儲存 cookies 到前端

VeeValidate.Validator.localize('zh_TW', zhTWvalidate) // 將驗證の插件改成中文版

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 導航守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check` // 檢查用戶是否仍持續登入
    axios.post(api).then((response) => {
      // console.log(response.data)
      if (response.data.success) { // 如果驗證成功（為持續登入），便能放行前往
        next()
      } else { // 否則便前往登入頁面
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
