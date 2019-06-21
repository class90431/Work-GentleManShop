<template>
  <div class="orders">
    <table class="table">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orders" :key="index"
          :class="{'table-danger': !item.is_paid,'table-success':item.is_paid}">
          <td>{{ item.create_at | time }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, k) in item.products" :key="k">
                {{ product.product.title }} {{ product.qty }}
                {{ product.product.unit }} {{ product.size }}
              </li>
            </ul>
          </td>
          <td>{{ item.total | currency }}</td>
          <!-- <td>{{ item.is_paid }}</td> -->
          <td>
            <span v-if="item.is_paid">是</span>
            <span v-else>否</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 帳號： ud11336699@gmail.com
// 密碼： 11336699
export default {
  data () {
    return {
      pagination: {},
      isLoading: false,
      orders: []
    }
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/orders?page=${page}`
      this.$http.get(url).then((response) => {
        console.log(response)
        vm.orders = response.data.orders
        console.log(vm.orders)
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
