// 导入Vue
import Vue from 'vue';
//导入vue路由插件
import VueRouter from 'vue-router';
//通过Vue使用路由（手动安装）
Vue.use(VueRouter)


// 新增修改方法：获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 新增修改方法：修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//导入组件
import ZhiHuiYaDing from "./components/ZhiHuiYaDing.vue";
import BuWangChuXin from "./components/BuWangChuXin.vue";
import LoginComponents from "./components/LoginComponents.vue";
import RegisterComponents from "./components/RegisterComponents.vue";
import OrderList from "./components/OrderList.vue";
import ConfirmList from "./components/ConfirmList.vue";
import MyCenter from "./components/MyCenter.vue";
import ShouYe from "./components/ShouYe.vue"

//创建路由对象
const router = new VueRouter({
    routes: [
        {path:'/',redirect:'/login'},//路由拦截，跳转到首页
        {path:'/register',component:RegisterComponents},
        {name:"login",path:'/login',component:LoginComponents},//登录
        {name:"MyCenter",path:'/mycenter',component:MyCenter},//个人中心
        {path:'/shouye',component:ShouYe},
        {path:'/zhihuiyading',component:ZhiHuiYaDing},//智慧亚丁
        {name:'OrderList',path:'/orderlist/:id',component:OrderList},//订单列表
        {name:'ConfirmList',path:'/orderlist/confirmlist',component:ConfirmList},//订单列表-提交订单
        {path:'/buwangchuxin',component:BuWangChuXin}//不忘初心
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