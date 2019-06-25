export default ({
  // state 屬於模組區域變數
  // actions, mutations, getters 屬於全域變數
  strict: true,
  state: {
    messages: []
  },
  actions: { // 操作行為
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      // this.messages.push({
      //   message,
      //   status,
      //   timestamp
      // })
      context.commit('UPDATAMESSAGES', { message, status, timestamp })
      // this.removeMessageWithTiming(timestamp)
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, num) {
      // this.messages.splice(num, 1)
      context.commit('REMOVEMESSAGES', num)
    },
    removeMessageWithTiming (context, timestamp) {
      // const vm = this
      // setTimeout(() => {
      //   vm.messages.forEach((item, i) => {
      //     if (item.timestamp === timestamp) {
      //       vm.messages.splice(i, 1)
      //     }
      //   })
      // }, 5000)
      setTimeout(() => {
        context.commit('REMOVEMESSAGESWITEHTIMING', timestamp)
      }, 3000)
    }
  },
  mutations: { // 操作資料狀態；非同步行為'一定'要在 actions 完成，不可在 mutations 執行。
    UPDATAMESSAGES (state, payload) {
      state.messages.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp
      })
    },
    REMOVEMESSAGES (state, payload) {
      state.messages.splice(payload, 1)
    },
    REMOVEMESSAGESWITEHTIMING (state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1)
        }
      })
    }
  },
  getters: {
    messages: state => state.messages
  }
})
