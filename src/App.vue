<template>
  <div id="app">
    <Layout v-if="isLogin">
      <router-view></router-view>
    </Layout>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Layout from '@/components/layout/Main'
import Auth from '@/libs/auth'

export default {
  name: 'app',
  components: {
    Layout
  },
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    this.isLoginCtrl()
    console.log(this.isLogin)
  },
  methods: {
    isLoginCtrl () {
      if (Auth.isLogin()) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  }
}
</script>

<style lang="less">
#app {
  min-height: 100vh;
}

// 登录注册
.login-wrap {
  width: 100vw;
  height: 100vh;
  padding-top: 150px;
  background-color: #f8f8f8;
  .login {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 40px;
    box-shadow: 0 0 15px #e8e8e8;
    .login-logo {
      padding: 20px;
      font-size: 20px;
      text-align: center;
    }
  }
}

</style>
