<template>
    <div class="login-wrap">
      <div class="login pay">
        <div class="login-logo">
          账户支付
        </div>
        <Radio-group v-model="vertical" vertical>
          <Radio label="alipay">
            <img class="icon-pay" src="./img/alipay.jpg" alt="">
            <span>支付宝支付</span>
          </Radio>
          <Radio label="wxpay">
            <img class="icon-pay" src="./img/wxpay.jpg" alt="">
            <span>微信支付</span>
          </Radio>
        </Radio-group>
        <div class="">
          <Button type="primary" @click="payCtrl" long>支付</Button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      vertical: 'alipay'
    }
  },
  created () {
  },
  methods: {
    payCtrl () {
      if (this.vertical === 'wxpay') {
        this.$Message.success('微信支付')
      } else {
        this.$Message.success('支付宝支付')
      }
    }
  }
}
</script>

<style lang="less">
  .pay {
    .ivu-radio-group-vertical .ivu-radio-wrapper {
      height: 30px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .icon-pay {
      display: inline-block;
      width: 30px;
      vertical-align: middle;
    }
  }
</style>
