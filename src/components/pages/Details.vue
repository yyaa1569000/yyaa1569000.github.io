<template>
    <div>
      <loading :active.sync="isLoading"><img src="@/image/F6EUeV.gif" alt="" width="150px"></loading>
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
<div class="container-fluid bg-covers pt-5">
      <div class="container main-contant pt-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb font-weight-bold bg-dark">
            <li class="breadcrumb-item"><router-link to="/home">首頁
            </router-link></li>
            <li class="breadcrumb-item"><router-link to="/customer_order">商品
            </router-link></li>
            <li class="breadcrumb-item active" aria-current="page">商品細節</li>
          </ol>
        </nav>
      <div class="row">
        <div class="col-md-5">
          <div class="mt-5">
            <h1 class="h1 font-weight-bold">
              {{ product.title }}
              
            </h1>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4 font-weight-bold" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6 font-weight-bold" v-if="product.price">
                原價{{ product.origin_price }} 元</del
              >
              <div class="h4 font-weight-bold" v-if="product.price">
                現在只要 {{ product.price }} 元
              </div>
            </div>
            <hr />

            <div class="input-group mt-3">
              <select
                name=""
                class="form-control mr-1"
                id=""
                v-model="filter"
              >
              <option value="" disabled>{{SelectQuantity}}</option>
                <option  :value="num"  v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
                
              </select>
              <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id,filter)"
              :disabled="filter === ''"
              
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
            
          </div>
            <div class="description pt-5">
          <p class="card-text font-weight-bold">
            獲取途徑：{{ product.description }}
          </p>
          <p class="card-text pt-5 font-weight-bold">
            介紹：{{ product.content }}
          </p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          

          <h3 class="mt-5 text-center font-weight-bold">商品照片</h3>
          <div
            style="
              height: 600px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
          <div class="pt-3">
            <h1 class="font-weight-bold">以上內容物純屬虛構</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </div>
</template>


<script>


export default {
  data() {
    return {
      
      product: {},
      productId: '',
      cart: [],
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
      SelectQuantity :"-- 請選擇數量 --",
      carts: [],
      isLoading: false,
      coupon_code: "",
      filter: "",
      
      arms: "all",
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
    getDetails() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.productId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        console.log(response);
        vm.isLoading = false;
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
        this.$bus.$emit('message:push', '已加入購物車', 'success');
        vm.getCart();
        // $("#productModal").modal("hide");
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
  },
  
  created() {
    this.productId = this.$route.params.productId;
    console.log(this.productId);
    this.getDetails();
    this.getProducts();
    this.getCart();
  },
  
  
};
</script>