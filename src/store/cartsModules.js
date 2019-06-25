import axios from 'axios'

export default ({
  // state 屬於模組區域變數
  // actions, mutations, getters 屬於全域變數
  strict: true,
  state: {
    cart: {
      carts: []
    }
  },
  actions: { // 操作行為
    getCart (context) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/cart`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        // console.log(response)
        context.commit('LOADING', false)
        context.commit('CART', response.data.data)
        console.log('response.data.data', response.data.data)
        console.log('cart', this.state.cartsModules.cart)
        // console.log('1', this.state.cart.final_total)
        // console.log('2', this.state.cart.total)
        // console.log('3', this.state.cart.carts)
        // vm.carts.total = response.data.data.total
        // vm.carts.finaltotal = response.data.data.final_total
        // console.log(vm.carts, vm.carts.total, vm.carts.finaltotal)
      })
    },
    removeCartItem (context, { id, vm }) {
      // console.log(id)
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/cart/${id}`
      axios.delete(api).then((response) => {
        console.log(response.data)
        context.commit('LOADING', false)
        // vm.$bus.$emit('messsage:push', response.data.message, 'info') // 刪除購物車品項
        context.dispatch('updateMessage', { message: response.data.message, status: 'info' })
        // vm.getCart()
        context.dispatch('getCart')
      })
    },
    addtoCart (context, { id, size, qty, vm }) {
      // console.log(id, size, qty, vm)
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/cart`
      context.commit('LOADING', true)
      console.log(context)
      const cart = {
        product_id: id,
        size,
        qty
      }
      axios.post(api, { data: cart }).then((response) => {
        console.log(response.data)
        context.commit('LOADING', false)
        // console.log('bus????????????', vm)
        // vm.$bus.$emit('messsage:push', response.data.message, 'success')
        context.dispatch('updateMessage', { message: response.data.message, status: 'success' })
        // vm.getCart()
        context.dispatch('getCart')
      })
    }
  },
  mutations: { // 操作資料狀態；非同步行為'一定'要在 actions 完成，不可在 mutations 執行。
    CART (state, payload) {
      state.cart = payload
      // state.cart.final_total = payload.final_total
      // state.cart.total = payload.total
    }
  },
  getters: {
    // cart: state => state.cart.carts
    cart: state => state.cart
  }
})
