<!--
 * @Author: QIYE
 * @Date: 2020-06-03 17:25:21
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-03 17:25:21
-->
<template>
  <div class="panel">
    <router-link class="user" :to="{path: '/user/' + user.loginname}">
      <img :src="user.avatar_url" alt="用户头像" />
      <span>{{user.loginname}}</span>
    </router-link>
  </div>
</template>
<script>
/**
 * 话题页面右侧上面的个人信息展示页面
 */
import { getUserByName } from '@/utils/api'
import eventProxy from "@/utils/eventProxy";

export default {
  name: 'ProfilePanel',
  /**
   * 通过在这里定义变量，可以让父组件通过这些变量向此组件传递数据
   * P.S. https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE
   */
  props: ['loginname'],
  data() {
    return {
      user: {}
    }
  },
  methods: {
    /**
     * 封装好的获取数据的函数，这样就不需要每次使用都copy一遍代码了
     */
    fetchData(loginname) {
      getUserByName(loginname).then(res => {
        this.user = res.data
        eventProxy.trigger('user', res.data)
      })
    }
  },
}
</script>