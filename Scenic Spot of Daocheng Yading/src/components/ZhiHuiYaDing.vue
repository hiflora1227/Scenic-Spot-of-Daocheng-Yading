<template>
    <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
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

            <div ref="mainContent">
                <header>
                    <img class="logo" src="https://cn.yadingtour.com/templates/rt_denali/custom/images/home/logo-1.png" alt="">
                </header>
                <!-- 中间轮播图 -->
                <main>
                    <!-- 大图 -->
                    <mt-swipe class="large" :show-indicators="false" :auto="4500">
                        <mt-swipe-item>
                            <div class="content">
                                <h1>游览路线</h1>
                                <p>亲近自然，体验当地风土人情，才是旅行的意义</p>
                            </div>
                            <img src="https://cn.yadingtour.com/images/2019_10/20191021133001.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class="content">
                                <h1>交通路线</h1>
                                <p>去川西稻城亚丁旅游交通方式你真的选对了吗？</p>
                            </div>
                            <img src="https://cn.yadingtour.com/images/2019_10/20191021133002.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class="content">
                                <h1>沿途风光</h1>
                                <p>十月的桑堆会被红草染上艳丽的橘红色，秋日里的河滩和道路会有青杨林点缀耀眼的金黄，还有那矗立在稻城的白塔，巍峨洁净，庄严神圣。</p>
                            </div>
                            <img src="https://cn.yadingtour.com/images/2019_10/20191021133003.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class="content">
                                <h1>住宿体验</h1>
                                <p>体验一场藏式风情民宿，或者甄选舒适型酒店，每种都会有别样的感受。</p>
                            </div>
                            <img src="https://cn.yadingtour.com/images/2019_10/20191021133004.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class="content">
                                <h1>特色风味</h1>
                                <p>川味麻辣鲜香，藏式香酥甜脆。</p>
                            </div>
                            <img src="https://cn.yadingtour.com/images/2019_10/20191021133005.jpg">
                        </mt-swipe-item>
                    </mt-swipe>
                    <!-- 缩略图部分 -->
                    <!-- 图标 -->
                    <div class="slider-icon">
                        <span class="mui-icon mui-icon-back"></span>
                        <span class="mui-icon mui-icon-forward"></span>
                    </div>
                    
                    <div class="small" >
                        <mt-swipe :show-indicators="false" :auto="4000">
                            <mt-swipe-item>
                                <div>
                                    <div class="img-container">                                
                                        <img class="current" src="https://cn.yadingtour.com/images/2019_10/20191021133001.jpg">
                                    </div>
                                    <p class="title">游览路线</p>
                                </div>
                                <div>
                                    <div class="img-container">                                
                                        <img src="https://cn.yadingtour.com/images/2019_10/20191021133002.jpg">
                                    </div>
                                    <p class="title">交通路线</p>
                                </div>                        
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <div>
                                    <div class="img-container">                                
                                        <img class="current" src="https://cn.yadingtour.com/images/2019_10/20191021133002.jpg">
                                    </div>
                                    <p class="title">交通路线</p>
                                </div>
                                <div>
                                    <div class="img-container">                                
                                        <img src="https://cn.yadingtour.com/images/2019_10/20191021133003.jpg">
                                    </div>
                                    <p class="title">沿途风光</p>
                                </div>
                            </mt-swipe-item>
                            <mt-swipe-item>
                            <div>
                                    <div class="img-container">                                
                                        <img class="current" src="https://cn.yadingtour.com/images/2019_10/20191021133003.jpg">
                                    </div>
                                        <p class="title">沿途风光</p>
                                </div>
                                <div>
                                    <div class="img-container">                                
                                        <img src="https://cn.yadingtour.com/images/2019_10/20191021133004.jpg">
                                    </div>
                                    <p class="title">住宿体验</p>
                                </div>
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <div>
                                    <div class="img-container">                                
                                        <img class="current" src="https://cn.yadingtour.com/images/2019_10/20191021133004.jpg">
                                    </div>
                                        <p class="title">住宿体验</p>
                                </div>
                                <div>
                                    <div class="img-container">                                
                                        <img src="https://cn.yadingtour.com/images/2019_10/20191021133005.jpg">
                                    </div>
                                    <p class="title">特色风味</p>
                                </div>
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <div>
                                    <div class="img-container">                                
                                        <img class="current" src="https://cn.yadingtour.com/images/2019_10/20191021133005.jpg">
                                    </div>
                                    <p class="title">特色风味</p>
                                </div>
                                <div>
                                    <div class="img-container">                                
                                        <img src="https://cn.yadingtour.com/images/2019_10/20191021133001.jpg">
                                    </div>
                                    <p class="title">游览路线</p>
                                </div>
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                    <!-- 轮播图--底部标题 -->
                    <div class="traffic-title">
                        <p>TRAFFIC ROUTES</p>
                        <div>
                            交通路线
                        </div>
                    </div>
                </main>
                
                <!-- 图片切换/展示 -->
                <section class="img-show">
                    <div id="test" >
                        <transition name="hello" appear>
                            <img ref="img" v-bind:src = "'https://cn.yadingtour.com/images/2019_10/2019102114400'+num+'.jpg'"/><br>
                        </transition> 
                        <div id="left" @click = "changeleft" >  &lt; </div> 
                        <div id="right" @click = "changeright" > &gt; </div>                   
                    </div>
                </section>

                <!-- 亚丁圣地介绍 -->
                <section class="yading-intr">
                    <div class="detail-title">
                        <h2>亚丁圣地</h2>
                        <h3>中国香格里拉之魂</h3>
                    </div>
                    <div class="detail-content">
                        <p>这是水蓝色星球上的最后一片净土，这是有着神秘宗教文化的藏区圣地。稻城被誉为“中国香格里拉之魂”，这里有纯净的蓝天，还有神秘的藏族的风情。</p>
                        <p>仙乃日、央迈勇、夏洛多吉三座雪山拔地而起，雪山峰形形状各异，洁白无瑕，一层不染。珍珠海、牛奶海、五色海轻盈碧蓝，阳光下的湖面，波光粼粼，能瞬间让人平静下来。雪峰、森林、溪流、草甸、湖泊的组合，托出了一方静谧的净土。</p>
                    </div>
                </section>
                <!-- 吃喝玩乐模块 -->
                <section class="relax">
                    <div class="top-bar">
                        <h2>吃喝玩乐</h2>
                        <div class="search">
                            <!-- 下拉框 -->
                            <div class="mui-content">
                                <div class="mui-card">
                                    <ul class="mui-table-view mui-table-view-chevron">
                                        <li class="mui-table-view-cell mui-collapse">
                                            <a href="#"><span class="mui-icon mui-icon-bars"></span>&nbsp;&nbsp;ALL</a>
                                            <ul class="mui-table-view mui-table-view-chevron">
                                                <li @click="afterSelector1" ref="text1" class="mui-table-view-cell">游玩</li>
                                                <li @click="afterSelector2" ref="text2" class="mui-table-view-cell">美食</li>
                                                <li @click="afterSelector3" ref="text3" class="mui-table-view-cell">住宿</li>
                                                <li @click="afterSelector4" ref="text4" class="mui-table-view-cell">娱乐</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <!-- 图文列表 -->
                    <div class="relax-detail">
                        <ul>
                            <li v-for="item in list" :key="item.id">
                                <div>{{item.sign}}</div>
                                <img :src="item.img">
                                <p>{{item.title}}</p>
                                <p class="relax-detail-content">{{item.content}}</p>
                            </li>
                        </ul>
                    </div>
                </section>
            <!-- 底部风景展示轮播图 -->
            <section class="bottom-img-show">
                <mt-swipe  :show-indicators="false" :auto="4500">
                    <mt-swipe-item>
                        <div class="text">
                            <h3>稻城红草地</h3>
                        </div>
                        <img src="https://cn.yadingtour.com/templates/rt_denali/custom/images/2019_10/20191022173001.jpg">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <div class="text">
                            <h3>稻城青杨林</h3>
                        </div>
                        <img src="https://cn.yadingtour.com/templates/rt_denali/custom/images/2019_10/20191022173002.jpg">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <div class="text">
                            <h3>稻城白塔</h3>
                        </div>
                        <img src="https://cn.yadingtour.com/templates/rt_denali/custom/images/2019_10/20191022173003.jpg">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <div class="text">
                            <h3>稻城俄初山</h3>
                        </div>
                        <img src="https://cn.yadingtour.com/templates/rt_denali/custom/images/2019_10/20191022173005.jpg">
                    </mt-swipe-item>                
                </mt-swipe>
            </section>
            
            <!-- 底部说明栏 -->
            <section class="bottom-text">
                <p>&copy;2020甘孜州稻城亚丁景区管理局 蜀ICP备17010193号|技术支持[云竹软件&智慧旅游]</p>
            </section>
        <!-- 回到顶部按钮 -->        
        <el-button @click="backTop" class="back-top" icon="el-icon-arrow-up" circle></el-button>                
    </div>
    </div>
</template>

<script>
    
var username
// 下拉框
    window.addEventListener('toggle', function(event) {
        if (event.target.id === 'M_Toggle') {
            var isActive = event.detail.isActive;
            var table = document.querySelector('.mui-table-view');
            var card = document.querySelector('.mui-card');
            if (isActive) {
                card.appendChild(table);
                card.style.display = '';
            } else {
                var content = document.querySelector('.mui-content');
                content.insertBefore(table, card);
                card.style.display = 'none';
            }
        }
    });
    export default {
        name:"ZhiHuiYaDing",
        data() {
            return {
                num: 1,
                list:[],
                selectList:[],
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
            //大图切换 
            changeleft(){
                if(this.num <= 1){
                    this.num = 4;
                }else{
                    this.num--;
                }                
            },
            changeright(){
                if(this.num >= 4){
                    this.num = 1;
                }else{
                    this.num++;
                }                                
            },
            // 去去后台数据文件
            getdata(){
                this.$http.get('http://36.139.132.253:3000/tour').then(res=>{
                    console.log(res.body)
                    this.selectList = res.body
                    this.list = res.body
                }).catch(err => {
                    console.log(err)
                })                
            },
            // 下拉框的筛选功能
            afterSelector1(){
                let text = this.$refs.text1.innerHTML
                console.log(text)
                this.list = this.selectList.filter(item=>item.id>15&&item.id<24)
            },  
             afterSelector2(){
                let text = this.$refs.text2.innerHTML
                console.log(text)
                this.list = this.selectList.filter(item=>item.id>0&&item.id<8)
            },
             afterSelector3(){
                let text = this.$refs.text3.innerHTML
                console.log(text)
                this.list = this.selectList.filter(item=>item.id>7&&item.id<16)
            },
             afterSelector4(){
                let text = this.$refs.text4.innerHTML
                console.log(text)
                this.list = this.selectList.filter(item=>item.id>23&&item.id<32)
            },          
        },
        created() {
            this.getdata()
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
/* 页面主要内容区 */
.main-content{
    margin-left: 160px;
}
    #offCanvasWrapper{
        background-color: #fff;
        margin-top: -30px;
    }
    header{
        background-color: #F1CE8D;
        width: 100%;
        height: 140px;
    }
    .logo{
        position: relative;
        left: 180px;
    }
    /* 轮播图--大图图片 */
    main{
        width: 100%;
        height: 420.79px;
    }
    .large img{
        width: 100%;
        height: 207px;       
    }
    /* 轮播图---大图文字 */
    .content{
        width: 100%;
        height: 207px;
        text-align: center;
        position: absolute;
        background-color: rgba(31,73,87,.4);
    }
    h1{
        padding-top: 50px;        
        color: snow;
    }
    p{
       color: snow;
       margin: 20px 10px 0 20px;
       font-size: 16px;
    }
    /* 小轮播图图标 */
    .slider-icon span{
        position: absolute;
        top: 420px;
        color: snow;
        font-size: 40px;
    }
    .slider-icon span:nth-child(2){
        right: 15px;
    }
    /* 轮播图--小图图片 */    
    .small{
        background-color: #1F4957;
        width: 100%;
        height: 214px;        
        margin-top: -213.5px;
    }
    .small .mint-swipe{
        width: 346px;
        height: 190px;
        margin-left : 60px;
    }
    .small .mint-swipe-item{
        padding-top: 30px ;
    }
    .small .mint-swipe-item>div{
        float: left;
    }
    .small .mint-swipe-item p{
        margin-top: 5px;
    }
    .img-container img{
        width: 147.2px;
        height: 120px;
        margin-left: 25px;       
    }
    .current{
        margin: -10px 0 10px 0;
        border-bottom: 7px solid #FFB120;
    }
    /* 轮播图--底部标题 */
    .traffic-title{
        width: 100%;
        height: 65px;
        background-color: #1F4957;
        text-align: center;
        color: snow;
        font-size: 25px;
        font-weight: 600;
        margin-top: -20px;
        font-family: "Microsoft YaHei", "微软雅黑", "sourcesanspro", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    }
    .traffic-title p{
        padding-top:5px;
        font-size: 25px;
        font-weight:none;
        letter-spacing: 4px;
        color: #999999;
        margin-bottom: 10px;
    }
    /* 图片切换展示 */
    .img-show{
        width: 100%;
        height: 694.5px;
        text-align: center;
        margin-top: 90px;
    }
    .img-show #test img{
        width: 432px;
        height: 576px;
    }
    .img-show #test div{
        float: left;
        font-size: 35px;
        font-weight: 700;
        text-align: center;
        margin: 30px 0 0 140px;
    }
    /* 图片切换动画 */
    /* .hello-enter,.hello-leave-to{
        transform: translateX(100%);
    } */
    /* 过程 */
    /* .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    } */
    /* 进入终点、离开的起点 */
    /* .hello-enter-to,.hello-leave{
        transform: translateX(0px);
    } */

    /* 亚丁圣地文字介绍 */
    .yading-intr{
        background-color: #EEEDF4;
        width: 100%;
        height: 590px;
        margin-top: -35px;
    }
    .detail-title{
        width: 412px;
        height: 83px;
        padding: 24px;
        margin: 10px 10px 30px 10px;
        font-size: 25px;
    }
    .detail-title h3{
        font-size: 25px;
        font-weight: 500;
        margin-top: 20px;
    }
    .detail-content{
        padding: 10px;
        margin: 10px;
        line-height: 30px;
        margin-top: 40px;
    }
    .detail-content p{
        color: black;
        font-size: 24px;
    }
    .detail-content p:nth-child(2){
        columns:130px 2;
        color: #9B9B9B;
    }
    /* 吃喝玩乐 */
    .relax{
        width: 100%;
        /* height: 19987px; */
        background-color: #E6E6E6;
        padding: 19.2px 0;
        margin-top: 30px;
    }
    .relax h2{
        text-align: center;
        color: black;
        margin: 20px 0;
    }
    .search{
        width: 324px;
        height: 55px;
        margin-left: 78px;
    }
    /* 图文列表 */
    .mui-content {
        background-color: #E6E6E6;
    }
    .mui-content ul li ul{
        z-index: 999;
    }
    .relax-detail{
        width: 432px;
        margin: 14px;
    }
    .relax-detail ul li{
        border-bottom:1px solid #9B9B9B ;
    }
    .relax-detail ul li div{
        z-index: 1;
        position: relative;
        top: 58px;
        margin: 0 15.6px;
        background-color: #FFB120;
        color: #EEEDF4;
        height: 40px;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 7px 5px 5px 5px;
    }
    .relax-detail ul li img{
        width: 340px;
    }
    .relax-detail ul li p{
        color: black;
        font-size: 20px;
        margin: 18px 6.6px;
    }
    .relax-detail ul li .relax-detail-content{
        color: #9B9B9B;
        line-height: 28px;
    }
    /* 底部轮播图 */
    .bottom-img-show{
        width: 100%;
        height: 408px;
        margin-top: 30px;
        background-color: #AC9082;
    }
    /* 底部轮播图文字 */
    .bottom-img-show .text{
        color: #fff;        
        position: relative;
        top: 170px;
        left: 170px;
    }
    /* 底部版权说明 */
    .bottom-text{
        width: 100%;
        height: 86.4px;
        background-color: #0F0F0F;
        text-align: center;
    }
    .bottom-text p{
        color: #fff;
        font-size: 18px;
        padding: 19.2px 0;
        margin-top: -15px;
    }
</style>