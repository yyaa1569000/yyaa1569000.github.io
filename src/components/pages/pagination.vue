<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !page.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProductList(page.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        v-for="pageNumber in page.total_pages" :key="pageNumber"
        :class="{'active': pageNumber === page.current_page }">
        <a class="page-link" href="#" @click.prevent="getProductList(pageNumber)">{{pageNumber}}</a>
      </li>
      <li class="page-item" :class="{'disabled': !page.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProductList(page.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {
//    props:['total_page', 'current_page','has_next', 'has_pre'],
//       data(){
//           return{
//               pagination:'',
//               changePage:''
//           }
//       },
//       methods:{
//           getPagination(page){
//               this.changePage = page; 
//               this.$emit('increment',Number(this.changePage))
//           }

//       }
name: 'pagination',
  props: ['page'],
  data () {
    return {
      
    }
  },
  methods: {
    getProductList (page) {
      this.$emit('emitGetProduct', page)
    }
  }      
  }
</script>