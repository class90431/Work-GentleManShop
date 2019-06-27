<template>
  <div class="checkout">
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit="payOrder">
        <table class="table">
          <thead>
            <th class="text-left">品名</th>
            <th>數量</th>
            <th>尺寸</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle text-left">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td>{{ item.size }}</td>
              <td class="align-middle text-right">{{ item.final_total | integer }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right h5">總計</td>
              <td class="text-right h5">{{ order.total | integer }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table mt-5">
          <tbody>
            <tr>
              <th width="200" class="text-left">Email</th>
              <td class="text-left">{{ order.user.email }}</td>
            </tr>
            <tr>
              <th class="text-left">姓名</th>
              <td class="text-left">{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="text-left">收件人電話</th>
              <td class="text-left">{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th class="text-left">收件人地址</th>
              <td class="text-left">{{ order.user.address }}</td>
            </tr>
            <tr>
              <th class="text-left">付款狀態</th>
              <td class="text-left">
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款去</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/order/${vm.orderId}`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        vm.isLoading = false
        vm.order = response.data.order
        console.log(vm.order)
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/pay/${vm.orderId}`
      vm.isLoading = true
      this.$http.post(url).then((response) => {
        console.log(response)
        if (response.data.success) {
          vm.getOrder()
        }
        vm.isLoading = false
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrder()
  }
}

</script>
<style lang="scss" scoped>
</style>
