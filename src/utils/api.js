
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
export const getTopicById = data => {
  return request({
    url:`/topics/${id}`,
    method:'get',
  })
}

// 获取用户详情数据
export const getUserByName = data =>{
  return request({
    url: `/suer/${loginname}`,
    method: 'get',
  })
}