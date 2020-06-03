/*
 * @Author: QIYE
 * @Date: 2020-06-02 12:05:49
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-03 17:20:01
 */
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home'),

    },
    {
      path:'*',
      redirect: { name: 'home' }
   }
  ]
});
