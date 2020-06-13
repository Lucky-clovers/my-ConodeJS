<!--
 * @Author: QIYE
 * @Date: 2020-06-03 17:25:21
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-10 15:55:00
-->
<template>
  <div class="panel">
    <router-link class="user" :to="{path: '/user/' + user.loginname}">
      <img :src="user.avatar_url" alt="用户头像" />
      <span>{{user.loginname}}</span>
    </router-link>
    <div>积分：{{user.score}}</div>

    <router-link class="collections" :to="{path: '/collections/' + user.loginname}">
        <div>{{collections || 0}}个话题收藏</div>
    </router-link>

    <div>
      Github：
      <a :href='"https://github.com/" + user.githubUsername' target="_blank" rel="nofollow noopener noreferrer">
        {{user.githubUsername}}
      </a>
    </div>
    <div>
      注册时间：
      {{$moment(user.create_at, 'YYYY-MM-DD')
      .startOf('day')
      .fromNow()}}
    </div>
  </div>
</template>
<script>
/**
 * 话题页面右侧上面的个人信息展示页面
 */
import { getUserByName,getCollections } from '@/utils/api'
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
      user: {},
      collections:[]
    }
  },
  methods: {
    /**
     * 封装好的获取数据的函数，这样就不需要每次使用都copy一遍代码了
     */
    fetchData(loginname) {
      getUserByName(loginname).then(res => {
        console.log(res.data)
        this.user = res.data
        eventProxy.trigger('user', res.data)
      });

      getCollections(loginname).then(res => {
        this.collections = res.data.length
      })
    }
  },
   /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    if (!this.loginname) {
      return;
    }
    this.fetchData(this.loginname);
  },

  watch: {
    loginname(loginname) {
      if (!loginname) {
        return;
      }
      this.fetchData(loginname);
    }
  }
}
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  > a {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
  .user {
    margin-bottom: 10px;
  }
  .collections{
    color: #409EFF;
  }
}
</style>

