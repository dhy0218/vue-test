import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import AppIndex from '../components/home/AppIndex.vue'
import Home from '../components/home/Home.vue'
import welcome from '../components/home/welcome.vue'
import users from '../components/user/users.vue'
import test from '../components/test/test.vue'
Vue.use(VueRouter)

 

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/index',component:AppIndex},
    {
      path:'/mainindex',
      component:Home,
      redirect:'welcome',
      children:
      [
        { path:'/welcome',component:welcome},
        { path:'/users',component:users},
        { path:'/test',component:test},
      ],
      meta: {
        requireAuth: true
      }
    }

  ]
})

export default router
