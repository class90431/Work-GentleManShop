<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        @click="openModal(true)">建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-left">名稱</th>
          <th width="120">折扣百分比</th>
          <th width="200">到期日</th>
          <th width="100">是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in coupons" :key="index">
          <td class="text-left">{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>
            {{ item.due_date | time }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button type="button" class="btn-sm btn btn-outline-primary" @click.prevent="openModal(false,item)">編輯</button>
            <button type="button" class="btn-sm btn btn-outline-danger" @click.prevent="deleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group ">
              <label class="text-left" for="title">名稱</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                placeholder="請輸入名稱">
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                placeholder="請輸入優惠碼">
            </div>
            <div class="form-group ">
              <label for="percent">折扣百分比</label>
              <input type="number" class="form-control" id="percent" v-model="tempCoupon.percent"
                placeholder="請輸入百分比">
            </div>
            <div class="form-group ">
              <label for="due_date">到期日 </label>
              <input type="date" class="form-control" id="due_date"
                v-model="due_date">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="is_enabled"
                  v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除 Modal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 帳號： ud11336699@gmail.com
// 密碼： 11336699
import $ from 'jquery'
export default {
  data () {
    return {
      isLoading: false,
      coupons: [],
      tempCoupon: {
        title: '',
        percent: 100,
        is_enabled: 0,
        due_date: 0,
        code: ''
      },
      due_date: new Date(),
      isNew: false,
      tempApi: '',
      isDelete: false
    }
  },
  watch: {
    due_date () {
      const vm = this
      const timestamp = Math.floor(new Date(vm.due_date) / 1000)
      vm.tempCoupon.due_date = timestamp
    }
  },
  methods: {
    getCoupons (page = 1) {
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/coupons?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.isLoading = false
        vm.coupons = response.data.coupons
        console.log(vm.coupons)
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
        this.isNew = true
      } else {
        this.tempCoupon = Object.assign({}, item)
        this.isNew = false
      }
      $('#couponModal').modal('show')
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/coupon`
      let httpMethod = 'post'
      const vm = this
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          $('#couponModal').modal('hide')
          vm.$bus.$emit('messsage:push', response.data.message, 'success') // Alert: 已建立新產品
          vm.getCoupons()
        } else {
          console.log('新增失敗')
        }
        // vm.products = response.data.products;
      })
    },
    deleteModal (item) {
      this.tempCoupon = item
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/coupon/${item.id}`
      this.tempApi = api
      this.isDelete = false
      $('#delCouponModal').modal('show')
    },
    deleteCoupon () {
      const vm = this
      this.isDelete = true
      if (this.isDelete) {
        this.$http.delete(vm.tempApi).then((response) => {
          console.log(response.data)
          $('#delCouponModal').modal('hide')
          this.$bus.$emit('messsage:push', response.data.message, 'danger') // Alert: 已刪除優惠券
          vm.getCoupons()
        })
      }
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
