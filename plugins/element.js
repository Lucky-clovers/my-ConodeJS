/*
 * @Author: QIYE
 * @Date: 2020-06-02 14:26:11
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-03 14:19:55
 */
/**
 * 对ElementUI的组件进行按需引用。不需要的就不引用，
 * 这样可以减小打包后的文件体积
 */

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';

import {
  Button,
  Card,
  Input,
  Table,
  TableColumn,
  Dialog,
  Form,
  FormItem,
  Message,
  Loading,
  MessageBox,
  TabPane,
  Tabs,
  Tag,
  Icon
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Icon)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
