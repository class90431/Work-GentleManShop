import axios from 'axios'

export default ({
  // state 屬於模組區域變數
  // actions, mutations, getters 屬於全域變數
  strict: true,
  state: {
    tempProducts: [],
    new_Products: [],
    hot_Products: [],
    preorder_Products: [],
    sale_Products: [],
    suit_Products: [],
    top_Products: [],
    bottom_Products: [],
    shoes_Products: [],
    acc_Products: []
  },
  actions: { // 操作行為
    getProducts (context) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/products/all`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        // console.log(response.data)
        // vm.tempProducts = response.data.products
        context.commit('TEMPPRODUCTS', response.data.products)
        console.log('payload', response.data.products)
        // vm.products = vm.tempProducts.filter(function (item, key, arr) {
        //   return item.category === '最新商品' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
        // })
        context.commit('NEW_PRODUCTS')
        context.commit('HOT_PRODUCTS')
        context.commit('PREORDER_PRODUCTS')
        context.commit('SALE_PRODUCTS')
        context.commit('SUIT_PRODUCTS')
        context.commit('TOP_PRODUCTS')
        context.commit('BOTTOM_PRODUCTS')
        context.commit('SHOES_PRODUCTS')
        context.commit('ACC_PRODUCTS')
        context.commit('LOADING', false)
        // console.log('tempproducts', typeof (this.state.tempProducts[0].price))
        // console.log('tempproducts', typeof (this.state.tempProducts[25].origin_price))
        console.log(context.state)
      })
    }
  },
  mutations: { // 操作資料狀態；非同步行為'一定'要在 actions 完成，不可在 mutations 執行。
    TEMPPRODUCTS (state, payload) {
      state.tempProducts = payload
      state.tempProducts.forEach(function (item) { // 把 price 和 origin_price 才字串轉數字
        item.price = parseInt(item.price)
        item.origin_price = parseInt(item.origin_price)
        item.is_enabled = parseInt(item.is_enabled)
      })
    },
    NEW_PRODUCTS (state) {
      state.new_Products = state.tempProducts.filter((item) => {
        return item.category === '最新商品' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    HOT_PRODUCTS (state) {
      state.hot_Products = state.tempProducts.filter((item) => {
        return item.category === '熱賣商品' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    PREORDER_PRODUCTS (state) {
      state.preorder_Products = state.tempProducts.filter((item) => {
        return item.category === '人氣預購' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    SALE_PRODUCTS (state) {
      state.sale_Products = state.tempProducts.filter((item) => {
        return item.category === '優惠折扣' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    SUIT_PRODUCTS (state) {
      state.suit_Products = state.tempProducts.filter((item) => {
        return item.category === '套裝' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    TOP_PRODUCTS (state) {
      state.top_Products = state.tempProducts.filter((item) => {
        return item.category === '上身' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    BOTTOM_PRODUCTS (state) {
      state.bottom_Products = state.tempProducts.filter((item) => {
        return item.category === '下身' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    SHOES_PRODUCTS (state) {
      state.shoes_Products = state.tempProducts.filter((item) => {
        return item.category === '鞋子' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    },
    ACC_PRODUCTS (state) {
      state.acc_Products = state.tempProducts.filter((item) => {
        return item.category === '配件' && item.is_enabled === 1 // 篩選出 ‘分類’ 及 ‘是否為啟用狀態’
      })
    }
  },
  getters: {
    tempProducts: state => state.tempProducts,
    new_Products: state => state.new_Products,
    hot_Products: state => state.hot_Products,
    preorder_Products: state => state.preorder_Products,
    sale_Products: state => state.sale_Products,
    suit_Products: state => state.suit_Products,
    top_Products: state => state.top_Products,
    bottom_Products: state => state.bottom_Products,
    shoes_Products: state => state.shoes_Products,
    acc_Products: state => state.acc_Products
  }
})
