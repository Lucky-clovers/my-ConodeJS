/*
 * @Author: QIYE
 * @Date: 2020-06-02 12:05:49
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-10 11:54:45
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 项目的入口js文件
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/vue.css'
import moment from 'moment'
import '../plugins/element.js'
import tab from '@/utils/tab'

// 设置使用中文
moment.locale('zh-cn') // zh-cn

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$tab = tab



/**
 *   路由发生改变修改页面的title
 */
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  /* components: { App },
  template: '<App/>'   .$mount('#app')*/
})
