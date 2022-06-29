<template>
	<div>
		<!--顶部logo+侧滑栏  -->
        <span @click="getNavShow" id="icon" class="mui-icon mui-icon-bars"></span>
		<div class="canvas" v-show="show">	
            <!-- 登录区 -->
            <section class="login">
                <div class="mui-card-header mui-card-media">
                    <img src="../images/logo.png" />
                    <div id="login-username" class="mui-media-body" ref="nickname">                        
                        <!-- 用户名占位 -->
                    </div>
                </div>
            </section>
			<ul>
				<li>
					<router-link to="/shouye">首页</router-link>
				</li>
				<li>
					<router-link to="/xxx">门票预定</router-link>
				</li>
				<li>
					<router-link to="/xxx">住宿推荐</router-link>
				</li>
				<li>
					<router-link to="/xxx">净土文学</router-link>
				</li>
				<li>
					<router-link to="/zhihuiyading">智慧亚丁</router-link>
				</li>
				<li>
					<router-link to="buwangchuxin">不忘初心</router-link>
				</li>
			</ul>
            <el-button class="logout" type="info" @click="logout">退出登录</el-button>
		</div>
	</div>
	
</template>

<script>
var username
	export default {
		name:'SliderBar',
		data() {
			return {
				show:false,
				scroll: 0,
			}
		},
		methods: {
			 // 退出登录事件
            logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
            },
            //返回顶部事件
            backTop(){                
                document.documentElement.scrollTop = 0;
            },
            // 侧滑栏出现、隐藏
            getNavShow(){
				this.show = !this.show                  
                if (this.show == true) {
                    this.$refs.mainContent.classList.add('main-content')
                } else{
                    this.$refs.mainContent.classList.remove('main-content')
                } 
			},
		},
		mounted(){
            
            this.$nextTick(() => {
                // 获取用户信息
                this.$bus.$on('login',(data)=>{
                    console.log('收到数据',data) 
                    username = data
                })
                console.log(this.$refs.nickname.innerText = username)
            });
	    },
        beforeDestroy(){
            // 事件调用完销毁
            // this.$bus.$off('login')
        }
	}
</script>

<style scoped>
/* 回到顶部 */
.back-top{
    position: fixed;
    right: 20px;
    bottom: 150px;
}
/* 侧边栏 */
/* 登录部分 */
.login{
    margin: 70px 0 -50px 0;
}
#login-username{
    color: #fff;
    font-size: 18px;
    /* padding                                                                                                                                                         -top: 10px; */
}
#icon{
	position: sticky;
    color:#fb1515;
    font-size: 24px;
    font-weight: bold;
	top: 60px;
	left: 40px;
    z-index: 999;
}
.canvas{
	width: 160px;
	height: 890px;
	/* float: left; */
	background-color: #FFB120;
	overflow: auto;
	position: fixed;
}
.canvas ul{
	margin-top: 100px;
}
.canvas ul li{
	font-size: 20px;
    font-weight: bold;
	margin: 20px -34px;

}
.canvas ul li a {	
	color: #fff;
}
/* 退出登录按钮 */
.logout{
    margin: 370px 0 0 30px;
}
</style>