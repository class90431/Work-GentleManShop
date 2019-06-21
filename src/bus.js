import Vue from 'vue'

Vue.prototype.$bus = new Vue()

// AlertMessage
// vm.$bus.$emit('messsage:push', 'message', status)
// message(String): 訊息內容
// status(String): Alert 的樣式
