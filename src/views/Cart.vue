<template>
  <div class="cart">
    <loading :active.sync="isLoading"></loading>
      <div class="main container">
        <div v-if="cart.total === 0">
          <p class="h2 my-5">購物車尚無商品哦！</p>
          <!-- <button class="btn btn-outline-dark">Back to shop</button> -->
          <router-link :to="{name: 'new'}" class="btn btn-outline-dark">Back to shop</router-link>
        </div>
        <!-- 購物車表格 -->
        <div v-else class="row justify-content-center">
          <table class="table table-striped col-8">
            <thead>
              <tr>
                <th width="80" scope="col">#</th>
                <th scope="col">品名</th>
                <th width="100" scope="col">尺寸</th>
                <th width="100" scope="col">數量</th>
                <th width="120" scope="col">單價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart.carts" :key="index">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                    <i class="far fa-trash-alt" ></i>
                  </button>
                </td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.size }}</td>
                <td>{{ item.qty }} / {{ item.product.unit }}</td>
                <td class="text-right">{{ item.total }}</td>
              </tr>
              <tr class="bg-info text-white text-right">
                <td></td>
                <td></td>
                <td></td>
                <td v-if="cart.total == cart.final_total">總價</td>
                <td v-else><del class="text-white">總價</del></td>
                <td v-if="cart.total == cart.final_total" class="text-right">{{ cart.total }}</td>
                <td v-else class="text-right"><del class="text-white">{{ cart.total }}</del></td>
              </tr>
              <tr class="text-right" v-if="cart.total !== cart.final_total">
                <td></td>
                <td></td>
                <td></td>
                <td class="text-success"><strong>折扣價</strong></td>
                <td class="text-success text-right"><strong>{{ cart.final_total | integer }}</strong></td>
              </tr>
            </tbody>
          </table>
            <!-- 優惠碼 Input -->
          <div class="input-group mb-3 col-8">
            <input v-model="coupon_code" type="text" class="form-control" placeholder="請輸入優惠代碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click.prevent="addCouponCode">套用優惠代碼</button>
            </div>
          </div>
        </div>
        <div v-if="cart.total !== 0" class="row d-flex justify-content-center">
          <!-- 收件人資料 Form -->
          <form class="mt-5 col-6" @submit.prevent="createOrder">
            <div class="form-group">
              <label for="useremail" class="h5 d-flex justify-content-start">Email</label>
              <input type="text" v-validate="'required|email'"  v-model="form.user.email"
                name="email" id="useremail" class="form-control"  placeholder="請輸入 Email">
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
              <label for="username" class="h5 d-flex justify-content-start">收件人姓名</label>
              <input type="text" v-validate="'required'" :class="{'is-invalid': errors.has('name')}" v-model="form.user.name"
                name="name" id="username" class="form-control" placeholder="請輸入姓名">
              <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
            </div>
            <div class="form-group">
              <label for="userphone" class="h5 d-flex justify-content-start">收件人電話</label>
              <input type="text" v-validate="'required'" :class="{'is-invalid': errors.has('phone')}" v-model="form.user.tel"
                name="phone" id="userphone" class="form-control" placeholder="請輸入電話">
              <span class="text-danger" v-if="errors.has('phone')">請輸入電話</span>
            </div>
            <div class="form-group">
              <label for="useradress" class="h5 d-flex justify-content-start">收件人地址</label>
              <input type="text"  v-validate="'required'" :class="{'is-invalid': errors.has('address')}" v-model="form.user.address"
                name="address" id="useradress" class="form-control" placeholder="請輸入地址">
              <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
            </div>
            <div class="form-group">
              <label for="usermessage" class="h5 d-flex justify-content-start">留言</label>
              <textarea class="form-control" name="" id="usermessage" rows="3" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-danger mb-2" >送出</button>
            </div>
          </form>
        </div>
        <!-- Pagination -->
        <!-- <Pagination v-if="carts.total !== 0" :paginationComponent="pagination" v-on:turnpage="getProducts"></Pagination> -->
      </div>
  </div>
</template>

<script>
// import Pagination from '../components/Pagination'
// import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    removeCartItem (id) {
      // console.log(item.id)
      // const vm = this
      // vm.isLoading = true
      // const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/cart/${item.id}`
      // this.$http.delete(api).then((response) => {
      //   console.log(response.data)
      //   vm.isLoading = false
      //   vm.$bus.$emit('messsage:push', response.data.message, 'info') // 刪除購物車品項
      //   vm.getCart()
      // })
      this.$store.dispatch('removeCartItem', { id, vm: this })
    },
    addCouponCode () {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/coupon`
      const vm = this
      const Coupon = {
        code: vm.coupon_code
      }
      this.$http.post(api, { data: Coupon }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$bus.$emit('messsage:push', '成功套用優惠碼!', 'success') // 套用優惠碼’成功‘
          vm.coupon_code = ''
          vm.getCart()
        } else {
          vm.$bus.$emit('messsage:push', response.data.message, 'danger') // 套用優惠碼’失敗‘
        }
      })
    },
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/order`
      const order = vm.form
      this.$validator.validate().then((valid) => {
        if (valid) {
          console.log('訂單完成')
          this.$http.post(api, { data: order }).then((response) => {
            console.log(response)
            if (response.data.success) {
              vm.$router.push(`/product/checkout/${response.data.orderId}`)
            }
          })
        } else {
          // console.log('欄位不完整')
          vm.$bus.$emit('messsage:push', '欄位不完整', 'danger')
        }
      })
    },
    ...mapActions(['getCart'])
  },
  computed: {
    ...mapGetters(['isLoading', 'cart'])
  },
  created () {
    this.getCart()
    // console.log(this.cart)
    // console.log(typeof (this.cart.total))
    // console.log(typeof (this.cart.final_total))
  }
}

</script>
<style lang="scss" scoped>
</style>
