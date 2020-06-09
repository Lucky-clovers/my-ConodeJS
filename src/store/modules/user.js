/*
 * @Author: QIYE
 * @Date: 2020-06-08 17:28:28
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-09 11:40:50
 */
import Cookies from 'js-cookie'

import {getAccesstoken} from '@/utils/api'
import {startLoading,error} from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: '',

}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
 /*  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  } */
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

  getAccesstoken({ commit },accesstoken){
    let data = {accesstoken:accesstoken}
    getAccesstoken(data).then(res => {
       console.log(res)
       setToken(res.loginname)
       commit('SET_TOKEN', res.loginname)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
