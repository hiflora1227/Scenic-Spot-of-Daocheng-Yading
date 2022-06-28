<template>
    <div class="login_container">
    <!-- 登陆框 -->
        <div class="login_box">
        <!-- 默认登陆图标 -->
            <div class="avatar_box">
                <img src="../images/logo.png" alt="" />
            </div>
            <!-- 登录表单 -->
            <el-form class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="loginForm.username" prefix-icon="iconfont icon-yonghu">
                </el-input>
                </el-form-item>

                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password"
                        placeholder="请输入密码"
                        prefix-icon="iconfont icon-mima"
                        type="password">
                    </el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item class="login_button">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="primary">注册</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
  export default {
  name: "LoginComponents",
  data() {
    return {
      // 1、定义登陆表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      // 2、定义登陆表单规则对象
      loginFormRules: {
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
    // 点击重置按钮,重置登陆用户名和密码
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(
        async (valid) => {
            console.log(valid)
        if (!valid) return;
        // 向api服务器发出登陆请求
        const { data: res } = await this.$http.get('static/login.json', this.loginForm)
        console.log(res)
        console.log(res.meta.status)
        // 判断结果状态，是否登陆成功，弹出弹框
        if (res.meta.status !== 200) return this.$message.error('登陆失败！')
        this.$message.success('登陆成功！')
        // 1、将登陆成功之后的token，保存到客户端的sessionStorage中,进行身份验证
        window.sessionStorage.setItem('token', res.data.token)
        // 2、通过编程式导航跳转到后台主页，路由地址为/home
        this.$router.push('/shouye')
      })
    //   将账号密码交给侧滑栏组件
      this.$bus.$emit('login',this.loginForm.username)
    },
  },
};
</script>

<style lang="scss" scoped>
/* login_container容器 */
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

/* 登陆框容器 */
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px; /* 圆角边框 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* x、y轴各50% */
}

/* 图标容器 */
.avatar_box {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%); /* x、y轴各50% */
  background-color: #fff;

  /* 图标图片 */
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

/* 登陆表单 */
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box; /*盒子模型*/
}

/* 登陆按钮 */
.login_button {
  display: flex;
  justify-content: flex-end; /* 从行尾位置开始排列 */
}
</style>