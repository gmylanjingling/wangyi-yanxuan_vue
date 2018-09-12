<template>
  <div class="person">
    <!--头部-->
    <div class="person_head">
      <div class="recommend_head_box">
        <i class="iconfont icon-shouye"></i>
        <span class="recommend_head_box_span">网易严选</span>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="person_content" v-if="!(this.$route.path==='/person/login')">
      <div class="logo_img">
        <div class="logo" style="background-image:url(http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png)">
        </div>
      </div>
      <div class="btn" @click="phoneLogin(true)">
        <button class="login_btn">
          <i class="iconfont icon-shouji"></i>
          <span class="text">手机号码登录</span></button>
      </div>
      <div class="email btn" @click="phoneLogin(false)">
        <span class="email login_btn">
          <i class="iconfont icon-youxiang1"></i>
          <span class="text">邮箱账号登录</span>
        </span>
      </div>
      <p class="quick_register">手机号快速注册></p>
      <div class="bottom_icon">
        <span class="icon">
          <i class="iconfont icon-weixin"></i> 微信</span><span>|</span>
        <span class="icon">
          <i class="iconfont icon-web-icon-"></i> QQ</span><span>|</span>
        <span class="icon"><i class="iconfont icon-weibo"></i> 微博</span>
      </div>
    </div>
   <router-view :isPhone="isPhone"></router-view>
  </div>

</template>
<script>
  export default {
  data(){
    return {
      isPhone:false
    }
  },
  methods:{
    phoneLogin(type){
      this.isPhone = type
      this.$router.push('/person/login')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .person
    width 100%
    .person_head
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

    .person_content
      position relative
      margin-top 45px
      width 100%
      height 667px
      background #f2f5f4
      .logo_img
        width 100%
        height 102px
        padding 48px 0 24px
        .logo
          background-position center
          background-size 123px 50px
          background-repeat no-repeat
          padding 30px 0
      .btn
        text-align center
        margin-top 20px
        .login_btn
          background #b4282d
          width 340px
          height 46px
          font-size 14px
          color #ffffff
          ounline none
          border-radius 5px
          .iconfont
            font-size 24px
          &.email
            display inline-block
            height 40px
            line-height 40px
            background-color #f2f5f4
            color #b4282d
            border 1px solid #b4282d
            .icon-youxiang1
              font-size 16px

      .quick_register
        text-align center
        margin-top 15px
        color #333
        font-size 16px
      .bottom_icon
        position absolute
        left 104px
        bottom 101px
        font-size 16px
        span
          display inline-block
          margin-left 10px
          color #7f7f7f

</style>
