/*
 * @Author: QIYE
 * @Date: 2020-06-08 17:48:06
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-08 17:48:45
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}


export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
