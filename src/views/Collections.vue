<!--
 * @Author: QIYE
 * @Date: 2020-06-05 10:21:28
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-30 16:21:30
-->
<template>
  <div class="panel">
    <header>{{loginname}} 收藏的话题</header>
    <Divider class="divider" />
    <template v-for="item in collections">
      <div :key="item.id">
        <router-link v-if="item.length" :to="{path: '/topic/' + item.id}">{{item.title}}</router-link>
        <div v-else>
          <div class="main">
            <div>
              <router-link class="avatar" :to="{path: '/user/' + item.author.loginname}">
                <img :src="item.author && item.author.avatar_url" alt="头像" />
              </router-link>
              <router-link key="{item.id}" :to="{path: '/topic/' + item.id}">{{item.title}}</router-link>
            </div>
            <span class="time">
              {{$moment(item.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}}
            </span>
          </div>
          <Divider class="inside-divider" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import Divider from '@/components/Divider'
import { getCollections } from '@/utils/api'

export default {
  name: 'RecentReply',
  data() {
    return {
      collections:[]
    }
  },
  methods: {
    fetchData(loginname) {
      getCollections(loginname).then(res => {
        this.collections = res.data

        console.log('收藏',res.data)
      })
    }
  },
  /**
   * 监听'user'，将被传入的数据设置到当前组件state中
   * P.S. 一般在此钩子下面调用接口或者类似操作
   */
  created() {
    this.loginname = this.$route.params.id
    if (!this.loginname) {
      return;
    }
    this.fetchData(this.loginname);
  },
  computed:{

  },
  /**
   * 组件被销毁的钩子
   * 给this增加属性，表示当前实例已被卸载
   */
  destroyed() {

  },
  mounted() {
      if(this.$store.getters.token){
        let token = this.$store.getters.token
        let loginname = JSON.parse(token).loginname

        console.log(loginname)

        this.fetchData(loginname);
      }
  },
  watch: {
    loginname(loginname) {
      if (!loginname) {

        return;
      }

      this.fetchData(loginname);
    }
  },
  components: {
    Divider
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-right: 5px;
  }
}
.divider {
  margin: 12px 0;
}
</style>
