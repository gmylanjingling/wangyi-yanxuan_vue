import {RECEIVE_HOME,RECEIVE_DETAIL,RECEIVE_NAVLIST} from './mutation-types'
/*引入异步函数*/
import {reqHome, reqDetail,reqNav} from '../api'
export default {
  async getHome({commit}){
    const result = await reqHome()
    if(result.code===0){
      commit(RECEIVE_HOME,{result})
    }
  },
  async getDetail({commit}){
    const result = await reqDetail()
    if(result.code===0){
      commit(RECEIVE_DETAIL,{result})
    }

  },
  async getNavList({commit},cb){
    const result = await reqNav()
    if(result.code===0){
      const nav_data = result.nav
      commit(RECEIVE_NAVLIST,{nav_data})
      cb&cb()
    }
  }
}
