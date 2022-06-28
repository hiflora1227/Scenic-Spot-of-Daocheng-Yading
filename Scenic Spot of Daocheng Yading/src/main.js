//此处作为项目的入口文件
//导入vue插件
import Vue from 'vue'

//导入app组件
import app from './App.vue'

//导入路由
import router from './router';

// 导入 vue的ajax插件
import VueResource from 'vue-resource';

// 引入axios
import axios from 'axios'

Vue.prototype.$http = axios // 将请求模块挂载到实例模型上


// 全局引入elementui组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// 引入部分组件
import { Button,Form,FormItem,Input,Message } from 'element-ui';
// 使用部分组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
// Vue.use(Select)

//导入mint-ui组件库
import MintUi from 'mint-ui';
//导入mintui的样式
import 'mint-ui/lib/style.css';
// 导入mint-ui中的组件
// import {Header} from 'mint-ui';
// Vue.use(Header.name,Header)
// 导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import mui from './lib/mui/js/mui.min.js'

import './css/sass/index.scss'

// 将mint-ui安装到Vue中
Vue.use(MintUi)

// 将element-ui安装到Vue中
// Vue.use(ElementUI);

Vue.prototype.mui = mui


//将VueResource安装到vue 
Vue.use(VueResource)
// 设置API请求的根路径
// Vue.http.options.root = 'http://www.liulongbin.top:3005/'
// 启用全局emulateJSON，post请求时使用
Vue.http.options.emulateJSON = true

// 创建vue实例
const vm = new Vue({
    el:'#app',
    render: c=>c(app),
    beforeCreate(){
        Vue.prototype.$bus = this//安装全局事件总线
    },
    // 挂载路由
    router
})