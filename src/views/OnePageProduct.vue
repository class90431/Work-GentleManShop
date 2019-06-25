<template>
  <div>
    <Alert/>
    <Navbar/>
    <loading :active.sync="isLoading"></loading>
    <!-- {{ this.$route.params.id }} -->
    <div class="container-fluid">
    <div class="row">
      <div class="card col-sm-8">
        <img :src="product.imageUrl" class="card-img-top" alt="...">
      </div>
      <div class="col-sm-4 text-left font-style pt-4 " id="productDetails">
        <p class="font-weight-bold text-dark">{{ product.category }}</p>
        <p class="text-muted">{{ product.title }}</p>
        <span v-if="product.origin_price !== product.price" >NT {{ product.price | currency }}</span>
        <span :class="{'text-decoration-through' : product.origin_price > product.price, 'text-opacity50': product.origin_price > product.price, 'ml-3': product.origin_price > product.price}"
          >NT {{ product.origin_price | currency }}</span>
          <hr>
        <div class="marginBottom">
          <select v-model="product.size" class="form-control-sm" style="background:#fff" @change="changeButton(product.size, product.num)">
            <option value="0" disabled selected="true">--- 尚未選擇 ---</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <select v-model="product.num" class="form-control-sm ml-3 mb-3" style="background:#fff" @change="changeButton(product.size, product.num)">
            <option value="0" disabled selected="true" style="color:gray">--- 選擇數量 ---</option>
            <option :value="number" v-for="(number, index) in 10" :key="index">{{ number }}{{ product.unit }}</option>
          </select><br>
          <button :disabled="!status.btn"  class="btn btn-dark rounded-0 btn-sm btn-style" @click.prevent="addtoCart(product.id,product.size, product.num)">加入購物車</button>
        </div>
        <hr>
        <ul class="nav nav-tabs nav-justified " id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active text-center" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">DESCRIOTION<br>商品描述</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">LAUNTRY<br>洗滌說明</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" id="contact-tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"
              data-toggle="modal" data-target="#exampleModal">SIZE GUIDE<br>碼數指南</a>
          </li>
        </ul>
        <div class="tab-content mt-4 text-secondary" id="myTabContent">
          <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
            <pre class="line-height-style">{{ product.description }}</pre>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <pre class="line-height-style">{{ product.content }}</pre>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">3</div>
        </div>
      </div>
    </div>
    </div>
    <!-- Modal -->
    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header px-4 pt-3 pb-0">
            <h5 class="modal-title" id="exampleModalLabel">SIZE GUIDE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Collapse Start -->
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0 text-left">
                      <button class="btn btn-link font-weight-bold w-100 d-flex justify-content-between" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        SIZE CHART 平鋪尺寸表 (CM)
                        <i class="fa fa-angle-down fa-lg menu__icon--open"></i>
                        <i class="fa fa-angle-up fa-lg menu__icon--close"></i>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <table class="table">
                        <thead class="">
                          <tr>
                            <th>SIZE (CM)</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>F</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>肩寬</td>
                            <td>40</td>
                            <td>43</td>
                            <td>46</td>
                            <td>-</td>
                            <th rowspan="8">
                              <img src="../../public/images/size-guide.jpg" alt="">
                            </th>
                          </tr>
                          <tr>
                            <td>胸寬</td>
                            <td>54</td>
                            <td>57</td>
                            <td>60</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>下擺寬</td>
                            <td>48</td>
                            <td>51</td>
                            <td>54</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>袖長</td>
                            <td>57</td>
                            <td>59</td>
                            <td>61</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>袖口寬</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>臂圍</td>
                            <td>21.5</td>
                            <td>22.5</td>
                            <td>23.5</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>衣長</td>
                            <td>65</td>
                            <td>67</td>
                            <td>69</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>重量 g</td>
                            <td>622</td>
                            <td>622</td>
                            <td>622</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="row">
                        <div class="col-8 text-left pl-5 text-muted font-style">
                          <p>1肩寬 2胸圍 3下擺寬 4袖長 5袖口寬 6衣長</p>
                          <p>※尺寸表會因布料彈性、水洗處理、測量起訖點等因素，</p>
                          <p>與實際商品尺寸略有誤差，誤差尺寸±2cm，</p>
                          <p>在國際驗貨標準範圍都是屬於可接受範圍，並不屬於瑕疵。</p>
                        </div>
                      </div>
                      <!-- <p>1肩寬 2胸圍 3下擺寬 4袖長 5袖口寬 6衣長
                          ※尺寸表會因布料彈性、水洗處理、測量起訖點等因素，
                          與實際商品尺寸略有誤差，誤差尺寸±2cm，
                          在國際驗貨標準範圍都是屬於可接受範圍，並不屬於瑕疵。</p> -->
                    </div>
                  </div>
                </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0 text-left">
                    <button class="btn btn-link collapsed font-weight-bold w-100 d-flex justify-content-between" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      FITTING REPORT 試穿報告
                        <i class="fa fa-angle-down fa-lg menu__icon--open"></i>
                        <i class="fa fa-angle-up fa-lg menu__icon--close"></i>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0 text-left">
                    <button class="btn btn-link collapsed font-weight-bold w-100 d-flex justify-content-between" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      MODELS REFERENCE 模特兒參考
                        <i class="fa fa-angle-down fa-lg menu__icon--open"></i>
                        <i class="fa fa-angle-up fa-lg menu__icon--close"></i>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
            <!-- Collapse End -->
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Alert from '../components/AlertMessage'
export default {
  data () {
    return {
      id: this.$route.params.id,
      product: {},
      status: {
        btn: false
      }
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMER_PATH}/product/${this.id}`
      const vm = this
      // vm.isLoading = true
      // console.log(api)
      this.$http.get(api).then((response) => {
        // console.log(response.data.success)
        // vm.isLoading = false
        vm.product = response.data.product
        this.product.num = 0 // 預設下拉式數量の選單
        this.product.size = 0 // 預設下拉式大小の選單
        vm.product.price = parseInt(vm.product.price)
        vm.product.origin_price = parseInt(vm.product.origin_price)
        console.log(vm.product)
      })
    },
    changeButton (size, num) {
      console.log(size, num)
      if (size !== 0 && num !== 0) {
        this.status.btn = true
      }
    },
    addtoCart (id, size, qty) {
      this.$store.dispatch('addtoCart', { id, size, qty, vm: this })
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  components: {
    Navbar,
    Footer,
    Alert
  },
  created () {
    console.log(this.$route.params.id)
    this.getProduct()
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/all.scss';
  .font-style {
    font-size: .8rem;
    font-family: 'LiHei Pro';
  }
  .text-decoration-through {
    text-decoration:line-through;
  }
  .text-opacity50 {
    opacity: 0.5;
  }
  select {
    height: 20px;
    -webkit-border-radius: 0;
    border: 0;
    outline: 1px solid #ccc;
    outline-offset: -1px;
  }
  .btn-style {
    width: 50%;
    &:hover {
      opacity: .5;
    }
  }
  .marginBottom {
    margin-bottom: 20%;
  }
  .nav-link {
    color: gray
  }
  .line-height-style {
    line-height: 2rem;
  }
  .btn-link {
    color: gray;
    font-size: .8rem;
    &:hover {
      color: #000;
      text-decoration: none;
    }
    &:focus {
      color: #000;
      text-decoration: none;
    }
  }
  .modal-header {
    border: 0px;
  }
  // 調整 collapse 箭頭 icon 的 css  START
  [aria-expanded="false"] .menu__icon--open {
    display: inline-block;
    // position: absolute;
    // right: 10px;
    // top: 20px;
  }
  [aria-expanded="false"] .menu__icon--close {
    display: none;
  }
  [aria-expanded="true"] .menu__icon--open {
    display: none;
  }
  [aria-expanded="true"] .menu__icon--close {
    display: inline-block;
    // position: absolute;
    // right: 10px;
    // top: 20px;
  }
  // 調整 collapse 箭頭 icon 的 css  END
</style>
