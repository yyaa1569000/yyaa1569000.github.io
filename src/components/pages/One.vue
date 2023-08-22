<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light pb-2 fixed-top"  style="background-color: rgba(17, 17, 17, 0.75)">
    <div class="pr-5">
      <router-link to="/home">
  <img src="https://i.imgur.com/eGFUAqB.png" width="50px" alt=""></router-link>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul class="navbar-nav mr-auto pr-5">
      <li class="nav-item active pr-5 ">
        
        <router-link class="nav-link text-white NavEffect" to="/home"><i class="fas fa-home pr-1"></i>首頁
            </router-link>
      </li>
      <div class="nav-item pr-5">
        
        <router-link class="nav-link text-white NavEffect" to="/customer_order"><i class="fab fa-shopify pr-1"></i>購物去
            </router-link>
      </div>
      <!-- <li class="nav-item pr-5">
        <router-link class="nav-link text-white NavEffect" to="/admin/products">產品列表
            </router-link>
      </li>
      <li class="nav-item pr-5">
        <router-link class="nav-link text-white NavEffect" to="/admin/orders">購物紀錄
            </router-link>
      </li> -->
      <div class="nav-item pr-5">
        <router-link class="nav-link text-white NavEffect" to="/shopping_cart"><i class="fas fa-shopping-cart pr-1"></i>購物車
            </router-link>
      </div>
      <div class="nav-item pr-5">
        <a target="blank" href="https://line.me/ti/p/e13hsxBVps" class="nav-link text-white NavEffect"><i class="fas fa-user-tie pr-1"></i>關於作者
            </a>
      </div>
      <router-link class="nav-link text-white NavEffect" to="/login"><i class="fas fa-user-cog pr-1"></i>後台登入
            </router-link>
      <!-- <li class="nav-item pr-5">
        <router-link class="nav-link text-white" to="/admin/coupons"><a href="">優惠券</a>
            </router-link>
      </li> -->
      
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div class="dropdown">
      <button class="btn btn-sm nott NavEffect" data-toggle="dropdown"><i class="fas fa-shopping-cart text-white fa-2x pr-3"></i>
      <span class="nottb badge badge-pill badge-danger" v-if="carts.length!=0">{{ carts.length }}</span>
      </button>
      
      <div class="dropdown-menu" v-if="carts.length!=0">
        <div class="row pl-4 d-flex justify-content-start" style="min-width: 295px">
          
          <h5 class="font-weight-bold">已選擇的商品</h5>
          <div class="border-bottom"></div>
          
          <table class="table-sm" v-for="item in carts" :key="item.id"> 
            
            <tbody>
              
              <tr class="d-flex border-bottom">
                <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
                <td class="text-left">
                    {{ item.product.title }}
                </td>
                <td class="text-right">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-right">${{ item.final_total }}元</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 class="font-weight-bold text-center mt-1"><router-link  to="/shopping_cart"><a class="text-success" href="">結帳去</a>
            </router-link></h5>
      </div>
     
        <router-link to="/customer_order"  class="Menuffect dropdown-menu font-weight-bold text-center my-2" v-else>
        快去買東西啦 !!
        </router-link>

      
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.facebook.com/"><i class="fab fa-facebook-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.instagram.com/"><i class="fab fa-instagram-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://twitter.com/"><i class="fab fa-twitter-square text-white fa-2x pr-3"></i></a></button>
      </div>
      
    </form>
  </div>
</nav>
  <div class="container-fluid pt-5 bg-covers">
    
    <loading :active.sync="isLoading"><img src="@/image/F6EUeV.gif" alt="" width="150px"></loading>

    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <!-- <a class="list-group-item list-group-item-action active" data-toggle="list"  href="#home">全部商品</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" v-for="item in products" :key="item.id" value="item.category">{{item.category}}</a> -->
            <div class="box pb-2">
            <a
              class="list-group-item list-group-item-action font-weight-bold ListGroupLeft"
              :class="{ active: arms == 'all' }"
              @click.prevent="changeArms('all')"
              data-toggle="list"
              href="#"
            >
              <img src="https://upload.cc/i1/2021/11/22/VkyQ0Y.png" alt="" height="50px"> 全部商品</a
            >
            </div>
            <div class="box pb-2">
            <a
              class="list-group-item list-group-item-action font-weight-bold ListGroupLeft"
              :class="{ active: arms == 'OneHanded' }"
              @click.prevent="changeArms('OneHanded')"
              data-toggle="list"
              href="#"
            >
              <img src="https://upload.cc/i1/2021/11/22/1BgDI6.png" alt="" height="50px"> 單手劍</a
            >
          </div>
          <div class="box pb-2">
            <a
              class="list-group-item list-group-item-action font-weight-bold ListGroupLeft"
              :class="{ active: arms == 'TwoHanded' }"
              @click.prevent="changeArms('TwoHanded')"
              data-toggle="list"
              href="#"
            >
              <img src="https://upload.cc/i1/2021/11/22/g7pu6N.png" alt="" height="50px"> 雙手劍</a
            >
            </div>
            <div class="box pb-2">

            <a
              class="list-group-item list-group-item-action font-weight-bold ListGroupLeft"
              :class="{ active: arms == 'Spear' }"
              @click.prevent="changeArms('Spear')"
              data-toggle="list"
              href="#"
            >
              <img src="https://upload.cc/i1/2021/11/22/dA8rHQ.png" alt="" height="50px"> 長槍</a
            >
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              class="col-sm-6 col-lg-4 mb-4"
              v-for="item in filterData"
              :key="item.id"
            >
              <div class="card border-0 shadow-sm">
                <div
                  style="
                    height: 150px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{
                    item.category
                  }}</span>
                  <h5 class="card-title">
                    <a href="#" class="text-dark">{{ item.title }}</a>
                  </h5>
                  
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                  >
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del class="h6" v-if="item.price">
                      {{ item.origin_price }} 元</del
                    >
                    <div class="h5" v-if="item.price">
                      特價 {{ item.price }} 元
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button type="button"  class="btn btn-outline-secondary btn-sm"  @click="getProduct(item.id)">
                    <i class="fas fa-spinner fa-spin"  v-if="status.loadingItem === item.id"></i>
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                    @click="addtoCart(item.id)"
                  >
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.loadingItem === item.id"
                    ></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price">
                {{ product.origin_price }} 元</del
              >
              <div class="h4" v-if="product.price">
                特價 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
                @click="addtoCart(product.id, product.num)"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 購物車、優惠碼 -->
    <!-- <div class="my-5 row justify-content-center">
      <div class="my-5 row justify-content-center">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>

    </div> -->
    <!-- 客戶資料訂單送出 -->
    <!-- <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail"
            v-validate="'required|email'"
            :class="{'is-invalid': errors.has('email')}"
            v-model="form.user.email" placeholder="請輸入 Email">
          <span class="text-danger" v-if="errors.has('email')">
            {{ errors.first('email') }}
          </span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" id="usertel"
            v-model="form.user.tel" placeholder="請輸入電話">
        </div>
    
    <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="address" class="form-control" name="address"
          :class="{'is-invalid': errors.has('address')}"
            id="useraddress" v-model="form.user.address" v-validate="'required'"
            placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>
        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name="" id="" class="form-control" cols="30" rows="10"
            v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div> -->
  </div>
  </div>
</template>


<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {},

      status: {
        loadingItem: "",
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      carts: [],
      isLoading: false,
      coupon_code: "",
      filter: "",
      arms: "OneHanded",
    };
  },

  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        // $("#productModal").modal("show");
        console.log(response);
        vm.$router.push(`/details/${id}`)
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
        this.$bus.$emit('message:push', '已加入購物車', 'success');
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.carts = response.data.data.carts;
        console.log(response);
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
        
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.isLoading = false;
          });
        } else {
          console.log("欄位不完整");
        }
      });
    },
    changeArms(s) {
      const vm = this;
      vm.arms = s;
    },
    // getDetails(id) {
    //   const vm = this;
    //   vm.status.loadingItem = id;
    //   // vm.$router.push({path:`/checkmore/${id}`,query:{value:vm.stared}});
    //   vm.$router.push(`/details/${id}`)
    //   // vm.status.loadingItem = "";
    // },
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.arms === "all") {
        return vm.products;
      } else if (vm.arms === "OneHanded") {
        return vm.products.filter((item) => {
          return item.category === "單手劍";
        });
      } else if (vm.arms === "TwoHanded") {
        return vm.products.filter((item) => {
          return item.category === "雙手劍";
        });
      } else if (vm.arms === "Spear") {
        return vm.products.filter((item) => {
          return item.category === "長槍";
        });
      }
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    
    
  },
};
</script>