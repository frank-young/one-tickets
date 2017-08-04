<template>
    <div class="login-wrap">
      <div class="login">
        <div class="login-logo">
          One-tickets注册
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <Form-item prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="phone">
                <Input type="text" v-model="formInline.phone" placeholder="手机号" size="large">
                    <Icon type="android-phone-portrait" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formInline')" long size="large">注册</Button>
            </Form-item>
        </Form>
      </div>
    </div>
</template>
<script>
import V from '@/libs/verify'

export default {
  data () {
    return {
      formInline: {
        user: '',
        phone: '',
        password: ''
      },
      ruleInline: {
        user: V.verify.user,
        phone: V.verify.phone,
        password: V.verify.password
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>

<style lang="less">
.login-wrap {
  width: 100vw;
  height: 100vh;
  padding-top: 150px;
  background-color: #f8f8f8;
  .login {
    width: 250px;
    margin: 0 auto;
    .login-logo {
      padding: 20px;
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
