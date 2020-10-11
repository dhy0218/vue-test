<template>
  <!-- <div>
    <div v-html="message"></div>
    <div>
      <el-row :gutter="20" :justify="center">
        
        <el-col :span="4">
          <el-input></el-input>
          <el-button type="primary" v-on:click="test">测试按钮</el-button>
        </el-col>
        <el-col></el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top:20px">
        <el-col :span="8">
          
        </el-col>
        <el-col :span="4">
          <el-button type="primary" v-on:click="test">测试按钮</el-button>
        </el-col>
        <el-col></el-col>
      </el-row>
    </div>
    <test />
  </div> -->
  
  <div>
    <div v-if="loginType === 'username'">
      <label>Username</label>
      <el-input placeholder="请输入内容"  clearable v-model="message">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
    </div>
    <div v-else>
      <label>Email</label>
      <el-input placeholder="Enter your email address" />
    </div>
    <el-button type="primary" @click="test">testbutton</el-button>

     <div>
       
       <testchild v-bind:title="newlist"></testchild>
     </div>

  </div>
  

</template>

<script>
import test from "../home/welcome";
import testchild from './testchild';
export default {
  components: {
    test,
    testchild,
  },
  props: {},
  data() {
    return {
      loginType: 'username',
      message: "",
      title:"abc",
      newlist:[
        {title:"abc",name:"123"},
        {title:"qwe",name:"456"},
        {title:"jkl",name:"893"},
        {title:"ikm",name:"982"},
      ]
          
          
    
    };
  },
  watch: {},
  computed: {},
  methods: {
    // test() {
    //   this.$router.replace({ path: "/welcome" });
    // },
    test()
    {
      return this.loginType = this.loginType === 'username' ? 'email' : 'username' 
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>