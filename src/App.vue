<!--
 * @Author: QIYE
 * @Date: 2020-06-02 12:05:49
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-04 15:21:02
-->
<template>
  <div id="app">
    <Header/>
    <div class="main-section">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
.main-section {
  margin: auto;
  margin-top: 40px;
  width: 1200px;
}
</style>

