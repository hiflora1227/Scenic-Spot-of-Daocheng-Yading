<template>
    <div class="chuxin-container">
        <span @click="getNavShow" id="icon" class="mui-icon mui-icon-bars"></span>
		<div class="canvas" v-show="show">	
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
					<router-link to="/heart">不忘初心</router-link>
				</li>
			</ul>
		</div>
        <div ref="mainContent">
        <!-- 顶部图片栏 -->
        <header>
            <img src="https://cn.yadingtour.com/templates/rt_supra/custom/images/2019_11/bwcxzt01.jpg" alt="">
        </header>
        <!-- 习近平主题教育图文栏 -->
        <main class="x-education">
            <h2>习近平指导开展主题教育</h2>
            <ul>
                <li v-for="item in eList.slice(0,3)" :key="item.id">
                    <img :src="item.img">
                    <h4>{{item.title}}</h4>
                    <a target="_blank" :href="item.link">阅读学习</a>
                </li>
            </ul>
        </main>
        <!-- 稻城亚丁主题教育图文栏 -->
        <main class="d-education">
            <h5>稻城亚丁"不忘初心 牢记使命"主题教育</h5>
            <ul>
                <li v-for="item in eList.slice(4)" :key="item.id">
                    <img :src="item.img">
                    <h4>{{item.title}}</h4>
                    <a target="_blank" :href="item.link">阅读学习</a>
                </li>
            </ul>
        </main>
        <!-- 底部说明栏 -->
        <footer class="bottomInfo">
            <p>&copy;2020甘孜州稻城亚丁景区管理局 蜀ICP备17010193号|技术支持[云竹软件&智慧旅游]</p>
            <p>不良与违法信息举报电话：0836-6966021</p>
            <a target="_blank" href="https://www.12377.cn/"><img src="https://cn.yadingtour.com/images/2019_10/Report1.png">中国互联网举报中心</a>&nbsp;&nbsp;
            <a target="_blank" href="http://www.scjb.gov.cn/"><img src="https://cn.yadingtour.com/images/2019_10/Report2.png">四川省互联网举报中心</a>
        </footer>
    </div>
    </div>
</template>

<script>
    export default {
        name:'BuWangChuXin',
        data() {
            return {
                eList:[],
                show:false
            }
        },
        methods: {
            // 侧滑栏出现、隐藏
            getNavShow(){
				this.show = !this.show                  
                if (this.show == true) {
                    this.$refs.mainContent.classList.add('main-content')
                } else{
                    this.$refs.mainContent.classList.remove('main-content')
                } 
			},
            getInfo(){
                this.$http.get('http://36.139.132.253:3000/buwangchuxin').then(res=>{
                    this.eList = res.data
                    console.log(res.data)
                })
            }
        },
        created() {
            this.getInfo()
        },
    }
</script>

<style lang="scss" scoped>

    .chuxin-container{
        background-color: #fff;
        /* 侧边栏 */
        #icon{
            position: sticky;
            color:black;
            font-size: 20px;
            font-weight: bold;
            top: 60px;
            left: 40px;
        }
        .canvas{
            width: 160px;
            height: 1854px;
            float: left;
            background-color: #2276E3;
            overflow: auto;
            ul{
                margin-top: 100px;
                li{
                    font-size: 20px;
                    font-weight: bold;
                    margin: 20px -34px;
                    a{
                        color: #fff;
                    }
                }
            }
        }
        /* 页面主要内容区 */
        .main-content{
            margin-left: 160px;  }   
        // 顶部图片栏
            header{
                width: 100%;
                height: 250px;
                padding: 29.6px 34px;
                border-bottom: 1px solid #BFBFBF;
                img{
                    width: 412px;
                    height: 202px;
                    // margin-left: auto;
                }
            }
            // 习近平主题教育部分
            .x-education{
                padding: 9.6px 0;
                text-align: center;
                ul li{
                    width: 100%;
                    height: 470.4px;
                    margin:10px;
                    img{
                        width: 300px;
                        height: 300px;
                        margin:20px 0 10px -50px;
                        border-radius: 8px;
                    }
                    h4{
                        text-align: center;
                        font-weight:500 ;
                        font-size: 28px;
                        line-height: 36px;
                        margin: 10px 0  10px -50px ;
                    }
                    a{
                        display: inline-block;
                        color: #fff;
                        border-radius: 5px;
                        padding: 10px 20px;
                        margin: 20px 0 20px -45px;
                        font-size: 20px;
                        font-weight: bold;
                        background-color:#2276E3 ;
                    }
                }
            }
            // 稻城亚丁主题教育
            .d-education{
                text-align: center;
                margin-top: 40px;
                background: linear-gradient(to right, #F49C24 0%, #EA2316 100%);
                h5{
                    color: #fff;
                    font-size: 20px;
                    padding: 20px 0;
                    font-weight: bold;
                }
                img{
                    width: 470px;
                    height: 313px;
                    margin: 10px 0 20px -40px;
                    border-radius:8px ;
                }
                h4{
                    text-align: center;
                    font-weight:500 ;
                    font-size: 28px;
                    line-height: 36px;
                    color: #fff;
                    margin: 10px 0  10px -50px ;
                    }
                a{
                    display: inline-block;
                    color: #fff;
                    border-radius: 5px;
                    padding: 10px 20px;
                    margin: 20px 0 20px -45px;
                    font-size: 20px;
                    font-weight: bold;
                    background-color:#2276E3 ;
                }
            }
            // 底部说明栏
            .bottomInfo{
                background-color: black;
                text-align: center;
                padding: 10px;
                margin-top: -18px;
                p{
                    font-size: 16px;
                    color: #BFBFBF;
                }
            }
        }
</style>