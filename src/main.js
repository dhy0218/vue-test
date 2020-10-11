import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

import store from './store'
import axios from 'axios'
import {message} from 'element-ui'
import {MessageBox} from 'element-ui'
import './plugins/wyz-echarts/wyz-echarts.js'
import echarts from 'echarts'
//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

//设置反向代理，前端请求默认发送到8081/api
//var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081/api'
//全局注册之后可以在其他组件中通过this.$axios发送数据
Vue.prototype.$http = axios
Vue.prototype.$message = message
Vue.prototype.$confirm = MessageBox
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueQuillEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  //如果需要认证就去判断有没有
  if (to.meta.requireAuth) {
    //如果存在username则放行
    if (store.state.user.username) {
      next()
      //否则跳转到login界面
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  //否则就放行
  } else {
    next()
  }
}
)