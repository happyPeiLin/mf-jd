import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout', //路由名称
      component: Layout, //组件对象
    }
  ]
})


