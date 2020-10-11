<template>
  <div >
      <el-table :data="title" border stripe style="margin-top: 20px" >
        <el-table-column label="title" prop="title"></el-table-column>
        <el-table-column label="name" prop="name"></el-table-column>
    
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
  </div>
</template>

<script>
export default {
  components:{},
  props:{
     title:{
         type:Array
     }
  },
  data(){
    return {
        
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
</style>