<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model='message' clearable @clear="getGoodsList">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
      </el-row>

      <!-- table 可以设置width属性-->
      <el-table :data="goodslist" border stripe style="margin-top: 20px" >
        <el-table-column type="index"></el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="密码" prop="password"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeById(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  //   数据域
  data() {
    return {
      //查询参数列表
      message: '',
      pagenum: 1,
      pagesize: 4,
      goodslist: [],
      total: 0,
    };
  },
  watch: {},
  computed: {},
  //   方法
  methods: {
    //根据分页获取对应的商品列表
    async getGoodsList() {
      this.$http
        .get("/testPageInfo", {
          params: { page: this.pagenum, size: this.pagesize },
        })
        .then((response) => {
          this.$message.success("成功获取信息");
          console.log(response.data.list);
          this.goodslist = response.data.list;
          this.total = response.data.total;
        })
        .catch(function (error) {
          alert(error);
        });
    },
    handleSizeChange(newSize){
        this.pagesize = newSize
        this.getGoodsList()
    },
    handleCurrentChange(newnum){
      this.pagenum =  newnum
      this.getGoodsList()
    },
    removeById(id){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        console.log(id)

        this.$http
        .get("/deleteById", {
          params: { id:id},
        })
        .then((response) => {
          
          this.$message.success("删除成功");
          
         
        })
        .catch(function (error) {
          alert(error);
        });
        this.getGoodsList()
       
    },
    goAddpage()
    {
      this.$router.push('/addPage')
    }
  },

  //   生命周期
  created() {
    this.getGoodsList();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>