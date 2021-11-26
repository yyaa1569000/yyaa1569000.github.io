<template>
    <div>
      
  <nav class="navbar navbar-expand-lg navbar-light pb-2" style="background-color: rgba(17, 17, 17, 0.75)">
    <div class="pr-5">
  <img src="https://i.imgur.com/eGFUAqB.png" width="50px" alt="">
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul class="navbar-nav mr-auto pr-5">
      <li class="nav-item active pr-5 ">
        <router-link class="nav-link text-white" to="/home"><a href="">首頁</a>
            </router-link>
      </li>
      <div class="nav-item pr-5">
        
        <router-link class="nav-link text-white" to="/customer_order"><a href="">購物去</a>
            </router-link>
      </div>
      <li class="nav-item pr-5">
        <router-link class="nav-link text-white" to="/products"><a href="">產品列表</a>
            </router-link>
      </li>
      <li class="nav-item pr-5">
        <router-link class="nav-link text-white" to="/orders"><a href="">購物紀錄</a>
            </router-link>
      </li>
      <div class="nav-item pr-5">
        <router-link class="nav-link text-white" to="/shopping_cart"><a href="">購物車</a>
            </router-link>
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
      <a href=""><i class="fab fa-facebook-square text-white fa-2x"></i></a>
      <a href=""><i class="fab fa-instagram-square text-white fa-2x pl-3"></i></a>
      <a href=""><i class="fab fa-twitter-square text-white fa-2x pl-3"></i></a>
      <a href=""><i class="fas fa-shopping-cart text-white fa-2x pl-3"></i></a>
    </form>
  </div>
</nav>

    </div>
</template>



<script>
export default {
  name:'Navbar',
  methods: {
    
  },
};
</script>


