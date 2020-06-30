<!--
 * @Author: QIYE
 * @Date: 2020-06-08 16:10:58
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-30 16:26:33
-->
<template>
  <div class="person">
    <div v-if='!token'>
       <div>
          CNode：Node.js专业中文社区
        </div>
        <Divider/>
        <div class="clearfix">
          您可以通过CNode.js社区的，accessToken进行登录
        </div>
        <el-button @click="setSignin(true)" type="primary" size='medium'>登录</el-button>
         <!-- 登录 -->
    </div>

    <div v-else>
       <div>
          个人信息
        </div>
        <Divider/>
        <router-link class="user" :to="{path: '/user/' + user.loginname}">
          <img :src="user.avatar_url" alt="用户头像" />
          <span>{{user.loginname}}</span>
        </router-link>
        <div>积分：{{user.score || 0}}</div>
        <div class="clearfix">
            “
                这家伙很懒，什么个性签名都没有留下。
            ”
        </div>

    </div>

  </div>
</template>



<script>

import { getUserByName } from '@/utils/api'

import Divider from '@/components/Divider.vue'
export default {
  name:'person',
  data(){
    return{
      user:{}
    }
  },
  methods: {
    setSignin(signin){
        this.$store.commit('SET_SIGNIN', signin)
    },

  },
  created() {

  },
  mounted() {


  },
  components:{
    Divider,
  },
  computed: {
    signin:function(){
      return this.$store.getters.signin
    },
    token:function(){
    /**
     * 判断是否获取用户详情
     */
       if(this.$store.getters.token){
        let loginname = JSON.parse(this.$store.getters.token).loginname
        getUserByName(loginname).then(res => {
            this.user ={
              ...res.data
            }
          //  console.log(res)
       });
     }

      return this.$store.getters.token
    },
  },

}
</script>
<style lang="scss" scoped>
.person {
  div>div{
    margin-bottom: 15px;
  }
  .divider{
    height: 2px;
    background: #E4E7ED;
  }
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  a {
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
    margin-top: 15px;
  }
  .clearfix{
    font-size: 13px;
    margin-bottom: 20px;
  }
}
</style>
<style lang="scss">
  .el-button--medium{
    width: 100%;
  }
</style>
