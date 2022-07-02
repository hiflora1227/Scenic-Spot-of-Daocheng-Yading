<template>
    <div class="confirm-container">
        <!-- 页头 -->
        <mt-header fixed title="确认订单">
            <mt-button icon="back" slot="left" @click="goBack"></mt-button>
            
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="cards">
            <h2 ref="title">日松贡布酒店</h2>
            <!-- 订单详情卡 -->
            <div class="info-card">
                <div class="info-describ">
                    <p>常规价（无早）</p>
                    <!-- <p ref="datetime">入住时间：这里放入住时间</p> -->
                    <el-tag>不可退</el-tag>
                </div>
                <div class="info-price">
                    <h4>￥479.0/间</h4>
                    <el-input-number @click="add" size="mini" v-model="num"></el-input-number>
                    <p><el-button type="text" @click="openMX">预定须知 ></el-button></p>
                    <p>每晚明细 ></p>
                </div>
            </div>
            <!-- 出行人信息 -->
            <div class="person-info">                
                <h2>出行人信息</h2>
                <span>须填写{{num}}位出行人信息</span>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-position="left" label-width="90px" class="demo-ruleForm">
                    <el-form-item 
                        label="联系方式"
                        prop="number"
                        :rules="[
                        { required: true, message: '手机号不能为空'},
                        { type: 'number', message: '手机号必须为数字值'}
                        ]">
                        <el-input id="number" ref="input" type="number" v-model.number="numberValidateForm.number" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item 
                        label="姓名"
                        prop="name"
                        :rules="[
                        { required: true, message: '姓名不能为空'}
                        ]">
                        <el-input id="name" ref="input" type="name" v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 备注 -->
            <div class="remark">
                <h2>备注</h2>
                <el-input v-model="input" placeholder="选填.."></el-input>
            </div>
        </div>
        <!-- 底部tabbar-购买加购页面 -->
        <footer>
            总计：
            <h3 ref="total">￥{{parseInt(num*479.0)}}</h3>
            <el-button  :plain="true" class="buy" type="primary" round @click="goToBuy">立即支付</el-button>
            
        </footer>
    </div>
</template>

<script>
var datetime = []
    export default {
        name:'ConfirmList',
        data() {
            return {
                items:[],
                input:'',
                num:1,
                numberValidateForm: {
                    number: '15864207863',
                    name:'张三'
                },
                hotelList:'',
            };
        },
        methods: {
            // 支付提示
            open() {
                this.$confirm('正在拉起支付, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '支付成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消支付'
                });          
                });
            },
            // 预定须知
            openMX() {
                this.$alert('1.酒店入住时间:14:00以后，退房时间:中午12:00之前2.早餐:118元/位，儿童身高1.2米以下免费，1.2米-1.4米半价，1.4米以上成人价3.加床200元/单早4.停车场住店客人免费停车5不可携带宠物6.购买产品时，请您准确填写姓名、电话、入住日期、身份证号等必要信息，入住时需提供本人身份证，出行时请务必携带。', '请仔细阅读《预定须知》', {
                confirmButtonText: '我已知晓',
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `已知晓: ${ action }`
                    });
                }
                });
            },
            // 空白提示
            open3() {
                this.$message({
                message: '请填写出行人信息',
                type: 'warning'
                });
            },
            // 计数器
            handleChange(value) {
                console.log(value);
            },
            goBack() {
                this.$router.back()
            },
            // 跳转结算页面
            goToBuy(){
                if (this.numberValidateForm.number == "" || this.numberValidateForm.name == "") {
                    this.open3()
                }else{
                    this.open()
                    this.$bus.$emit('personInfo',this.numberValidateForm)
                    this.$bus.$emit('total',this.$refs.total.innerText)
                    console.log(this.numberValidateForm)
                    setTimeout(()=> {
                        // 跳转个人中心页查看订单
                        this.$router.push({name:'MyCenter'}) 
                    } ,3000)
                }

            },
        },
        mounted() {
            // 获取登录信息
            // this.$nextTick(() => {
            //     // 获取日期
            //     this.$bus.$on('date',(date)=>{
            //         console.log('收到日期',date) 
            //         datetime = date
            //     })
            //     console.log(this.$refs.datetime.innerText = datetime[0]+'——'+datetime[1])
            // });
        },
    }
</script>

<style lang="scss" scoped>
    .confirm-container{

        // 顶部固定栏
        .mint-header{
            background-color: #F9BB34;
        }
        .cards{
            background-color: #fff;
            width: 450px;
            border-radius: 15px;
            margin: 50px 15px;
            h2{
                margin: 0 0 -50px 10px;
                padding-top:20px ;
            }
            .info-card{
                margin:50px 0 0 0;
                display: flex;
                padding: 20px;
                border-bottom: 1px solid rgb(167, 166, 166);
            .info-describ{
                margin-right: 110px;
                p{
                    margin: 10px 0;
                }
            }
            .info-price{
                text-align: right;
                margin-left: 50px;
                h4{
                    color: #F9BB34;
                    margin-top: 5px;
                }
                p{
                    letter-spacing: 1px;
                }
            }
            }
            // 出行人信息
            .person-info{
                margin: 20px 10px;
                h2{
                    display: inline-block;
                }
                span{
                    margin-left: 20px;
                    color: rgb(160, 160, 160);
                }
                // 输入框
                .demo-ruleForm{
                    margin: 10px 0 10px 10px;
                    font-size: 35px;                
                } 
                .el-input{
                    width: 250px;
                    height: 60px;
                }               
            }
            .remark{
                margin-left: 10px;
                h2{
                    margin:-30px 0 20px 10px;
                }
                .el-input{
                    border: none;
                    width: 350px;
                    margin-left: 20px;
                }
            }
        }
        // 底部栏
        footer{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 80px;
            background-color: snow;
            box-shadow: 0px 0px 1px 1px #bfbfbf; 
            padding:20px 0 0 10px ;
            font-size: 25px;
            font-weight: bold;
            h3{
                color: #F9BB34;
                display: inline-block;
            }           
            .buy{
                background-color: #F9BB34;
                border:1px solid #F9BB34;
                color:#fff;
                position: relative;
                right: -150px;
                top: 0px;
            }
        }
    }
    
</style>