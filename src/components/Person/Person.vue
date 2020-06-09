<!--
 * @Author: QIYE
 * @Date: 2020-06-08 16:10:58
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-08 16:10:58
-->
<template>
  <div class="panel">
    <router-link class="user" :to="{path: '/user/' + user.loginname}">
      <img :src="user.avatar_url" alt="用户头像" />
      <span>{{user.loginname}}</span>
    </router-link>
    <div>积分：{{user.score}}</div>

    <router-link class="collections" :to="{path: '/collections/' + user.loginname}">
        <div>{{collections}}个话题收藏</div>
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