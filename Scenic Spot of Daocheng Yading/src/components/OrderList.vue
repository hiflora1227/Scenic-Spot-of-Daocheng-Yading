<template>
    <div class="order-container">
        <i class="el-icon-arrow-left back" @click="back"></i>
        <!-- 顶部图片展示栏 -->
        <header class="order-img">
            <img :src="orderList.img">
        </header>
        <main>
            <!-- 信息地址栏 -->
            <section class="order-info">
                <h2 ref="hotelname">{{orderList.title}}</h2>
                <div class="hotel-tag">
                    <el-tag type="success">{{orderList.sign}}</el-tag>
                    <el-tag>有窗</el-tag>
                    <el-tag type="success">淋雨、浴缸</el-tag>
                </div>
                <h5><i class="el-icon-position"></i>{{orderList.address}}</h5>
            </section>
            <!-- 入住时间 -->
            <section class="time-picker">                
                <el-date-picker
                    v-model="value2"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="——"
                    start-placeholder="入住日期"
                    end-placeholder="离店日期"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </section>
            <div class="blank"></div> 
            <!-- 酒店详细信息介绍 -->
            <section class="hotel-content">
                <div class="hotel-info">
                    <h3>豪华海景双床房</h3>
                    <!-- 提示信息 -->
                    <p>仅支持预定1天后的客房</p>
                </div>
                <div class="hotel-price">
                    <h4>￥479.0/晚</h4>
                    <el-button type="danger" round @click="goToBuy">火热预定中</el-button>
                </div>
            </section> 
            <div class="blank blank-bottom"></div> 
            <section class="recommend">
                <h2>相关推荐</h2>                
                <ul>
                    <li v-for="items in list.slice(23,26)" :key="items.id">
                        <div class="re-img">
                            <img :src="items.img" >
                        </div>
                        <div class="re-content">
                            <h3>【{{items.sign}}】{{items.title}}</h3>
                            <!-- 价格 -->
                            <div>
                                <span>3911人推荐</span>
                                <span>218人收藏</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>          
        </main>     
        <!-- 底部tabbar-购买加购页面 -->
        <footer>
            <!-- <i class="el-icon-phone-outline phone"></i> -->
            <i class="el-icon-phone-outline" @click="openP"></i>
            <i class="el-icon-shopping-cart-2"></i>
            <el-button class="chart" round>加入购物车</el-button>
            <el-button class="buy" type="primary" round @click="goToBuy">立即抢购</el-button>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'OrderList',
        components:{
            // ActionSheet
        },
        data() {
            return {
                orderList:[],
                selectList:[],
                list:[],
                pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
                },
                value1: '',
                value2: '',
                date:[]
            }
        },
        methods: {
            // 返回
            back(){
                this.$router.back()
            },
            getdata(){
                this.$http.get('http://36.139.132.253:3000/tour').then(res=>{
                    // console.log(res.body)
                    this.selectList = res.body
                    this.list = res.body
                }).catch(err => {
                    console.log(err)
                })                
            },
             // 空白提示
            open3() {
                this.$message({
                message: '请选择入住日期',
                type: 'warning'
                });
            },
            // 酒店预定
            goToBuy(){
                if (this.value2 == '') {
                    this.open3()
                }else{
                    this.$router.push({name:'ConfirmList'})
                    // 获取当前日期传值
                    var date = new Date(this.value2[0])
                    var y = date.getFullYear()
                    var m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
                    var d = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
                    this.date[0] = y+'-'+m+'-'+d
                    date = new Date(this.value2[1])
                    var y = date.getFullYear()
                    var m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
                    var d = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
                    this.date[1] = y+'-'+m+'-'+d
                    this.$bus.$emit('date',this.date)
                    console.log("这是value2",this.date)
                }                
            },
            // 电话提示框
            openP() {
                this.$alert('(0836)2864548', '预订电话', {
                    confirmButtonText: '确定',
                });
            }
        },
        created() {
            this.orderList = this.$route.params
            console.log('@@@@@',this.orderList)
            this.getdata()
        },
    }
</script>

<style lang="scss" scoped>
    .order-container{
        background-color: #fff;
        height: 1550px;
        margin-top: -30px;
        // 返回
        .back{
            position:relative;
            top: 40px;
            left: 10px;
            color: #fff;
            font-size: 30px;
            font-weight: bold;
        }
        // 顶部图片
        .order-img{
            img{
                width: 480px;
                height: 330px;
            }
        }
        // 预订信息
        main{
            border-radius: 25px;
            margin-left: 20px;
            .order-info{
                padding-top: 20px;
                // 标签
                .hotel-tag{
                    margin: 20px 10px 20px 0;
                }
                h5{
                    letter-spacing: 1px;
                    font-size: 20px;
                    padding: 15px 8px;
                    margin-left: -20px;
                    background-color: #F2F2FC;
                    i{
                        color:#4f4fad ;
                        margin-right: 20px;
                    }
                }  
            }
            // 时间选择器
            .time-picker{
                margin: 30px 0 30px 20px;
                .date-picker{
                    height: 60px;
                    box-shadow: 1px 1px 1px 1px rgba(187, 187, 187,.5);
                }
            }
            // 酒店详细信息介绍
            .hotel-content{
                margin: 20px 0 20px ;
                .hotel-info{
                    float: left;
                    p{
                        padding: 10px 0;
                        color: rgb(255, 50, 50);
                    }
                }
                .hotel-price{
                    float: right;
                    margin-right: 35px;
                    h4{
                        color:#F9BB34;
                        font-size: 23px;
                        padding: 7px 0;
                    }
                }
            } 
            .blank{
                height: 50px;
                width: 480px;
                background-color:#F4F4F4 ;
                margin-left: -20px;
            }  
            .blank-bottom{
                margin-top: 130px;
            }
            // 推荐
            .recommend{
                margin: 20px 0 0 -10px;
                padding: 50px 0 0 -20px;
                h2{
                    margin-bottom: 10px;
                }
                li{
                    border-bottom: 1px solid rgb(165, 164, 164);
                    margin: 10px 0 20px -15px;
                    padding: 0 0 20px 0;
                    .re-img{
                        width: 100px;
                        img{
                            width: 150px;
                            height: 150px;
                            border-radius: 10px;
                        }
                    }
                    .re-content{
                        float: right;
                        margin: -150px 60px 0 -50px;
                        text-align: left;
                        span{
                            display: inline-block;
                            margin: 80px 0 0 20px;
                            color: #F9BB34;
                        }
                    }
            }
            }      
        
        }  
        footer{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 80px;
            background-color: snow;
            box-shadow: 0px 0px 1px 1px #bfbfbf;
            // .phone{
            //     margin-top:0;
            // }
            i{
                color: #F9BB34;
                font-size: 40px;
                margin: 15px 20px 0 20px;
            }
            .chart{
                margin: 15px 10px 0 30px;
                border:1px solid #F9BB34;
                color:#F9BB34;
            }
            .buy{
                background-color: #F9BB34;
                border:1px solid #F9BB34;
                color:#fff;
                margin: 15px 20px 0 20px;
            }
        }
    }
</style>