/*
 * @Author: QIYE
 * @Date: 2020-06-02 14:35:12
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-03 16:18:09
 */


import axios from "axios";
import { Message, Loading } from 'element-ui'



/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */

 /**
  * error  错误的提示
  */
const error  = () => {
  Message({
    type: 'error',
    message: '遇到错误，请刷新重试！',
    duration: 2 * 1000
  })
};


let loading

/**
 * @description: 加载中的方法
 */
const startLoading = ()=>{
  loading = Loading.service({
    lock: true,
    text: '拼命加载中……',
    spinner:'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.8)'
  })
}

/**
 * @description: 关闭加载中
 */
const endLoading = () => {
  loading.close()
}

/**
 * 创建axios的请求实例
 */
const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000 // 请求超时时间限制
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 请求发送前的处理
    startLoading()
    return config
  },
  err => {
    // 请求发送错误的处理
    endLoading()
    error()
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
      // 2xx 状态码的情况将触发这个函数的执行，处理响应数据
    endLoading()
    return response.data
  },
  err => {
    // 非 2xx 状态码情况将触发这个函数，处理响应错误
    endLoading()
    error()
    return Promise.reject(err)
  }
)

//导出拦截器
export default service