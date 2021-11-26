<template>
    <div class="trImg">
     
     <loading :active.sync="isLoading"><img src="https://upload.cc/i1/2021/11/23/F6EUeV.gif" alt="" width="150px"></loading>
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
        <div class="container-fluid bg-cover d-flex align-items-center">
                <div class="container">
                  <div class="row">
                    
                    <div class="col-12 d-flex justify-content-center">
                      <h3 class="text-center bgTyping py-3">
                          <div>開放世界ARPG。</div>
                        <div class="typing ml-5 ">一起去新天地冒險吧！</div>
                      </h3>
                      </div>
                  </div>
                  
            </div>
        </div>
        <div class="container-fluid" style="position: relative;">
          <div class="row animateTWO">
            <div class="col-6 animate__slideInLeft" style="position: absolute;top:-670px;left:-150px"></div>
            <div class="col-6 animate__slideInRight" style="position: absolute;top:-670px;right:-100px"></div>
          </div>
        <div class="row d-flex justify-content-center" style="position: relative;">
          <div class="bg-Separate"></div>
          <router-link class="btn btn-danger btn-lg" to="/customer_order" style="position: absolute;top:-100px">查看所有商品
            </router-link>
            </div>
            
        </div>
<div class="container text-center pt-5 pb-3 d-flex justify-content-center">
  <div class="aboutH">
    <h2 class="font-weight-bold">介紹</h2>
  </div>
</div>

<div  class=" container text-center d-flex justify-content-center">
      <router-link class="text-secondary font-weight-bold" style="font-size: 20px;" to="/customer_order" >Genshin-Impact SHOP</router-link>

</div>
<div class="container text-center d-flex pb-5 justify-content-center">
  <div class="col-6">
  <p class="font-weight-bold">在Genshin-Impact的世界中，會有各式各樣的怪物，想要打敗怪物就需要武器。Genshin-Impact SHOP 提供您冒險時所需要的武器，有了這些武器，在大世界冒險時不管是怪物還是 BOSS 都能像切菜一樣輕鬆地打倒。</p>

  </div>

       </div> 
          <div class="bg-Separate"></div>
        
 <!-- Swiper -->
 
    <div class="swiper">
      
        <div class="swiper-wrapper">
          <router-link class="swiper-slide trImg" to="/one" style="background-image:url('https://upload.cc/i1/2021/11/24/oDY0H2.jpg');">
          <div class="bgSwiper" style="background-image:url('https://upload.cc/i1/2021/11/25/cjNVEf.png')"></div>
          </router-link>
          <router-link class="swiper-slide trImg" to="/spear" style="background-image:url('https://upload.cc/i1/2021/11/24/eWmH4L.jpg')">
          <div class="bgSwiper" style="background-image:url('https://upload.cc/i1/2021/11/25/JsavmI.png')"></div>
          </router-link>
          <router-link class="swiper-slide trImg" to="/two" style="background-image:url('https://upload.cc/i1/2021/11/24/Mwpxv3.jpg')">
          <div class="bgSwiper" style="background-image:url('https://upload.cc/i1/2021/11/25/GlRzUT.png');"></div>
          </router-link>
        </div>
        <!-- Add Pagination -->
        <!-- Add Arrows -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="bg-Separate"></div>
    </div>
    <div class="container-fluid bgGIF pt-2 d-flex justify-content-center">
            
              <div class="col-6 text-center pb-5 bg-new">
                <h1 class="text-white pt-5">新開張!!</h1>
                <div class="text-white">即日起到 12/31 輸入優惠碼</div>
                <div class="text-white animate__fadeIn">打到骨折</div>
                <div class="text-white">即可享有8折優惠</div>
                <router-link to="/customer_order"><button type="button" class="btn btn-info">馬上使用優惠券</button>
            </router-link>
            </div>
            
              
          </div>
    <div class="bg-Separate"></div>
        
        <div class="footerbg d-flex justify-content-center align-items-center">
          <h6 class="text-white">Copyright © Genshin-Impact 2021 | 僅個人作品，無商業用途</h6>
        </div>











        </div>
</template>


<script>

import $ from 'jquery';
import Swiper from 'swiper';



  


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
      carts: [],
      
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

mounted(){
    new Swiper('.swiper', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
    });
  },



};
</script>

