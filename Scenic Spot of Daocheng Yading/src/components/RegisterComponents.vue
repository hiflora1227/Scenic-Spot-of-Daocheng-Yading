<template>
    <div class="login_container">
  <!-- 登陆框 -->
    <div class="login_box">
    <!-- 默认登陆图标 -->
        <!-- <div class="avatar_box">
            <img src="../images/logo.png" alt="" />
        </div> -->
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
        name:'RegisterComponents',
        data() {
            return {
                
            }
        },
    }
</script>

<style>

</style>