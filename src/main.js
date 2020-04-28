import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//按需导入mint-ui组件
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem  } from 'mint-ui';

//导入min-ui的样式
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

//导入APP根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(app),
    router
});
