<template>
    <div class="login-wrap">
      <div class="login">
        <div class="login-logo">
          账户支付
        </div>
        <Radio-group v-model="vertical" vertical>
            <Radio label="wxpay">
                <!-- <Icon type="social-apple"></Icon> -->
                <span>微信支付</span>
            </Radio>
            <Radio label="alipay">
                <!-- <Icon type="social-android"></Icon> -->
                <span>支付宝支付</span>
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
      vertical: 'apple'
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

</style>
