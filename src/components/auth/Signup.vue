<template>
    <div class="sign-wrap">
      <div class="sign">
        <div class="login-logo">
          One-tickets注册
        </div>
        <Form ref="formValidate" :label-width="80" :model="formValidate" :rules="ruleValidate">
            <Form-item label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </Form-item>
            <Form-item label="店铺名称">
                <Input v-model="formValidate.store" placeholder="请输入店铺名称"></Input>
            </Form-item>
            <Form-item label="手机号">
                <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
            </Form-item>
            <Form-item label="验证码">
              <Row>
                <Col span="13">
                  <Input v-model="formValidate.input" placeholder="请输入验证码"></Input>
                </Col>
                <Col span="10" offset="1">
                  <Button type="primary" long>发送验证码</Button>
                </Col>
              </Row>
            </Form-item>
            <Form-item label="注册账户">
                <Select v-model="formValidate.select" placeholder="请选择">
                    <Option value="BASE" label="基础版">
                      <span>基础版</span>
                      <span style="float:right;color:#f44">999/年</span>
                    </Option>
                    <Option value="ADVANCED" label="高级版">
                      <span>高级版</span>
                      <span style="float:right;color:#f44">2999/年</span>
                    </Option>
                    <Option value="FLAGSHIP" label="旗舰版">
                      <span>旗舰版</span>
                      <span style="float:right;color:#f44">4999/年</span>
                    </Option>
                </Select>
            </Form-item>
            <!-- <Form-item label="多选框">
                <Checkbox-group v-model="formValidate.checkbox">
                    <Checkbox label="吃饭"></Checkbox>
                    <Checkbox label="睡觉"></Checkbox>
                    <Checkbox label="跑步"></Checkbox>
                    <Checkbox label="看电影"></Checkbox>
                </Checkbox-group>
            </Form-item> -->
            <Form-item label="开关">
                <i-switch v-model="formValidate.isSwitch" size="large">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </i-switch>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formInline')">提交</Button>
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
      formValidate: {
        name: '',
        store: '',
        phone: '',
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        isSwitch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      },
      ruleValidate: {
        name: V.verify.name,
        phone: V.verify.phone,
        store: V.verify.store
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
          this.$router.push({name: ''})
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>

<style lang="less">
.sign-wrap {
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  background-color: #f8f8f8;
  .sign {
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 60px 20px 40px;
    box-shadow: 0 0 15px #e8e8e8;
    .login-logo {
      padding: 20px;
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
