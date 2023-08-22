<template>
<div>
  <loading :active.sync="isLoading"><img src="@/image/F6EUeV.gif" alt="" width="150px"></loading>
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
      </li> -->
      <li class="nav-item pr-5">
        <router-link class="nav-link text-white NavEffect" to="/admin/orders">購物紀錄
            </router-link>
      </li>
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
      <button class="btn btn-sm nott NavEffect" data-toggle="dropdown" ><i class="fas fa-shopping-cart text-white fa-2x pr-3"></i>
      <span class="nottb badge badge-pill badge-danger">{{cart.carts.length}}</span>
      </button>
      
      <div class="dropdown-menu" v-if="cart.carts.length!=0">
        <div class="row pl-4 d-flex justify-content-start" style="min-width: 295px">
          
          <h5 class="font-weight-bold">已選擇的商品</h5>
          <div class="border-bottom"></div>
          
          <table class="table-sm" v-for="item in cart.carts" :key="item.id"> 
            
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
      <div class="dropdown-menu font-weight-bold text-center my-2" v-else>快去買東西啦 !!</div>
      
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.facebook.com/"><i class="fab fa-facebook-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://www.instagram.com/"><i class="fab fa-instagram-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="blank" href="https://twitter.com/"><i class="fab fa-twitter-square text-white fa-2x pr-3"></i></a></button>
      <button class="btn btn-sm nott NavEffect"><a target="#" @click.prevent="signout" class="nav-link text-white NavEffect">登出
            </a></button>
      
      
        
      </div>
      
    </form>
  </div>
</nav>
  <div class="pt-5">
    

    <div class="text-right mt-4 sticky-top">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
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
            <span v-else>未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="deleteModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :page="pagination" v-on:emitGetProduct="getProducts"></pagination>


    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-cog fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img=""
                  class="img-fluid"
                  :src="tempProduct.imageUrl"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import $ from "jquery";
import pagination from "./pagination";

export default {
  data() {
    return {
      products: [],
      category:[],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      cart: [],
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    // 看有沒有收到資料
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    deleteModal(item) {
      this.tempProduct = Object.assign({}, item);
      $("#delProductModal").modal("show");
    },
    updateProduct() {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      let httpMethod = "post";
      const vm = this;
      console.log("vvmvmvm", vm);
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        } else {
          $("#productModal").modal("hide");
          vm.getProducts();
          console.log("新增失敗");
        }
        // vm.products = response.data.products;
      });
    },
    deleteProduct() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data);
        $("#delProductModal").modal("hide");
        vm.getProducts();
      });
    },
    uploadFile() {
      console.log(this);
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;
            // console.log(vm.tempProduct);
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
          }else {
          this.$bus.$emit('message:push', response.data.message, 'danger');
          }
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
    signout() {
     const vm = this;
     const url = `${process.env.APIPATH}/logout`;
     vm.isLoading = true;
      this.$http.post(url).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push('/home');
          vm.isLoading = false;
        }
      });
    },
    
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  components: {
    pagination,
  },
};
</script>