<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>XXX管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <!--  width="isCollapse?'64px':'200px'动态显示侧边栏的宽度-->
      <el-aside :width="isCollapse?'64px':'200px'">

        <div class = "toggle-button" @click="toggleCollaps">
          |||
        </div>
        <!-- collapse-transition="false"取消了折叠动画
            unique-opened="true" 唯一打开一行
            collapse="isCollapse" 动态展开与折叠
         -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" :unique-opened="true" 
        :collapse="isCollapse" :collapse-transition="false" :router="true">
          <!-- 一级菜单 第一行-->
          <el-submenu index="1">
            <!-- 一级菜单的模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>
            <!-- 二级菜单  -->
            <el-menu-item index="/users">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 第二行 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试效果</span>
            </template>
            <el-menu-item index="/test">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>我的测试</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-4-2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航2.2</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-4-3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航2.3</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 第三行 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航三</span>
            </template>
            <el-menu-item index="3-4-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航3.1</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 第四行 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航四</span>
            </template>
            <el-menu-item index="4-4-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航4.1</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主题区域 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

  data(){
    return{
        isCollapse : false
    }
      
  },

  methods:{
      //获取所有的菜单
      // getMenuList(){
      //   const{data:res} = this.$http.get('menu')
      // }
      logout(){
        this.$router.replace({path:'/login'})
      },
      //点击按钮实现菜单的折叠与展开
      toggleCollaps(){
          this.isCollapse = !this.isCollapse
      }
  },



  name: "AppIndex",
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.home_container {
  height: 100%;
}
.toggle-button{
  background-color: #4A5064;
  font-size:10px;
  line-height:24px;
  color:#fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>