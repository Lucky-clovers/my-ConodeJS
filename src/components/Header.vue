<!--
 * @Author: QIYE
 * @Date: 2020-06-03 14:55:51
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-10 14:21:48
-->
<template>
  <div class="header">
    <div class="info">
      <a href="/">
        <img :src="require('@/assets/image/cnodejs.svg')" alt="网站logo" />
      </a>

      <ul class="nav pull-right">
        <li>
          <a href="/">首页</a>
        </li>
        <template v-if="!$store.getters.token">
          <li>
            <a href="javascript:;" >注册</a>
          </li>
          <li>
            <a @click="setSignin(true)" href="javascript:;">登录</a>
          </li>
        </template>

        <template v-if="$store.getters.token">
          <li>
            <a href="javascript:;" >设置</a>
          </li>
          <li>
            <a @click="logout" href="javascript:;">退出</a>

          </li>
        </template>

        <li @click="dialogVisible = true">
          <a href="javascript:;">关于</a>
        </li>
      </ul>
      <!-- <span @click="dialogVisible = true">关于</span> -->
    </div>

    <!-- 登录 -->
    <el-dialog title="登录"  :visible.sync="signin" width="35%" :before-close="handleClose" >

      <div class="inside-dialog signin">
        <el-input name="accesstoken" v-model="accesstoken" placeholder="请输入Access Token" clearable></el-input>
        <el-button type="primary" size="medium" @click="getAccesstoken('1d94651b-e73e-4482-afe5-55d30360810a')">登录</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setSignin(false)">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="关于本项目说明" :visible.sync="dialogVisible" width="35%">
      <div class="inside-dialog">
        <p>
          作者：

          <a href="http://x361.xyz" target="_blank" rel="nofollow noopener noreferrer">祁野</a>
        </p>
        <p>
          源码：
          <el-icon type="star" class="el-icon-star-off" />
          <a
            href="https://github.com/shuiRong/VueCnodeJS"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >my-ConodeJS</a>
          <el-icon type="star" class="el-icon-star-off" />&nbsp;欢迎Star~&nbsp;
          <el-icon type="star" class="el-icon-star-off" />
        </p>
        <div>
          <p>技术栈：</p>
          <ul>
            <li>Vue</li>
            <li>Vue Router</li>
            <li>ElementUI</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
/* import { getAccesstoken } from '@/utils/api' */

/**
 * 网站顶部组件
 */
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: 'Header',
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      dialogVisible: false,
      accesstoken: '',
    }
  },
  methods: {
     handleClose(done) {
       let _this = this
        this.$confirm('确认关闭？')
          .then(_ => {
            _this.setSignin(false)
          })
          .catch(_ => {});
      },

    getAccesstoken(accesstoken) {
       this.$store.commit('SET_SIGNIN', true)

      let _this = this
      /* let data = {accesstoken:accesstoken} */
      /* getAccesstoken(data).then(res => {
         console.log(res)
         console.log(this.$store)
        }) */
      this.$store.dispatch('getAccesstoken', accesstoken).then(() => {
        console.log(this.$store)
        this.$store.commit('SET_SIGNIN', false)
        console.log(this.$store.getters)
      })


    },
    /**切换是否显示Dialog 登录 */
    setSignin(signin){
        this.$store.commit('SET_SIGNIN', signin)
    },

    logout(){
        this.$confirm('此操作将退出登录状态, 是否继续?', '提示', {
          type: 'warning',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.$store.dispatch('logout').then(() => { console.log(this.$store.getters)})

          this.$message({
            type: 'success',
            message: '退出成功！'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '退出已取消！'
          });
        });
    }
  },

  computed:{
    signin:function(){
      return this.$store.getters.signin
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  background: #444;
  > div.info {
    width: 1200px;
    height: 100%;
    margin: auto;
    a {
      width: 120px;
      height: 50px;
      display: block;
      float: left;
      img {
        padding-top: 10px;
        display: block;
        width: 100%;
      }
    }
    /* span {
      float: right;
      height: 50px;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
    } */
  }
  .nav {
    position: relative;
    left: 0;
    display: block;
    float: right;
    margin: 0 10px 0 0;
    li {
      list-style: none;
      float: left;
      text-align: center;
      a {
        text-shadow: none;
        color: #ccc;
        height: 30px;
        line-height: 30px;
        padding: 10px 15px;
        width: auto;
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
  .signin {
    text-align: center;
  }
}
</style>

<style lang='scss'>
.header {
  .el-dialog__body {
    padding-top: 10px;
    padding-bottom: 0;
    .inside-dialog {
      p {
        margin: auto;
      }
      .el-icon-star-off::before {
        color: #409eff;
      }
    }
    .el-input {
      width: 60%;
      margin: 0 auto;
    }
    .el-button--medium {
      width: 60%;
      margin-top: 30px;
    }
  }
}
</style>