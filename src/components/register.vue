<template>
  <div class="register_container">
    <div class="register_box">
      <!-- 头像区域 -->
      <!-- <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div> -->
      <!-- 登录表单区 -->
      <el-form :model="registerForm" :rules="registerformrules" label-width="0px" class="register_form">

        <h3 class="register_title">注册界面</h3>

        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" type="text" v-model="registerForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-s-grid" type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" v-on:click="path">小路</el-button>
          <el-button type="primary" v-on:click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
      },
      responseResult: [],
      //这是表单的验证规则对象
      registerformrules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  watch:{},
  computed:{},
  methods:{
      path(){
        this.$router.replace({path:'/mainindex'})
      },
      
      async register () {
        
        const {data:res} =  await this.$http.post('/register',this.registerForm);
        console.log(res.code);

        if(res.code !== 200)
        {
           return this.$message.error("注册失败!");
        }
        this.$message.success("注册成功！");
        this.$router.replace('/login');
      
      }
    
  },
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.register_container {
  background-color: #2b4b6b;
  height: 100%;
}
.register_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .register_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .register_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    // 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度
    box-sizing: border-box;
  }
}
</style>