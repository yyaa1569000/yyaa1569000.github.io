import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import Coupons from '@/components/pages/Coupons'
import Orders from '@/components/pages/Orders'
import CustomerOrder from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'
import ShoppingCart from '@/components/pages/ShoppingCart'
import Home from '@/components/pages/Home'
import Details from '@/components/pages/Details'
import Swiper from '@/components/pages/Swiper'
import One from '@/components/pages/One'
import Two from '@/components/pages/Two'
import Spear from '@/components/pages/Spear'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },

    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home,
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          // meta: { requiresAuth: true },
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard_customer',
      component: Dashboard,
      children: [

        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
      
        {
          path: '/customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
          
        },

        {
          path: '/one',
          name: 'One',
          component: One,

        },

        {
          path: '/two',
          name: 'Two',
          component: Two,

        },

        {
          path: '/spear',
          name: 'Spear',
          component: Spear,

        },

        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },

        {
        path: '/shopping_cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
        },

        {
          path: '/details/:productId',
          name: 'Details',
          component: Details,
        },

        {
          path: '/swiper',
          name: 'Swiper',
          component: Swiper,
        },

      ],
      
    },
  ],
});
