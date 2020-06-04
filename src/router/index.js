/*
 * @Author: QIYE
 * @Date: 2020-06-02 12:05:49
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-04 14:48:35
 */
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/Home'),

    },
    {
      path: '/user/:id',
      name: 'user',
      component:  ()=>import('@/views/User'),
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component:  ()=>import('@/views/Topic'),
    },
    {
      path:'*',
      redirect: { name: 'home' }
   }
  ]
});
