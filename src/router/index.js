import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/Home/Home.vue"
import Select from "../pages/Select/Select.vue"
import Classify from "../pages/Classify/Classify.vue"
import Shop from "../pages/Shop/Shop.vue"
import Person from "../pages/Person/Person.vue"
import Login from "../pages/Login/Login.vue"

Vue.use(Router)

export default new Router({
  // 应用的所有路由
  routes:[
    // 默认跳转首页
    {
      path:"/",
      redirect:"/home"
    },
    // 首页路由
    {
      path:"/home",
      component:Home,
      meta:{
        showFooter:true
      }
    },
    // 推荐（识物）路由
    {
      path:"/select",
      component:Select,
      meta:{
        showFooter:true
      }
    },
    // 分类路由
    {
      path:"/classify",
      component:Classify,
      meta:{
        showFooter:true
      }
    },
    // 购物车路由
    {
      path:"/shop",
      component:Shop,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        showFooter:false
      }
    },
    // 个人路由
    {
      path:"/person",
      component:Person,
      meta:{
        showFooter:true
      },
      children:[

        {
          path:'/person/login',
          component:Login
        }
        ]
    }
  ]
})
