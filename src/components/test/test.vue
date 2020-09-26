<template>
  <div>
    <div v-html="message"></div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          
        </el-col>
        <el-col :span="4">
          <el-button type="primary" v-on:click="test">测试按钮</el-button>
        </el-col>
        <el-col></el-col>
      </el-row>
    </div>
    <test />
  </div>
</template>

<script>
import test from "../home/welcome";

export default {
  components: {
    test,
  },
  props: {},
  data() {
    return {
      message: "<h1>菜鸟教程</h1>",
    };
  },
  watch: {},
  computed: {},
  methods: {
      test(){
        this.$router.replace({path:'/welcome'})
      },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>