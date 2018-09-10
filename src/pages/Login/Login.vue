<template>
  <div class="loginContainer">
    <!--头部-->
    <div class="login_head">
      <div class="recommend_head_box">
        <i class="iconfont icon-shouye"></i>
        <span class="recommend_head_box_span">网易严选</span>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="login_content">
      <div class="logo_img">
        <div class="logo" style="background-image:url(http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png)">
        </div>

      </div>
      <div class="input_content">
      <div class=""></div>
      <input type="text" placeholder="邮箱账号">
      <input type="text" placeholder="密码">
      <input type="text" placeholder="注册密码">
      </div>
      <div class="btn">
        <button class="login_btn"><span class="text">登录</span></button>
      </div>
      <div to="/login">
        <div class="email btn">
          <span class="email login_btn"><span class="text">其他方式登录</span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
        padding 48px 0 24px
        .logo
          background-position center
          background-size 96px 30px
          background-repeat no-repeat
          padding 16px 0
      .input_content
        width 100%
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
