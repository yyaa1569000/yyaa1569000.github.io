<template>
    <div>
        
        
        <Alert></Alert>
        

        <div>
            
        <router-view>
            
        </router-view>
        
            
        </div>

    </div>
</template>

<script>
import Sidebar from './Sidebar';
// import Navbar from './Navbar';
import Alert from './AlertMessage';



export default {

    components:{
        Sidebar,
        // Navbar,
        Alert,
        
        
    },
    
    created() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)pap\s*=\s*([^;]*).*$)|^.*$/, '$1');
    
    this.$http.defaults.headers.common.Authorization = myCookie;
    },
};
</script>