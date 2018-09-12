<template>
  <div class="classifyContainer">
    <div class="classify_head">
      <div class="head">
        <span><i class="iconfont icon-search"></i></span>
        <span class="text">搜索商品，共13249款好物</span>
      </div>
    </div>
    <div class="classify_part">
      <div class="list_container">
        <div class="list_wrapper">
          <ul class="shop_list" ref="shopUl">
            <li :class="{on:currentIndex == index}" @click=add(index) class="shop_item" v-for="(list,index) in nav_data.categoryL1List">{{list.name}}</li>
          </ul>
        </div>
      </div>
      <div class="shop_content">
        <div class="shop_wrapper" v-if="init">
        <div class="notice">
          <img :src= "nav_data.categoryL1List[currentIndex].bannerUrl">
        </div>
        <ul class="shop_pic">
          <li class="shop_info" v-for="(item,index) in nav_data.categoryL1List[currentIndex].subCateList">
                <span class="img">
                  <img :src="item.wapBannerUrl"></span>
                <span class="text">{{item.name}}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState,mapGetters} from 'vuex'
  export default{
    data(){
      return{
        currentIndex: 0
      }
    },
    computed:{
      ...mapState(['nav_data']),
      ...mapGetters(['init'])
    },
    methods:{
       add:function(index){
         this.currentIndex = index
       },
      _initShopHeight(){
        let lis = this.$refs.shopUl.children
        const ul = this.$refs.shopUl
        let top =0
        const space = 10
        Array.from(lis).forEach(li=>{
          top += li.clientHeight+space
        })
        ul.style.height = top +'px'
        console.log(ul.style.height)
      },
    },
    mounted(){
      this.$store.dispatch('getNavList',()=>{
        this.$nextTick(()=>{
          new BScroll('.list_wrapper',{
            click:true,
            scrollY:true
          })
          new BScroll(".shop_content",{
            click:true,
            scrollY: true
          })
          this._initShopHeight()
        })
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classifyContainer
    width 100%
    height 667px
    top 45px
    background-color #ffffff
    .classify_head
      width 100%
      height 45px
      position fixed
      z-index 200
      left 0px
      top 0px
      background-color #ffffff
      border-bottom 1px solid #ededed
      .head
        width 95%
        margin 5px auto
        background-color #d9d9d9
        font-size 16px
        color #7e8c8d
        text-align center
        border-radius 5px
        span
          line-height 30px
    .classify_part
      width 100%
      height 667px
      margin-top 45px
      .list_container
        float left
        width 80px
        height 667px
        .list_wrapper
          width 100%
          height 100%
          .shop_list
            width 100%
            height 670px
            text-align center
            line-height 50px
            overflow hidden
            margin-top 10px
            .shop_item
              font-size 16px
              color #333
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              &.on
                position relative
                color red
                &::before
                  content ''
                  display block
                  position absolute
                  width 2px
                  bottom 8px
                  left 0px
                  height 25px
                  background-color red
      .shop_content
        float left
        width 264px
        height 667px
        padding 15px
        .shop_wrapper
          width 100%
          .notice
            width 100%
            height 96px
          img
            width 100%
            height 100%
          .shop_pic
            width 100%
            overflow hidden
            .shop_info
              width 72px
              height 108px
              margin 10px 16px 0 0
              float left
              text-align center
              .img
                img
                  width 100%
                  height 72px
              .text
                font-size 12px
                color #7d7d7d
              &:nth-child(3)
                margin-right -10px






</style>
