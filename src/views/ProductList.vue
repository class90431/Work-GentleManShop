<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <span>按表頭可以排序</span>
      <button class="btn btn-dark mx-2" @click.prevent="sortSwitch('return')">還原為不排序</button>
      <button class="btn btn-dark" @click.prevent="openModal(true)">Create a new product</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120" class="hover-style" @click="sortSwitch('category')">分類
            <span v-if="sortItem === 'category'">
              <i class=" fas fa-angle-down text-info" v-if="status.isReverse"></i>
            </span>
          </th>
          <th class="hover-style" @click="sortSwitch('title')">名稱
            <span v-if="sortItem === 'title'">
              <i class=" fas fa-angle-down text-info" v-if="status.isReverse"></i>
            </span>
          </th>
          <th width="120" class="hover-style" @click="sortSwitch('origin_price')">原價
            <span v-if="sortItem === 'origin_price'">
              <i class=" fas fa-angle-up text-info" v-if="status.isReverse"></i>
              <i class=" fas fa-angle-down text-info" v-else></i>
            </span>
          </th>
          <th width="120" class="hover-style" @click="sortSwitch('price')">售價
            <span v-if="sortItem === 'price'">
              <i class=" fas fa-angle-up text-info" v-if="status.isReverse"></i>
              <i class=" fas fa-angle-down text-info" v-else></i>
            </span>
          </th>
          <th width="120" class="hover-style" @click="sortSwitch('is_enabled')">是否啟用
            <span v-if="sortItem === 'is_enabled'">
              <i class=" fas fa-angle-up text-info" v-if="status.isReverse"></i>
              <i class=" fas fa-angle-down text-info" v-else></i>
            </span>
          </th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in newData" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | currency }}
          </td>
          <td class="text-right">
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary mr-1"
              @click.prevent="openModal(false, false, item)">編輯</button>
            <button class="btn btn-outline-danger" @click.prevent="openModal(false, true, item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :paginationComponent="pagination" v-on:turnpage="getProducts" v-if="!status.isPagination"></Pagination>
    <!-- Modal for create a new product-->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.uploadFile == true"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <!-- <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="tempProduct.category"> -->
                      <select class="form-control" v-model="tempProduct.category">
                        <option>最新商品</option>
                        <option>熱賣商品</option>
                        <option>人氣預購</option>
                        <option>優惠折扣</option>
                        <option>套裝</option>
                        <option>上身</option>
                        <option>下身</option>
                        <option>鞋子</option>
                        <option>配件</option>
                      </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="tempProduct.unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control mt-4" id="origin_price"
                      placeholder="請輸入原價" v-model="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <!-- <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="tempProduct.price"> -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="defaultCheck1"
                          v-model="disabled" @click="checkboxTorF" :true-value="1" :false-value="0">
                        <label class="form-check-label" for="defaultCheck1" style="font-size:.5rem">
                          與原價相同
                        </label>
                        <input type="number" class="form-control" id="price" :disabled="disabled === 1"
                          placeholder="請輸入售價" v-model="tempProduct.price">
                    </div>
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" rows="5" v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" rows="5" v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal for makesure to delete the product-->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="updateProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery' // 載入 jQuery
import Pagination from '../components/Pagination'
export default {
  data () {
    return {
      allProducts: [],
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      isDelete: false,
      isLoading: false,
      status: {
        uploadFile: false,
        isReverse: false,
        isPagination: false // Pagination 元件顯示開關
      },
      disabled: 0,
      sortItem: ''
    }
  },
  methods: {
    getAllProducts () {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/products/all`
      const vm = this
      this.$http.get(api).then((response) => {
        console.log(api)
        console.log(response.data)
        vm.allProducts = response.data.products
        console.log(vm.allProducts)
      })
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/products?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(api)
        console.log(response.data)
        vm.products = response.data.products
        vm.isLoading = false
        console.log(vm.products)
        vm.pagination = response.data.pagination
        console.log(vm.pagination)
      })
    },
    openModal (isNew, isDelete, item) {
      if (!isDelete) { // 判斷開啟哪個 Modal(編輯 or 刪除), !isDelete 是編輯。
        if (isNew) { // 判斷是否為新的產品。如果 isNew = true 代表是新產品; 如果 isNew = false 代表是要編輯產品
          this.tempProduct = {}
          this.isNew = true
          this.disabled = false // 預設 checkbox 不打鉤
        } else {
          //  this.tempProduct = item 物件傳參考的特性，如果這樣寫則 item 會複寫 tempProduct
          this.tempProduct = Object.assign({}, item) // Object.assign 是 ES6 的方法：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
          this.isNew = false
          if (this.tempProduct.price === this.tempProduct.origin_price) { // 判斷‘原價’與’售價‘是否相等。如果相等，則 checkbox 預設為打鉤.
            this.disabled = 1
          } else {
            this.disabled = 0
          }
        }
        $('#productModal').modal('show') // 打開 Modal
      } else { // isDelete = true
        $('#delProductModal').modal('show')
        this.tempProduct = Object.assign({}, item)
        this.isDelete = true
      }
    },
    updateProduct () {
      // httpMethod = 'post', 'put', 'delete' 分別代表 '新增', '編輯', '刪除'
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/product`
      let httpMethod = 'post'
      const vm = this
      // console.log(vm.isNew, vm.isDelete)
      if (!vm.isNew && !vm.isDelete) { // 判斷是已有的產品 且 沒有要刪除，則更改 api 以及 ’方法(httpMethod)‘
        api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      } else if (!vm.isNew && vm.isDelete) { // 判斷是已有的產品 且 要刪除，則更改 api 以及 ’方法(httpMethod)‘
        api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'delete'
        vm.isDelete = false
      }
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data)
        if (response.data) {
          $('#productModal').modal('hide')
          $('#delProductModal').modal('hide')
          // vm.$bus.$emit('messsage:push', response.data.message, 'success')
          vm.$store.dispatch('updateMessage', { message: response.data.message, status: 'success' })
          vm.getProducts(vm.pagination.current_page) // ’編輯完成‘後 更新頁面至 ‘當前頁面’
          vm.getAllProducts()
        } else {
          $('#productModal').modal('hide')
          // vm.$bus.$emit('messsage:push', response.data.message, 'danger')
          vm.$store.dispatch('updateMessage', { message: response.data.message, status: 'danger' })
          console.log('失敗')
        }
      })
    },
    uploadFile () { // 上傳照片
      // console.log(this)
      const uploadedFile = this.$refs.files.files[0] // 此為照片檔案，可用 console.log(uploadedFile) 看
      // console.log(uploadedFile)
      const vm = this
      vm.status.uploadFile = true
      const formData = new FormData() // 參考：https://developer.mozilla.org/zh-TW/docs/Web/API/FormData
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/admin/upload`
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          // vm.tempProduct.imageUrl = response.data.imageUrl
          // console.log(vm.tempProduct.imageUrl)
          // console.log(vm.tempProduct)
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl) // 因為無事先定義部分變數，所以用 $set 強制綁定
          // this.$bus.$emit('messsage:push', '上傳成功', 'success')
          vm.$store.dispatch('updateMessage', { message: '上傳成功', status: 'success' })
          vm.status.uploadFile = false
        } else {
          console.log(response.data.message)
          // this.$bus.$emit('messsage:push', response.data.message, 'warning')
          vm.$store.dispatch('updateMessage', { message: response.data.message, status: 'warning' })
          vm.status.uploadFile = false
        }
      })
    },
    checkboxTorF () { // 判斷 checkbox 是否有勾選
      // console.log(this.disabled)
      if (!this.disabled) { // 如果有勾選：則原價 = 售價，且 input 是 disabled 的狀態
        console.log(1)
        this.tempProduct.price = this.tempProduct.origin_price
      } else {
        this.tempProduct.price = ''
        console.log(0)
      }
    },
    sortSwitch (item) { // 排序判斷
      this.status.isPagination = true // 將 Pagination 元件隱藏
      this.sortItem = item
      if (this.sortItem === 'category' || this.sortItem === 'title') {
        console.log(this.sortItem, this.status.isReverse)
        this.status.isReverse = true
      } else if (this.sortItem === 'return') {
        this.status.isPagination = false // 將 Pagination 元件顯示
      } else {
        console.log(this.sortItem, typeof (this.sortItem), this.status.isReverse)
        this.status.isReverse = !this.status.isReverse // 控制箭頭上下
      }
    }
  },
  computed: {
    newData () {
      const vm = this
      if (!this.status.isPagination) {
        return this.products
      } else if (this.sortItem === 'category' || this.sortItem === 'title') {
        let newData = vm.allProducts.sort(function (a, b) {
          var A = a[vm.sortItem].toUpperCase()
          var B = b[vm.sortItem].toUpperCase()
          if (A < B) {
            return -1
          } else if (A > B) {
            return 1
          } else {
            return 0
          }
        })
        return newData
      } else if (this.status.isReverse) {
        let newData = vm.allProducts.sort(function (a, b) {
          return a[vm.sortItem] - b[vm.sortItem]
        })
        return newData
      } else if (!this.status.isReverse) {
        let newData = vm.allProducts.sort(function (a, b) {
          return b[vm.sortItem] - a[vm.sortItem]
        })
        return newData
      }
      return this.products
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getAllProducts()
    this.getProducts()
    console.log(this.disabled)
  }
}
</script>

<style lang="scss" scoped>
  .hover-style {
    &:hover {
      cursor: pointer;
    }
  }
</style>
