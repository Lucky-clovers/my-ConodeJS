/*
 * @Author: QIYE
 * @Date: 2020-06-02 17:17:37
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-09 14:40:27
 */

import request from '@/utils/request'

// 获取首页帖子列表数据
export const getTopics = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}


// 获取帖子详情数据
export const getTopicById = id => {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}

// 获取用户详情数据
export const getUserByName = loginname =>{
  return request({
    url: `/user/${loginname}`,
    method: 'get',
  })
}

export const getCollections = loginname =>{
  return request({
    url: `/topic_collect/${loginname}`,
    method: 'get',
  })
}

// /accesstoken 验证 accessToken 的正确性
export const getAccesstoken = data =>{
  return request({
    url: '/accesstoken',
    method:'post',
    params: data
  })
}

export const logout = ()=>{
  return request({
    url: '/topic_collect/alsotang',
    method:'get',
  })
}

//收藏主题
export  const  collect = data =>{
  return request({
    url: '/topic_collect/collect',
    method: 'post',
    params: data
  })
}

// 取消主题收藏
export  const de_collect = data =>{
  return request({
    url: '/topic_collect/de_collect',
    method: 'post',
    params: data
  })
}
