<template>
    <div>
      <loading :active.sync="isLoading"><img src="https://upload.cc/i1/2021/11/23/F6EUeV.gif" alt="" width="150px"></loading>
      <nav class="navbar navbar-expand-lg navbar-light pb-2 fixed-top" style="background-color: rgba(17, 17, 17, 0.75)">
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
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.facebook.com/"><i class="fab fa-facebook-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.instagram.com/"><i class="fab fa-instagram-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://twitter.com/"><i class="fab fa-twitter-square text-white fa-2x pr-3"></i></a></button>
      </div>
      
    </form>
  </div>
</nav>
        <!-- 購物車、優惠碼 -->
        <div class="container pt-5 d-flex justify-content-center">
          <div class="col-md-9 pt-5">
          <nav aria-label="breadcrumb">
          <ol class="breadcrumb font-weight-bold bg-dark">
            <li class="breadcrumb-item"><router-link to="/home">首頁
            </router-link></li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
        </div>
        </div>
    <div class="container d-flex justify-content-center" v-if="cart.total!=0">
<div class="accordion col-md-9" id="accordionExample">
  <h1 class="d-flex justify-content-center font-weight-bold">結帳區</h1>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0 d-flex justify-content-between">
        <button class="btn btn-link font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          顯示商品細節
        </button>
        <th class="text-right">總計{{ cart.final_total }}</th>
      </h2>
    </div>
  </div>
  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th class="text-right">單價</th>
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
              <td class="text-right">{{ cart.final_total }}</td>
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
</div>

    </div>
    <div class="container d-flex justify-content-center" v-else>
<div class="accordion  col-md-9" id="accordionExample">
  <h1 class="d-flex justify-content-center font-weight-bold">結帳區</h1>
<div class="container text-center pt-5" >
  <h1>購物車空空如也!!!</h1>
<div class="pt-3">
<router-link to="/customer_order"><button type="button" class="btn btn-success">去看看 ??</button>
            </router-link></div>
</div>
</div>
</div>
    

<!-- 客戶資料訂單送出 -->
    <div class="my-5 px-3 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <h1 class="py-3 font-weight-bold text-center">訂購人資訊</h1>
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
    </div>

    </div>
</template>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      isLoading: false,
      coupon_code: '',
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
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
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
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
            console.log('訂單已建立', response);
            if (response.data.success) {
            vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.isLoading = false;
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>