<template>
  <div class="homeContainer">
    <div class="home_page">
      <div class="page_head">
        <a class="page_logo">网易严选</a>
        <div class="page_seek">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索商品，共13110款好物</span>
        </div>
      </div>
      <div class="page_nav">
        <ul class="nav_uls" ref="navUl">
          <li :class="{on:index==current}" class=" navBar" @click="addClass(index)" v-for="(nav,index) in home.headCateList" :key="index">{{nav.name}}</li>
        </ul>
      </div>
    </div>
    <div class="bscroll">
      <div class="bscroll_content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="home.headCateList[current].bannerUrl" alt="">
            </div>
          </div>
        </div>
        <div class="page_swiper_con">
          <ul>
            <li v-for="(part,index) in home.policyDescList" :key="index">
              <i class="iconfont icon-duihao"></i>
              <span>{{part.desc}}</span>
            </li>
          </ul>
        </div>
        <hr>
        <div class="page_brand">
          <div class="brand1">
            <a href="javascript:;" class="brand_title">
              <span>品牌制造商直供</span>
              <i class="iconfont icon-xiayige"></i>
            </a>
          </div>
          <div class="brand2">
            <!--制造商-->
            <ul>
              <li>
                <div class="brand2_div">
                  <h4>海外制造商</h4>
                  <div>
                    <span>100</span>
                    <span>元起</span>
                  </div>
                  <i class="iconfont icon-shangxin"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="">
              </li>
              <li>
                <div class="brand2_div">
                  <h4>CK制造商</h4>
                  <div>
                    <span>998</span>
                    <span>元起</span>
                  </div>
                  <i class="iconfont icon-shangxin"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65" alt="">
              </li>
              <li>
                <div class="brand2_div">
                  <h4>新秀丽制造商</h4>
                  <div>
                    <span>888</span>
                    <span>元起</span>
                  </div>
                </div>
                <img src="http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65" alt="">
              </li>
              <li>
                <div class="brand2_div">
                  <h4>Nine West制造商</h4>
                  <div>
                    <span>666</span>
                    <span>元起</span>
                  </div>
                  <i class="iconfont icon-shangxin"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65" alt="">
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <!--新品-->
        <div class="page_commodity">
          <header class="commodity_title">
            <a href="javascript:;">
              <span class="commodity_title_span">新品首发</span>
              <div>
                <span>查看全部</span>
                <i class="iconfont icon-jiantou1"></i>
              </div>
            </a>
          </header>
          <div class="commodity_content1 commodity_content">
            <ul class="commodity_nav" ref="newShop">
              <li v-for="(item,index) in home.newItemList" :key="index">
                <a href="javascript:;">
                  <img :src="item.primaryPicUrl" alt="">
                  <p class="commodity_nav_p1">{{item.name}}</p>
                  <p class="commodity_nav_p2">{{item.simpleDesc}}</p>
                  <span>￥{{item.retailPrice}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="page_commodity">
          <header class="commodity_title on">
            <a href="javascript:;">
              <span class="commodity_title_span">人气推荐·好物精选</span>
              <div>
                <span>查看全部</span>
                <i class="iconfont icon-jiantou1"></i>
              </div>
            </a>
          </header>
          <div class="commodity_content_2 commodity_content">
            <ul class="commodity_nav" ref="popularShop">
              <li v-for="(popular,index) in home.popularItemList" :key="index">
                <a href="javascript:;">
                  <img :src="popular.primaryPicUrl" alt="">
                  <p class="commodity_x">限时购</p>
                  <p class="commodity_nav_p1">{{popular.name}}</p>
                  <p class="commodity_nav_p2">{{popular.simpleDesc}}</p>
                  <span>￥998</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="page_time">
          <!--严选计时-->
          <div class="time_mont">
            <div class="time_mont_div1">严选限时选购</div>
            <div class="time_mont_div2">
              <span class="time_mont_div2_span">01</span>
              <span>：</span>
              <span class="time_mont_div2_span">44</span>
              <span>：</span>
              <span class="time_mont_div2_span">30</span>
            </div>
            <div class="time_mont_div3">
          <span>
            <span>下一场</span>
            <span>18:00</span>
            <span>开始</span>
          </span>
            </div>
          </div>
          <div class="time_img">
            <img src="http://yanxuan.nosdn.127.net/8806c45cc8505f6d03ed0809d6226f65.png?imageView&quality=85&thumbnail=330x330" alt="">
          </div>
        </div>
        <hr>
        <!--福利下方-->
        <div class="page_boon">
          <a href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
          </a>
        </div>
        <hr>
        <div class="page_sift">
          <header class="sift_header">
            <span class="sift_header_title">
              <span>专题精选</span>
              <i class="iconfont icon-jiantou"></i>
            </span>
          </header>
          <!--轮播--better-scroll-->
          <div class="sift_header_nav">
            <ul ref="topTic">
              <li v-for="(item,index) in home.topicList" :key="index">
                <img :src="item.itemPicUrl" alt="">
                <div class="sift_lis_div">
                  <h4>{{item.title}}</h4>
                  <span class="sift_lis_span">
                    <span>{{item.priceInfo}}</span>
                    <span>元起</span>
                  </span>
                </div>
                <span class="sift_span">{{item.subtitle}}</span>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="home">
          <div class="home_title">
            <span>居家好物</span>
          </div>
          <ul class="home_uls">
            <li v-for="(item, index) in home.cateList" :key="index">
              <img :src="item.bannerUrl" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
          </ul>
        </div>
        <hr>
        <div class="home">
          <div class="home_title">
            <span>居家好物</span>
          </div>
          <ul class="home_uls">
            <li>
              <img src="http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2e5c458901c72ee6fce43c046a9cea53.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2ab7b86be448341df0247b4e44fc2e3b.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/9ce754d44e3edf6ece83b2692e5efab6.jpg?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c563eef6eacff0e0a379071dd1d3637a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li class="home_uls_lis9">
              <div class="home_lis_div9">
                <p>更多居家好物</p>
                <i class="iconfont icon-jiantou"></i>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <div class="home">
          <div class="home_title">
            <span>居家好物</span>
          </div>
          <ul class="home_uls">
            <li>
              <img src="http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2e5c458901c72ee6fce43c046a9cea53.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2ab7b86be448341df0247b4e44fc2e3b.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/9ce754d44e3edf6ece83b2692e5efab6.jpg?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c563eef6eacff0e0a379071dd1d3637a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li class="home_uls_lis9">
              <div class="home_lis_div9">
                <p>更多居家好物</p>
                <i class="iconfont icon-jiantou"></i>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <div class="home">
          <div class="home_title">
            <span>居家好物</span>
          </div>
          <ul class="home_uls">
            <li>
              <img src="http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2e5c458901c72ee6fce43c046a9cea53.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2ab7b86be448341df0247b4e44fc2e3b.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/9ce754d44e3edf6ece83b2692e5efab6.jpg?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c563eef6eacff0e0a379071dd1d3637a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li class="home_uls_lis9">
              <div class="home_lis_div9">
                <p>更多居家好物</p>
                <i class="iconfont icon-jiantou"></i>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <div class="home">
          <div class="home_title">
            <span>居家好物</span>
          </div>
          <ul class="home_uls">
            <li>
              <img src="http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2e5c458901c72ee6fce43c046a9cea53.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2ab7b86be448341df0247b4e44fc2e3b.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/9ce754d44e3edf6ece83b2692e5efab6.jpg?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c563eef6eacff0e0a379071dd1d3637a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="home_lis_div1">优质食材，署类膨化多肉配方</div>
              <div class="home_lis_div2">
                <span>满折</span>
              </div>
              <p class="home_lis_p">
                <span>全期猫粮</span>
                <span>20吨</span>
              </p>
              <span class="home_lis_span">
                ￥998
              </span>
            </li>
            <li class="home_uls_lis9">
              <div class="home_lis_div9">
                <p>更多居家好物</p>
                <i class="iconfont icon-jiantou"></i>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <!--底部区域-->
        <div class="page_footer">
          <div class="page_footer_con">
            <div class="page_footer_con_a">
              <a href="javascript:;">
                <span>下载App</span>
              </a>
              <a href="javascript:;">
                <span>电脑版</span>
              </a>
            </div>
            <p class="page_footer_con_p">
              <span>网易公司版权所有 &copy; 1997-2018</span>
              <br>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import Swiper from "swiper"
  import {mapState} from 'vuex'
  import "swiper/dist/css/swiper.min.css"
  export default {
    data(){
      return{
       current:0,
      }
    },
    computed:{
      ...mapState(['home']),
    },
    mounted() {
      this.$nextTick(() => {
          new BScroll(".bscroll", {
          scrollY: true,
          click: true

        }),
          new BScroll(".commodity_content1", {
            scrollX: true,
            click: true
          }),
          new BScroll(".commodity_content_2", {
            scrollX: true,
            click: true
          }),
          new BScroll(".sift_header_nav", {
            scrollX: true,
            click: true
          })
          new Swiper(".swiper-container", {
            loop:true
          })
          this._initScroll()

      })
    },
    methods:{
      //初始化滚动对象
      _initScroll(){
        let topScroll =  new BScroll(".page_nav", {
          scrollX: true,
          click: true
        })
      },
      _initUlWidth(){
        let lis = this.$refs.navUl.children
        const ul = this.$refs.navUl
        let left =0
        const space = 35
        Array.from(lis).forEach(li=>{
          left += li.clientWidth+space

        })
        ul.style.width = left +'px'

      },
      _initUlGood(){
        let lis = this.$refs.newShop.children
        const ul = this.$refs.newShop
        let left =0
        //let lefts=[]
        const space = 20
        Array.from(lis).forEach(li=>{
          left += li.clientWidth+space
        })
        ul.style.width = left +'px'

      },
      _initUlPopular(){
        let lis = this.$refs.popularShop.children
        const ul = this.$refs.popularShop
        let left =0
        //let lefts=[]
        const space = 20
        //伪数组
        Array.from(lis).forEach(li=>{
          left += li.clientWidth+space
        })
        ul.style.width = left +'px'

      },
      _initSelect(){
        let lis = this.$refs.topTic.children
        const ul = this.$refs.topTic
        let left =0
        //let lefts=[]
        const space = 10
        Array.from(lis).forEach(li=>{
          left += li.clientWidth+space
        })
        ul.style.width = left +'px'

      },
      addClass(index){
        this.current=index
      }
    },
   watch:{
      home(){
        this.$nextTick(()=>{
          this._initUlWidth(),
          this._initUlGood(),
          this._initUlPopular(),
          this._initSelect()
        })
     }
   }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .homeContainer
    width 100%
    .home_page
      position fixed
      width 100%
      height 72px
      background: white
      z-index 100
      .page_head
        height 22px
        display flex
        padding 10px
        flex-flow row nowrap
        align-items center
        .page_logo
          font-size 20px
          color black
          font-family "华文楷体"
        .page_seek
          display flex
          height 28px
          width 260px
          flex-flow row nowrap
          align-items center
          justify-content center
          flex-flow 1
          border-radius 5px
          margin-left 10px
          background: #ededed
          span
            color #666
            font-size 14px
            margin-left 5px
      .page_nav
        width 100%
        height 30px
        overflow hidden
        .nav_uls
          height 30px
          overflow hidden
          li
            float left
            height 30px
            font-size 14px
            line-height 30px
            margin-left 35px
            position relative
            &.on
              color red
              &::after
                content: ''
                position absolute
                left: 0
                bottom: 0
                width 150%
                height 2px
                margin-left -7px
                background-color red
    .bscroll
      width 100%
      height 618px
      .bscroll_content
        width 100%
    .swiper-container
      position relative
      width 100%
      height 200px
      padding-top 73px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 200px
          img
            width 100%
            height 100%
    .page_swiper_con
      width 100%
      height 35px
      overflow hidden
      li
        float left
        line-height 35px
        margin-left 10px
        i
          font-size 12px
          color red
          margin-left 10px
        span
          font-size 12px
    hr
      height 10px
      width 100%
      border none
      margin 0
      background #ededed
    .page_brand
      width 100%
      height 314px
      text-align center
      .brand1
        width 100%
        height 50px
      .brand_title
        line-height 50px
        span
          color black
      .brand2
        width 100%
        height 220px
        ul
          position: relative;
          padding 3px
          padding-top 0
          height 230px;
          overflow hidden
          li
            float left
            position: relative;
            margin 3px
            width 178px;
            height 125px;
            background-color: #f4f4f4;
            .brand2_div
              width 100px
              height 50px
              font-size 12px
              margin-top 10px
              margin-left 10px
              text-align left
              h4
                margin 10px 0
                font-size 14px
              i
                font-size 28px
                color orange
                line-height 30px

            img
              width 100%
              height 100%
              margin-top -60px
    .page_commodity
      width 375px
      .commodity_title
        width 375px
        height 160px
        position relative
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
        &.on
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png")
          a
           color #B4A078
          div
            background-color #F4E9CB
        a
          display block
          text-align center
          font-size 18px
          color #8BA0B6
          align-items center
          flex-flow row nowrap
          div
            position: relative;
            margin: 10px auto 0
            width: 150px
            height: 30px
            font-size: 16px
            line-height: 30px
            background: #D8E5F1;
      .commodity_content
        width 375px
        height 220px
        margin-top 20px
        overflow hidden
        .commodity_nav
          height 100%
          overflow hidden
          text-align start
           /* white-space nowrap*/
          li
            width 130px
            height 180px
            margin-left 20px
            display inline-block
            white-space nowrap
            img
              width 100%
              height 120px
              display inline-block
              margin-bottom 16px
              background: #f4f4f4
            .commodity_nav_p1
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin 5px 0
            .commodity_nav_p2
              font-size 12px
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin 5px 0
            .commodity_x
              display inline-block
              font-size 12px
              width 50px
              text-align center
              background: red
              color white
              margin 5px 0 5px 15px
            .commodity_y
              display inline-block
              font-size 12px
              width 50px
              text-align center
              background: orange
              color white
              margin 5px 0
            span
              color red
    .page_time
      width 100%
      height 200px
      padding 20px
      box-sizing border-box
      .time_mont
        width 50%
        height 150px
        .time_mont_div1
          padding-top 30px
          font-size 18px
        .time_mont_div2
          padding 20px 0
          .time_mont_div2_span
            display inline-block
            text-align center
            line-height 30px
            border-radius 5px
            width 30px
            height 30px
            color white
            background: #000
        .time_mont_div3
          font-size 12px
      .time_img
        width 50%
        height 160px
        float right
        margin-top -149px
        img
          width 100%
          height 100%



    .page_boon
      width 100%
      height 150px
      img
        width 100%
        height 150px
    .page_sift
      width 100%
      height 280px
      .sift_header
        width 100%
        height 50px
        background: white
        text-align center
        .sift_header_title
          width 100px
          height 30px
          line-height 50px
      .sift_header_nav
        width 100%
        height 300px
        ul
          width 900px
          li
            width 280px
            height 230px
            float left
            padding-left 10px
            box-sizing border-box
            img
              width 270px
              height 160px
              border-radius 10px
              margin-bottom 10px
            .sift_lis_div
              width 100%
              height 18px
              h4
                font-size 14px
                float left
              .sift_lis_span
                float right
                font-size 14px
                color red
            .sift_span
              font-size 12px
              color #7f7f7f





    .home
      width 100%
      height 1230px
      .home_title
        width 100%
        height 50px
        text-align center
        span
          line-height 50px
      .home_uls
        width 100%
        padding 10px
        padding-top 0
        li
          float left
          height 290px
          width 45%
          margin 0 5px
          img
            width 100%
            height 60%
            background: #f4f4f4
          .home_lis_div1
            width 100%
            height 35px
            line-height 35px
            font-size 12px
            margin-top -2px
            color #9F8A60
            background: #F1ECE2
          .home_lis_div2
            width 45px
            height 20px
            background: orange
            text-align center
            border-radius 2px
            margin 8px 0
            span
              font-size 1px
              color white
          .home_lis_p
            width 100%
            margin-bottom 5px
            span
              font-size 14px
          .home_lis_span
            font-size 14px
            color #b4282d
        .home_uls_lis9
          position relative
          float left
          height 210px
          width 45%
          margin 0 5px
          background: #f4f4f4
          .home_lis_div9
            width 100%
            height 100px
            position absolute
            top: 0
            bottom: 0
            margin auto
            text-align center
            p
              font-size 18px
              color #7e8c8d
            .icon-jiantou
              position absolute
              bottom: 0
              left: 0
              right: 0
              margin auto
              font-size 34px
              color #7e8c8d



    .page_footer
      width 100%
      height 100px
      background: #000
      padding 30px
      .page_footer_con
        position relative
        width 80%
        height 100px
        text-align center
        a
          width 100px
          height 50px
          margin 0 20px
          span
            display inline-block
            width 100px
            height 30px
            line-height 30px
            border 1px solid white
            color white
            font-size 14px
      .page_footer_con_p
        position absolute
        bottom: 0
        left: 0
        right: 0
        margin auto
        text-align center
        span
          color white
          font-size 14px




</style>
