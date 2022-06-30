<template>
    <div class="register_container">
        <i id="back-icon" class="el-icon-arrow-left" @click="backIcon"></i>
    <!-- 登陆框 -->
    <div class="register_box">
    <!-- 默认登陆图标 -->
        <!-- <div class="avatar_box">
            <img src="../images/logo.png" alt="" />
        </div> -->
        <!-- 登录表单 -->
        <el-form class="register_form" :model="registerForm" :rules="registerFormRules" ref="registerFormRef">
            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input placeholder="请输入用户名" v-model="registerForm.username" prefix-icon="iconfont icon-yonghu">
            </el-input>
            </el-form-item>

            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input v-model="registerForm.password"
                    placeholder="请输入密码"
                    prefix-icon="iconfont icon-mima"
                    type="password">
                </el-input>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item prop="password">
                <el-input v-model="registerForm.password"
                    placeholder="请再次输入密码"
                    prefix-icon="iconfont icon-mima"
                    type="password">
                </el-input>
            </el-form-item>

            <!-- 按钮 -->
            <el-form-item class="register_button">
                <el-button type="primary" @click="register">注册并登录</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
    <!-- <div class="register_container">
        <section>
            <el-form ref="ruleForm" :model="ruleForm"
                :rules="rules" label-width="80px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                    <el-form-item label="邮箱" prop="email" style="margin-buttom:10px;!important">
                <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="ruleForm.pwd" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" type="password" prop="cpwd">
                    <el-input v-model="ruleForm.cpwd"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="register">同意以下协议并注册</el-button>
                    <div class="error">{{error}}</div>
                </el-form-item>
                <el-form-item>
                <a class="f1"
                    href="https://rules-center.meituan.com/rules-detail/4"
                    target="_blank">《用户服务协议》</a>
                </el-form-item>
            </el-form>
        </section>
    </div> -->
</template>

<script>
export default {
  name: "registerComponents",
  data() {
    return {
      // 1、定义登陆表单的数据绑定对象
      registerForm: {
        username: '',
        password: '',
      },
      // 2、定义登陆表单规则对象
      registerFormRules: {
        // 验证用户名是否合法
        username: [
          // trigger: "blur":失去焦点时进行验证
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3-10字符中' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6-15字符中' }
        ],
      },
    }
  },
  methods: {
    // 返回上级
    backIcon(){
        this.$router.back()
    },
    register() {
        
    //   this.$refs.registerFormRef.validate(
    //     async (valid) => {
    //         console.log(valid)
    //     if (!valid) return;
    //     // 向服务器发出登陆请求
    //     const { data: res } = await this.$http.get('static/register.json', this.registerForm)
    //     console.log(res)
    //     console.log(res.meta.status)
    //     // 判断结果状态，是否登陆成功，弹出弹框
    //     if (res.meta.status !== 200) return this.$message.error('登陆失败！')
    //     this.$message.success('登陆成功！')
    //     // 1、将登陆成功之后的token，保存到客户端的sessionStorage中,进行身份验证
    //     window.sessionStorage.setItem('token', res.data.token)
    //     // 2、通过编程式导航跳转到主页
    //     this.$router.push('/shouye')
    //   })
    //   将账号密码交给侧滑栏组件
    //   this.$bus.$emit('register',this.registerForm.username)
    },
    register(){
      this.$router.push('/register')
    }
  },
};
//     export default {
//         name:'RegisterComponents',
//           data() {
//             return {
//             statusMsg: '',
//             error: '',
//             ruleForm: {
//                 name: '',
//                 pwd: '',
//                 code: '',
//                 cpwd: '',
//                 email: '',
//             },
//             rules: {
//                 name: [
//                 {
//                     require: true,//必填
//                     type: 'string',//约束类型
//                     message: '请输入昵称',//提示信息
//                     trigger: 'blur',//触发方式，失去焦点触发
//                 },
//                 ],
//                 email: [
//                 {
//                     require: true,
//                     type: 'email',
//                     message: '请输入邮箱',
//                     trigger: 'blur',
//                 },
//                 ],
//                 pwd: [
//                 {
//                     require: true,
//                     message: '创建密码',
//                     trigger: 'blur',
//                 },
//                 ],
//                 cpwd: [
//                 {
//                     require: true,
//                     message: '确认密码',
//                     trigger: 'blur',
//                 },
//                 {
//                     validator(rule, value, callback) {//验证判断，逻辑判断
//                     if (value === '') {
//                     //如果值为空抛出错误
//                         callback(new Error('请再次输入密码'))
//                     } else if (value !== this.ruleForm.pwd) {
//                     //如果密码不匹配也同样抛出错误
//                         callback(new Error('两次输入的密码不一样'))
//                     } else {
//                     //没有问题，回调执行
//                         callback()
//                     }
//                     },
//                     trigger: 'blur',
//                     },
//                     ],
//                     code: [[]],
//       },
//     }
//   },

//     }
</script>

<style lang="scss" scoped>
/* register_container容器 */
.register_container {
  // background-color: #2b4b6b;
  background: url(../images/register1.jpg);
  background-size: 480px;
  height: 860px;
  #back-icon{
    margin: 20px 0 0 10px;
    color: #eee;
    font-size: 20px;
    font-weight: bold;
  }
}

/* 登陆框容器 */
.register_box {
    width: 450px;
    height: 350px;
    background-color: rgba($color: rgb(236, 235, 235), $alpha: .4);
    border-radius: 10px; /* 圆角边框 */
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%); /* x、y轴各50% */


  /* 图标图片 */
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

/* 登陆表单 */
.register_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box; /*盒子模型*/
}

/* 登陆按钮 */
.register_button {
  display: flex;
  justify-content: flex-end; /* 从行尾位置开始排列 */
}
</style>
<!-- <style lang="scss" scoped>
    .page-register {
  .header {
    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

      .site-logo {
        display: inline-block;
        width: 128px;
        width: 54px;
        height: 36px;
        text-indent: -9999px;
        background-position: -669px -748px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      }

      .register {
        float: right;
      }

      .bold {
        font-style: normal;
      }
    }
  }

  >section {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;

    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }

    .error {
      color: red;
    }
  }
}

</style> -->