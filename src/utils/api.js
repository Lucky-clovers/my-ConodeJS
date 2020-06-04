/*
 * @Author: QIYE
 * @Date: 2020-06-02 17:17:37
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-04 14:52:11
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
