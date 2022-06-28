// 导入Vue
import Vue from 'vue';
//导入vue路由插件
import VueRouter from 'vue-router';
//通过Vue使用路由（手动安装）
Vue.use(VueRouter)

//导入组件
import ZhiHuiYaDing from "./components/ZhiHuiYaDing.vue";
import BuWangChuXin from "./components/BuWangChuXin.vue";
import ZhuanTiZhuanLan from "./components/ZhuanTiZhuanLan.vue";
import LoginComponents from "./components/LoginComponents.vue";
import ShouYe from "./components/ShouYe.vue"

//创建路由对象
const router = new VueRouter({
    routes: [
        {path:'/',redirect:'/login'},
        {name:"login",path:'/login',component:LoginComponents},
        {   path:'/shouye',
            component:ShouYe
        },
        {   path:'/zhihuiyading',
            component:ZhiHuiYaDing
        },
        {   path:'/buwangchuxin',
            component:BuWangChuXin
        },
        {   path:'/zhuantizhuanlan',
            component:ZhuanTiZhuanLan
        }
    ],
    // 设置link的高亮显示
    linkActiveClass:'mui-active'
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    // 判断是否登陆成功过
    if (!tokenStr) return next('/login')//强制跳转路径
    next()
  })
export default router