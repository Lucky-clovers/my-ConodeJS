<!--
 * @Author: QIYE
 * @Date: 2020-06-04 14:06:27
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-04 15:09:37
-->
<template>
  <div class="topic">
    <div class="left">
      <div class="title" v-html="topic.title"></div>
      <el-button  type="primary" @click="collect" plain class="el-icon-star-off">收藏
      </el-button>
      <div class="info">
        <span>
          发布于&nbsp;
          {{$moment(topic.create_at, 'YYYY-MM-DD')
          .startOf('day')
          .fromNow()}}
          &nbsp;•&nbsp;
        </span>
        作者：
        <router-link :to="{path: '/user/' + topic.loginname}">{{topic.loginname}}</router-link>&nbsp;•&nbsp;
        <span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
        <span>
          来自：
          {{$tab[topic.tab] && $tab[topic.tab].name}}
        </span>
      </div>
      <Divider />
       <div class="content" v-html='topic.content' />
      <Reply :data='topic.replies' />
    </div>

     <div class="right">
      <ProfilePanel :loginname='topic.loginname' />
      <OtherTopic />
      <RecentReply />
    </div>

  </div>
</template>
<script>
import { getTopicById,collect } from '@/utils/api'
import Divider from '@/components/Divider'
import Reply from '@/components/Topic/Reply'
import ProfilePanel from "@/components/User/ProfilePanel";
import OtherTopic from "@/components/User/OtherTopic";
import RecentReply from "@/components/User/RecentReply";

export default {
  name: 'Toipc',
  data() {
    return {
      topic: {}
    }
  },
  methods: {
    fetchData(id) {
      getTopicById(id).then(res => {
        //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
        this.topic = {
          ...res.data,
          ...res.data.author
        }

        console.log(this.topic)
      })
    },
    collect(){
         let accesstoken = this.$store.getters.accesstoken
      console.log(accesstoken)
         let data = {accesstoken:accesstoken,topic_id:this.topic.id}
          collect(data).then( res => {

               if(res.success){

                 this.$message({
                   type: 'success',
                   message: '收藏成功',
                   duration: 2 * 1000
                 })

               }

          } )
    }
  },

  mounted() {

  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    this.fetchData(this.$route.params.id)
  },
  /**
   * 在当前路由改变，但是该组件被复用时调用
   * 举例来说，对于一个带有动态参数的路径 /topic/:id，在 /topic/asdsd 和 /topic/sdfsdfa 之间跳转的时候，
   * 由于会渲染同样的 Topic 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   * 可以访问组件实例 `this`
   */
  beforeRouteUpdate(to, from, next) {
    this.fetchData(to.params.id)
    next()
  },
  components: {
    Divider,
    Reply,
    ProfilePanel,
    OtherTopic,
    RecentReply
  }
}
</script>

<style lang="scss" scoped>
$grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

.topic {
  .el-icon-star-off:before{
    padding-right: 5px;
  }
  .el-button{
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px 10px;
  }
  display: flex;
  margin-bottom: 100px;
  .title {
    color: black;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 8px;
  }
  .content {
    color: #333;
    line-height: 1.6;
    margin-bottom: 50px;
    /deep/ img {
      width: 100%;
    }
  }
  .left {
    width: 72%;
    float: left;
    box-shadow: $grey-shadow;
    padding: 20px;
    position: relative;
    .info {
      display: flex;
      align-items: center;
      color: #838383;
      font-size: 12px;
    }
  }
  .right {
    float: right;
    width: 25%;
    height: 100%;
    margin-left: 2%;
  }
}
</style>
