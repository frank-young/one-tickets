<template>
    <div class="login-wrap">
      <div class="login">
        <div class="login-logo">
          One-tickets设置密码
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <Form-item prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </Form-item>
            <Form-item prop="password_old">
                <Input type="password" v-model="formInline.password_old" placeholder="确认密码" size="large">
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
        password: '',
        password_old: ''
      },
      ruleInline: {
        password: V.verify.password,
        password_old: V.verify.password
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

</style>
