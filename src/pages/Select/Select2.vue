<template>
  <div class="select">
    <!--头部-->
    <div class="select_head">
      <div class="recommend_head_box">
        <i class="iconfont icon-shouye"></i>
        <span class="recommend_head_box_span">网易严选</span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!--内容区域-->
    <div class="select_content">
      <div class="select_content_wrapper">
        <!--swiper轮播-->
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in detail.banner" :key="index" ref="navUl">

              <img :src="item.picUrl" alt="">

              <div class="recommend_content_nav_lis_div">
                <div class="recommend_content_nav_lis_div_div1">严选选择</div>
                <div class="recommend_content_nav_lis_div_div2">拯救加班族计划</div>
                <div class="recommend_content_nav_lis_div_div3">提升能量值的好物</div>
              </div>
            </li>
          </ul>
        </div>
        <!--轮播-->
        <div class="select_content_essay">
          <ul ref="selectUl">
            <li v-for="(num,index) in detail.column" :key="index" class="hook">
              <img :src="num.picUrl" alt="">
              <div>{{num.title}}</div>
            </li>
          </ul>
        </div>
        <hr>
        <!--为你推荐-->
        <div class="select_content_list" >
          <div class="select_content_title">为你推荐</div>
          <!--zhenOne-->
          <div class="select_content_product" v-if="detail.zhenOne">
            <div class="select_product_pic">
              <img :src="detail.zhenOne.picUrl" style="width:345px;height:200px">
              <span>{{detail.zhenOne.typeName}}</span>
            </div>
            <div class="select_product_text">
              <span>{{detail.zhenOne.title}}</span>
              <span class="price">{{detail.zhenOne.priceInfo}}元起</span>
            </div>
            <span class="info">{{detail.zhenOne.subTitle}}</span>
          </div>
          <!--detail.recommendThree-->
          <div class="select_content_food" v-if="detail.recommendThree">
            <div class="select_food_text">
              <div class="select_inner_text" v-if="detail.recommendThree">
                <img :src="detail.recommendThree.avartar" alt="">
                <span>{{detail.recommendThree.nickname}}</span>
              </div>
              <p class="text_top">
              {{detail.recommendThree.title}}
              </p>
              <p class="text_bottom">
                {{detail.recommendThree.subTitle}}
              </p>
            </div>
            <div class="select_food_pic">
              <img :src="detail.recommendThree.picUrl">
              <p>{{detail.recommendThree.typeName}}</p>
            </div>
          </div>
          <!--recommendTwo-->
          <div class="select_content_food" v-if="detail.recommendTwo">
            <div class="select_food_text">
              <div class="select_inner_text">
                <img :src="detail.recommendTwo.avatar" alt="">
                <span>{{detail.recommendTwo.nickName}}</span>
              </div>
              <p class="text_top">
               {{detail.recommendTwo.title}}
              </p>
              <p class="text_bottom">
              {{detail.recommendTwo.subTitle}}
              </p>
            </div>
            <div class="select_food_pic" style="background-image:url(//yanxuan.nosdn.127.net/68ccc6c33be6b7e82d242993c1a18cf1.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
              <p>{{detail.recommendTwo.typeName}}</p>
            </div>
          </div>
          <!--detail.recommendOne-->
          <div class="select_content_product" v-if="detail.recommendOne">
            <div class="select_product_pic">
              <img :src="detail.recommendOne.picUrl">
              <span>严选推荐</span>
            </div>
            <div class="select_product_text">
              <span>{{detail.recommendOne.title}}</span>
              <span class="price">{{detail.recommendOne.priceInfo}}元起</span>
            </div>
            <span class="info">{{detail.recommendOne.subTitle}}</span>
          </div>
          <div class="select_moment">
            <div class="select_moment_wrapper">
            <div class="select_moment_title">
              十点一刻
            </div>
            <div class="moment-container">
              <ul class="moment-wrapper" ref="momentUl" v-if="detail.tenfifteen">
                <li class=" moment_tops moment_topic" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);">
                  <div class="today_topic" v-for="(item,index) in detail.tenfifteen" :key="index">
                  <p class="topic">--今日选题</p>
                  <p class="content">{{item.title}}</p>
                  <p class="connect">{{item.desc}}</p>
<!--头像-->
                  <div class="join_peoples">
                    <div class="img" v-for="(avatarItem,index) in item.participantAvatar" :key="index">
                      <img :src="avatarItem" alt="">
                    </div>
                    <span class="john_num">{{item.participantNum}}参与送题</span>
                  </div>
                  </div>
                </li>
                <li class=" moment_tops more_topics"  style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)">
                查看全部话题
                  <span><i class="iconfont icon-xiayige"></i></span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <hr>
       <!--严选甄品-->
        <div class="select_content_list strict_select" v-if="detail.zhenThree">
          <div class="select_content_title">严选甄品</div>
          <div class="select_content_product">
            <div class="select_product_pic" style="background-image:url(//yanxuan.nosdn.127.net/4ccd7856862bf06cd368ecfded7806c5.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
              <span>{{detail.zhenThree.typeName}}</span>
            </div>
            <div class="select_product_text">
              <span>{{detail.zhenThree.title}}</span>
              <span class="price">{{detail.zhenThree.priceInfo}}元起</span>
            </div>
            <span class="info">{{detail.zhenThree.subTitle}}</span>
          </div>
          <div class="select_content_food" v-if="detail.zhenTwo">
            <div class="select_food_text">
              <div class="select_inner_text">
                <img :src= "detail.zhenTwo.avatar" alt="">
                <span>{{detail.zhenTwo.nickname}}</span>
              </div>
              <p class="text_top">
               {{detail.zhenTwo.title}}
              </p>
              <p class="text_bottom">
              {{detail.zhenTwo.subTitle}}
              </p>
            </div>
            <div class="select_food_pic">
              <img :src="detail.zhenTwo.picUrl" alt="">
              <p>{{detail.zhenTwo.typeName}}</p>
            </div>
          </div>
          <div class="select_content_food" v-if="detail.zhenTwo">
            <div class="select_food_text">
              <div class="select_inner_text">
                <img :src= "detail.zhenTwo.avatar" alt="">
                <span>{{detail.zhenTwo.nickname}}</span>
              </div>
              <p class="text_top">
                {{detail.zhenTwo.title}}
              </p>
              <p class="text_bottom">
                {{detail.zhenTwo.subTitle}}
              </p>
            </div>
            <div class="select_food_pic">
              <img :src="detail.zhenTwo.picUrl" alt="">
              <p>{{detail.zhenTwo.typeName}}</p>
            </div>
          </div>
          <div class="select_content_product">
            <hr>
            <div class="select_look" v-if="detail.yxLook">
              <div class="select_content_title">严选LOOK</div>
              <img :src="detail.yxLook.picUrl" class="mediaImg">
              <div class="topic_info">
              </div>
            </div>
          </div>
          <div class="select_moment" v-if="detail.yxLook">
            <p class="user">
              <img :src="detail.yxLook.avatar"   class="user_img">昵称</p>
             <p class="info">{{detail.yxLook.content}}</p>
          </div>
        </div>
        <!--共15 张 <!--更多精彩-->

        <div class="select_content_list find_more" v-if="detail.findMore">
          <div class="select_content_title more_wonderful">更多精彩</div>
          <div class="select_findMore" v-for="(find,index) in detail.findMore" :key="index">
          <div class="select_content_product find_product">
            <div class="select_product_pic find_pic">
              <img :src="find.itemPicUrl" class="more_img">
              <span>{{find.typeName}}</span>
            </div>
            <div class="select_product_text notice">
              {{find.title}}
            </div>
          </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import Swiper from "swiper"
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['detail']) ,

    },
    mounted(){
      this.$store.dispatch('getDetail',()=>{
        this.$nextTick(()=>{
          new BScroll(".select_content",{
            click:true,
          })
          new BScroll(".moment-container",{
            click:true,
            scrollX: true
          })
          new BScroll(".select_content_essay",{
            click:true,
            scrollX: true
          })
        })


      })


      new Swiper(".swiper-container",{
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 15,
        observer:true
      })
    },
    watch:{
      detail(){
        this.$nextTick(()=>{
          this._initUlWidth()
          this._initMomentWidth()

        })
      }
    },
    methods:{
      _initUlWidth(){
        let lis = this.$refs.selectUl.children
        const ul = this.$refs.selectUl
        let left =0
        const space = 10
        Array.from(lis).forEach(li=>{
          left += li.clientWidth+space
        })
        ul.style.width = left +'px'

      },
      _initMomentWidth(){
      let lis = this.$refs.momentUl.children
      const ul = this.$refs.momentUl
      let left =0
      //let lefts=[]
      const space = 10
      Array.from(lis).forEach(li=>{
        left += li.clientWidth+space
      })
      ul.style.width = left +'px'
    }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .select
    width 100%
    hr
      height 10px
      width 100%
      border none
      margin 0
      background #ededed
    .select_head
      position fixed
      height 45px
      width 100%
      z-index 100
      background: #fafafa
      .recommend_head_box
        height 100%
        padding 0 10px
        line-height 45px
        text-align center
        .recommend_head_box_span
          font-size 20px
        .icon-shouye
          position absolute
          left: 10px
          font-size 24px
        .icon-sousuo
          position absolute
          right: 60px
          font-size 24px
        .icon-gouwuche
          position absolute
          right 20px
          font-size 24px
    .select_content
      width 100%
      height 618px
      .select_content_wrapper
        width 100%
        .swiper-container
          padding-top 50px
          height 200px
          width 335px
          .swiper-wrapper
            height 200px
            li
              position relative
              height 200px
              float left
              img
                border-radius 10px
                width 100%
                height 100%
              .recommend_content_nav_lis_div
                position absolute
                left: 0
                top: 0
                right: 0
                bottom: 0
                margin auto
                width 230px
                height 100px
                border-radius 10px
                background-color rgba(255,255,255,.9)
                text-align center
                padding 10px
                box-sizing border-box
                .recommend_content_nav_lis_div_div1
                  position relative
                  font-size 12px
                  margin 10px
                  color #999
                  &:after
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right 48px
                    margin: auto;
                    width: 10px;
                    height: 1px;
                    background-color: #999;
                  &:before
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left 48px
                    margin: auto;
                    width: 10px;
                    height: 1px;
                    background-color: #999;

                .recommend_content_nav_lis_div_div2
                  font-size 16px
                  font-weight bold
                  margin-bottom 10px
                .recommend_content_nav_lis_div_div3
                  font-size 12px
        .select_content_essay
          width 100%
          height 130px
          padding 10px
          ul
            width 900px
            overflow hidden
            li
              float left
              width 90px
              height 90px
              padding 0
              margin-left 10px
              text-align center
              img
                width 100%
                height 100%
                margin-bottom 10px
              div
                font-size 12px



        .select_content_list
          width 100%
          box-sizing border-box
          padding 0 15px
          &.find_more
            background-color #ededed
          .select_content_title
            width 100%
            height 50px
            text-align center
            line-height 50px
            &.more_wonderful
              background-color #ededed
          .mediaImg
              width 100%
              height 375px
          .select_content_product
            width 100%
            border-radius 5px
            border 0.5px solid #d9d9d9
            overflow hidden
            color #333
            &.find_product
              width 100%
              background-color #ffffff
            .select_product_pic
              width 100%
              height 200px
              position relative
              &.find_pic
                width 100%
                height 100%
                text-align center
                margin-top 10px
              .more_img
                width 320px
                height 180px
              span
                top 10px
                left 10px
                z-index 100
                position absolute
                display inline-block
                background-color #ffffff
                border 1px solid #ffffff
                line-height 16px
                font-size 12px
                padding 0 10px
                color #333
                border-radius 10px
            .select_product_text
              width 100%
              height 40px
              line-height 1.2
              font-size 18px
              box-sizing border-box
              padding 10px 10px
              .price
                float right
              &.notice
                font-size 14px
            .info
              padding-left 10px
              font-size 14px
              color #9f9f9f


          .select_content_food
            border 0.1px solid #d9d9d9
            padding-bottom 15px
            height 150px
            margin-top 20px
            .select_food_text
              float left
              width 50%
              .select_inner_text
                width 100%
                height 20px
                padding 20px 0
                img
                  width 23px
                  height 23px
                  border-radius 50%
                  vertical-align middle
                .name
                  font-size 12px
                  color #7f7f7f
              .text_top
                color #333
                line-height 20px
                margin-bottom 5px
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
              .text_bottom
                font-size 12px
                color #7f7f7f
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical
                text-overflow ellipsis
                overflow hidden

                img
                  float left
                  width 20px
                  height 20px
                  border-radius 20px
                  margin 0 10px
                span
                  font-size 12px
              .select_food_text
                font-size 16px
                margin-left 10px
                line-height 75px
          .select_food_pic
            float right
            width 40%
            height 100%
            position relative
            img
              width 100%
              height 100%
            p
              top 5px
              left 5px
              z-index 100
              position absolute
              background-color #ffffff
              border 1px solid #ffffff
              line-height 16px
              font-size 12px
              padding 0 10px
              color #333
              border-radius 10px


          .select_moment
            width 100%
            .select_moment_title
              text-align center
              line-height 60px
              height 60px
            .user
              font-size 12px
              color #7e8c8d
            .user_img
              vertical-align middle
              width 23px
              height 23px
              border-radius 50%
            .info
              font-size 14px
              color #333
              line-height 20px
              margin 5px 0 10px 0
            .moment-container
              width 100%
              height 265px
              .moment-wrapper
                width 1000px
                height 100%
                white-space nowrap
                .moment_tops
                  margin-left 15px
                  display inline-block
                  width 285px
                  height 205px
                  background-size 100% 100%
                  background-repeat no-repeat
                  overflow hidden
                  &:first-child
                    margin-left 0
                    .today_topic
                      padding 15px
                      width 100%
                      height 100%
                      text-align center
                      .topic
                        font-size 14px
                        color #7d7d7d
                      .content
                        font-size 20px
                        line-height 40px
                      .connect
                        font-size 16px
                        color #7e8c8d
                        white-space nowrap
                        overflow hidden
                        text-overflow hidden
                      .join_peoples
                        margin-top 40px
                        font-size 20px
                        color #7e8c8d
                        margin-left 5px
                        overflow hidden
                        .img
                          float left
                          border-radius 50%
                          margin-right -6px
                          background #007aff
                          width 24px
                          height 24px
                          img
                            width 100%
                            height 100%
                            border-radius 50%
                            display block
                        .john_num
                          font-size 12px
                          line-height 20px
                  &:nth-child(2)
                    font-size 18px
                    color #7e8c8d
                    text-align center
                    line-height 205px


</style>
