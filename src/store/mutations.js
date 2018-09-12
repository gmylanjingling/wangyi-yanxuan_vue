import {RECEIVE_HOME,RECEIVE_DETAIL,RECEIVE_NAVLIST} from './mutation-types'
/*更新状态*/
export default {
  [RECEIVE_HOME](state,{result}){
    const {home} = result
     state.home = home
   /* console.log(state.home)*/
  },
  [RECEIVE_DETAIL](state,{result}){
   const {detail} = result
   state.detail = detail
  /*  console.log(state.detail)*/
  },
  [RECEIVE_NAVLIST](state,{nav_data}){
    state.nav_data = nav_data
   /* console.log(state.nav_data)*/
  }
}
