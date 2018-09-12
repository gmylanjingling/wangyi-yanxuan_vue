/*n个接口函数
根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<b*/
/*
与后台交互模块
 */

import '../mock/mockServer.js'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
import ajax from './ajax'
export const reqData = () => ajax('/data')
//获取banner数组
export const reqBanner = () => ajax('/banner')
//获取home对象
export const reqHome = () => ajax('/home')
//获取home对象
export const reqDetail = () => ajax('/detail')
//获取home对象
export const reqNav = () => ajax('/nav')


