import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './productsModules'
import cartsModules from './cartsModules'
import alertModules from './alertModules'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  actions: { // 操作行為
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  mutations: { // 操作資料狀態；非同步行為'一定'要在 actions 完成，不可在 mutations 執行。
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  getters: {
    isLoading: state => state.isLoading
  },
  modules: {
    productsModules,
    cartsModules,
    alertModules
  }
})
