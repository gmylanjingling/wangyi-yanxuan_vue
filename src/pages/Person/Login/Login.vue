<template>
  <div class="loginContainer">
    <!--头部-->
    <div class="login_head">
      <div class="recommend_head_box">
        <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        </router-link>
        <span class="recommend_head_box_span">网易严选</span>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!--邮箱登录-->
    <div class="login_content">
      <div class="logo_img">
        <div class="logo" style="background-image:url(http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png)">
        </div>
      </div>
      <div class="input_content">
       <!--邮箱登录-->
      <div class="unCommon" v-if="!isPhone">
      <div class="number">
      <input type="text" placeholder="邮箱账号">
      </div >
       <div class="number">
        <input type="text" placeholder="密码">
       </div>
        <div class="number">
        <input type="text" placeholder="注册密码">
        </div>
      </div>
      <!--手机号登录-->
      <div class="unCommon" v-else>
          <div class="number">
            <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone">
          </div >
          <div class="number">
            <input type="text" placeholder="请输入密码" maxlength="8" v-model="password">
          </div>
          <div class="number cellPhone">
            <input type="text" placeholder="忘记密码？">
            <p class="phone">使用密码验证登录</p>
          </div>
        </div>
      </div>
      <div class="btn">
        <button class="login_btn"><span class="text" @click="login">登录</span></button>
      </div>
      <div>
        <router-link to="/person">
        <div class="email btn">
          <span class="email login_btn"><span class="text">其他方式登录</span></span>
        </div>
        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      isPhone : Boolean
    },
    /*初始化数据*/
    data(){
      return{
        phone:'',
        password:''
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      /*请求登录*/
       login(){
         if(!phone){

         }
       }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
    width 100%
    .login_head
      width 100%
      height 45px
      position fixed
      z-index 200
      left 0px
      top 0px
      background: #fafafa
      .recommend_head_box
        height 100%
        line-height 45px
        text-align center
        .recommend_head_box_span
          font-size 20px
        .icon-shouye
          position absolute
          left: 10px
          font-size 24px
        .icon-icon-test
          position absolute
          right: 60px
          font-size 24px
        .icon-gouwuche
          position absolute
          right 20px
          font-size 24px
    .login_content
      position relative
      margin-top 45px
      width 100%
      height 667px
      .logo_img
        width 100%
        height 102px
        padding 48px 0 12px
        .logo
          background-position center
          background-size 96px 30px
          background-repeat no-repeat
          padding 16px 0
      .input_content
        width 100%
        .number
          width 340px
          height 46px
          margin auto
          border-bottom 1px solid #fafafa
          &:nth-child(3)
            border-bottom none
            &.cellPhone
              display flex
              input
                width 60%
              .phone
                width 40%
                color #7e8c8d
                line-height 46px
          input
            width 100%
            height 100%
            outline none
            padding-left 5px
            font-size 14px
      .btn
        text-align center
        margin-top 20px
        .login_btn
          background #b4282d
          width 340px
          height 46px
          font-size 14px
          color #cb7a7a
          ounline none
          border-radius 5px
          &.email
            display inline-block
            height 40px
            line-height 40px
            background-color #ffffff
            color #b4282d
            border 1px solid #b4282d

</style>
