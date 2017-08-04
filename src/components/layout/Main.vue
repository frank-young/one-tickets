<template>
    <div class="layout">
        <Row type="flex">
            <i-col class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" :accordion="true">
                    <div class="layout-logo-left">One-tickets</div>
                    <Menu-group title="内容管理"></Menu-group>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <Menu-item name="1-1" @click.native="toDetail(1)">选项 1</Menu-item>
                        <Menu-item name="1-2" @click.native="toDetail(2)">选项 2</Menu-item>
                        <Menu-item name="1-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <Menu-item name="2-1">选项 1</Menu-item>
                        <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="3-1">选项 1</Menu-item>
                        <Menu-item name="3-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="4-1">选项 1</Menu-item>
                        <Menu-item name="4-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="5-1">选项 1</Menu-item>
                        <Menu-item name="5-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="6-1">选项 1</Menu-item>
                        <Menu-item name="6-2">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col class="layout-menu-right">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>
                          <slot name="breadcrumb"></slot>
                        </Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <slot></slot>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'layout',
  data () {
    return {

    }
  },
  methods: {
    toDetail (index) {
      var name = 'Dashbord'
      switch (index) {
        case 1:
          name = 'Dashbord'
          break
        case 2:
          name = 'System'
          break
      }
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 70vh;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    position: fixed;
    z-index: 5;
    background: #464c5b;
    width: 220px;
    height: 100vh;
    overflow: auto;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    line-height: 30px;
    background: #5b6270;
    color: #fff;
    border-radius: 3px;
    margin: 15px auto;
    text-indent: 5px;
  }
  .layout-menu-right {
    padding-left: 220px;
    width: 100%;
    min-height: 100vh;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
