<template>
  <footer class="footer_nav" v-show="$route.meta.showFooter">
    <span class="nav_item" :class="{on:'/home' === $route.path}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="nav_item" :class="{on:'/select' === $route.path}" @click="goto('/select')">
      <span class="item_icon">
        <i class="iconfont icon-kuangxuan kuanfgxuan"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="nav_item" :class="{on:'/classify' === $route.path}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="nav_item" :class="{on:'/shop' === $route.path}" @click="goto('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="nav_item" :class="{on:'/person' === $route.path}" @click="goto('/person')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>
<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"

  .footer_nav
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    width 100%
    height 50px
    display flex
    z-index 100
    background: #fafafa
    .nav_item
      display flex
      flex 1
      margin 5px
      color #999999
      text-align center
      flex-direction column
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 20px
          &.kuanfgxuan
            font-size 17px
</style>
