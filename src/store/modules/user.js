/*
 * @Author: QIYE
 * @Date: 2020-06-08 17:28:28
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-30 15:59:15
 */
import Cookies from 'js-cookie'

// import {getAccesstoken,logout} from '@/utils/api'

import {startLoading,error} from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken() ,
  signin:false,
  accesstoken:'1d94651b-e73e-4482-afe5-55d30360810a'
}
const mutations = {
  SET_TOKEN: (state, token) => {

    setToken(token)
    state.token = getToken()
  },
  SET_SIGNIN: (state, signin) => {
    state.signin = signin
  },
  SET_ACCESSTOKEN: (state, accesstoken) => {
    state.accesstoken = accesstoken
  }

}

const actions = {
   // user login
   /* getAccesstoken({ commit },userInfo) {
    const { loginname, id,avatar_url } = userInfo

    return new Promise((startLoading, error) => {
      getAccesstoken(data).then(response => {
        startLoading()
        const { data } = response
        commit('SET_TOKEN', data.success)
        setToken(data.success)

        endLoading()

      }).catch(err => {
        endLoading()
        error()
      })
    })
  }, */

  //登录
  getAccesstoken({ commit },accesstoken){

    let data = {accesstoken:accesstoken}
    return new Promise((resolve, reject) => {
      getAccesstoken(data).then(res => {

        setToken(res)
        commit('SET_ACCESSTOKEN', accesstoken)
        commit('SET_TOKEN', res)

        resolve()
       }).catch(err => {
        reject(err)
      })
    })
  },

  //是否弹出登录
   /* setSignin({ commit },signin){
    console.log('执行',signin)
      commit('SET_SIGNIN', signin)
  }, */

  //退出登录
  logout({commit} ){
    return new Promise((resolve,reject) => {
      logout().then(res=>{

        removeToken()
        commit('SET_TOKEN', '')
        resolve()

      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
