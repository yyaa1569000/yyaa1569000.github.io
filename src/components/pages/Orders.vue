<template>
    <div>
        
        <table class="table mt-4">
            <thead>
                <th width="120">購買名稱</th>
                <th width="120">Email</th>
                <th width="120">購買款項</th>
                <th width="100">應付金額</th>
                <th width="80">是否付款</th>
            </thead>
            <tbody>
        <tr v-for="(item, key) in product" :key="key"
          
          :class="{'text-secondary': !item.is_paid}">
          <td>{{ item.create_at }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未起用</span>
          </td>
        </tr>
            </tbody>
        </table>
<pagination :page="pagination" v-on:emitGetProduct="getList"></pagination>
    </div>
</template>


<script>
    import $ from 'jquery';
    import pagination from './pagination';

    export default{
        data(){
            return{
                product:[],
                pagination:{},
                isLoading:false,
            }
        },
       
        methods:{
            getList(page = 1){
                console.log('page',page);
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`;
                this.$http.get(api).then((response) => {
                    if(response.data.success){
                        vm.product = response.data.orders;
                        vm.pagination = response.data.pagination;
                    }
                })
                
            }
        },
        created(){
            this.getList();   
        },
        components: {
    pagination,
  },
    }
    
</script>