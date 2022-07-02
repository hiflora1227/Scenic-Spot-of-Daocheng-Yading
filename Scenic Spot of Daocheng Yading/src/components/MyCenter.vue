<template>
  <div class="mycenter-container">
    <header class="user-details">
        <div class="avator">
            <i class="el-icon-arrow-left" @click="goBack"></i>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <div class="text">
                <span ref="nickname"></span>
                <el-button type="warning" size="mini" plain round>待实名认证</el-button>
                <p>稻城亚丁俱乐部会员</p>
            </div>
            <div class="log-out">
                <i class="el-icon-switch-button" @click="logout">退出登录</i>
            </div> 
        </div>
        <div class="order-purse">            
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-s-order"></i>  我的订单</span>
                    <!-- 订单展示页 -->
                    <div class="order-show">
                        <!-- 酒店信息 -->
                        <div class="h-info">
                            <h3 ref="title">日松贡布酒店 <el-tag>不可退</el-tag></h3>                            
                            <!-- 订单详情卡 -->
                            <div class="info-card">
                                <div class="info-describ">
                                    <p>常规价（无早）</p>
                                    <p ref="username">这里名字占位</p>
                                    <p ref="number">这里电话占位</p>
                                </div>
                                <div class="info-price">
                                    <h4>共支付：￥<span ref="price">这里是价格</span></h4>
                                    <p ref="datetime">入住时间：这里时间占位</p>
                                    <p>每晚明细 ></p>
                                    <p>预定须知 ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-s-finance"></i>  我的钱包</span>
                    <el-empty description="未绑定银行卡"></el-empty>
                </el-tab-pane>
            </el-tabs>
        </div>  
             
    </header>
    <main>
        <!-- 导航条 -->        
        <div class="mui-content nav">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-s-ticket"></i></span>
                    <div class="mui-media-body">优惠券</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-timer"></i></span>
                    <div class="mui-media-body">我的预约</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-video-camera-solid"></i></span>
                    <div class="mui-media-body">活动报名</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-s-management"></i></span>
                    <div class="mui-media-body">我的收藏</div></a></li>
            </ul> 
		</div>
        <!-- 常用功能 -->
        <div class="function">
            <h3>常用功能</h3>
            <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-user"></i></span>
                    <div class="mui-media-body">我的排号</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-goods"></i></span>
                    <div class="mui-media-body">消费记录</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-coin"></i></span>
                    <div class="mui-media-body">会员权益</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-bell"></i></span>
                    <div class="mui-media-body">会员必知</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-service"></i></span>
                    <div class="mui-media-body">联系客服</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-edit"></i></span>
                    <div class="mui-media-body">我的发布</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-date"></i></span>
                    <div class="mui-media-body">我的签到</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><i class="el-icon-postcard"></i></span>
                    <div class="mui-media-body">常用信息</div></a></li>
            </ul> 
		</div>
        </div>
    </main>
  </div>
</template>

<script>
    var personInfo
    var username
    var datetime = []
    var price 
    export default {
        name:'MyCenter',
        data() {
            return {
                
            }
        },
        methods: {
            // 返回上级菜单
            goBack(){
                this.$router.push('/zhihuiyading')
            },
            // 退出登录事件
            logout() {
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
        },
        // 全局事件总线传输数据
        mounted(){            
            // 获取登录信息
            this.$nextTick(() => {
                // 获取用户信息
                this.$bus.$on('login',(data)=>{
                    console.log('收到数据',data) 
                    username = data
                })
                console.log(this.$refs.nickname.innerText = username)
                // 获取预订人电话姓名信息
                this.$bus.$on('personInfo',(info)=>{
                    console.log('收到个人信息',info) 
                    personInfo = info
                })
                console.log(this.$refs.username.innerText = personInfo.name)
                console.log(this.$refs.number.innerText = personInfo.number)
                // 获取日期信息
                this.$bus.$on('date',(data)=>{
                    console.log('收到数据',data) 
                    datetime = data
                })
                console.log(this.$refs.datetime.innerText = datetime[0]+'——'+datetime[1])
                // 传入金额信息
                this.$bus.$on('total',(data)=>{
                    console.log('收到数据',data) 
                    price = data
                })
                console.log(this.$refs.price.innerText = price)
            });   

	    },
    }
</script>

<style lang="scss" scoped>
.mycenter-container{
    .user-details{
        background: url('https://pic1.zhimg.com/80/v2-d9dd0c1339a2510e3fcab8c1ffc62cc0_1440w.jpg?source=1940ef5c');
        background-size: 100%,500px;
        // width: 100%;
        // height: 200px;
        // 头像名称
        .avator{
            display: flex;
            .el-icon-arrow-left{
                color: #fff;
                font-weight: bold;
                font-size:25px;
                position: relative;
                top: 10px;
                left: 20px;
            }
            .el-avatar{
                width: 80px;
                height: 80px;
                margin: 50px 15px 30px 20px;
            }
            .text{
                margin: 60px 0 30px 20px;
                color: #fff;
                span{
                    padding-right:10px;
                }
                p{
                    margin-top: 10px;
                    color: #fff;
                    font-size: 18px;
                }
            }
            .log-out{
                margin: 20px 0 0 40px;
                color: #fa6352;
                i{
                    color: #f55d4c;
                }
            }           
        }
         // 订单页
        .order-purse{
            .el-tab-pane{                    
                .order-show{
                    border:1px solid #F9BB34;
                    border-radius: 15px;
                    margin: 10px 10px;
                    .h-info{
                        margin:20px 0 0 30px;
                        .info-card{
                            display: flex;
                        .info-price{
                            margin-left: 90px;
                            text-align: right;
                            h4{
                                margin-bottom: 10px;
                                span{
                                    color: #F9BB34;
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
            
        }        
    }
    main{
        .nav{
            li{
                background-color: #fff;
                .el-icon-s-ticket{
                    color:#F56152 ;
                }
                .el-icon-timer{
                    color: #5EDEFE;
                }
                .el-icon-video-camera-solid{
                    color: #C184FB;
                }
                .el-icon-s-management{
                    color: #FCCA63;
                }
            }
        }
        .function{
            background-color: #fff;
            margin: 50px 0 30px 0;
            h3{
                margin: 50px 0 30px 10px;
                padding-top: 30px;
            }
            li{
                background-color: #fff;
                i{
                    color: #F8E181;
                }
            }
        }

    }
}
    
</style>