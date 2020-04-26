import Vue from 'vue'

//按需导入mint-ui组件
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';

//导入min-ui的样式
import './lib/mui/css/mui.css'

Vue.component(Header.name, Header);


//导入APP根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(app)
});
