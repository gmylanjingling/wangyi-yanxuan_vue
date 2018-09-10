<template>
  <div class="shopContainer">
    <div class="shop_header">
      <div class="page_head">
        <span></span>
        <span class="middle">购物车</span>
        <span class="right">领券</span>
      </div>
    </div>
    <div class="shop_content">
    <div class="shop_icon">
      <span class="icon_font left">
      <span class="icon"><i class="iconfont icon-xuanze"></i></span>
      <span class="text">30天无忧退货</span>
      </span>
      <span class="icon_font middle">
      <span class="icon"><i class="iconfont icon-xuanze"></i></span>
      <span class="text">48小时快速退款</span>
      </span>
      <span class="icon_font right">
      <span class="icon"><i class="iconfont icon-xuanze"></i></span>
      <span class="text">满88元免运费</span>
      </span>
    </div>
    <div class="shop_cart"></div>
    <div class="add_goods">去添加点什么吧</div>
    <div class="btn">
    <button class="login_btn">登录</button>
    </div>
    </div>
  </div>

</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
  .shopContainer
    width 100%
    background-color #f4f4f4
    .shop_header
      width 100%
      height 45px
      position fixed
      top 0px
      left 0px
      text-align center
      line-height 45px
      font-size 18px
      color #333
      padding 0 15px
      .page_head
        width 100%
        height 100%
        display flex
        justify-content space-around

        .right
          font-size 16px
          color #B4282D
    .shop_content
      width 100%
      height 667px
      margin-top 45px
      .shop_icon
        display flex
        padding-top 10px
        justify-content space-around
        .icon_font
          font-size 12px
          color #666
          .iconfont
            transform scale(0.5)
      .shop_cart
        width 124px
        height 124px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
        background-repeat no-repeat
        background-size 124px 124px
        margin-top 160px
        margin-left 130px
      .add_goods
        text-align center
        color #7f7f7f
        margin-top -3px
      .btn
        text-align center
        margin-top 20px
        .login_btn
          background #b4282d
          width 230px
          height 46px
          font-size 18px
          color #ffffff
          ounline none
          border-radius 5px




</style>
