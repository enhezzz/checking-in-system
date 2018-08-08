<template>
    <el-container>
        <el-header>
             <Navigator></Navigator>
        </el-header>
        <el-main>
            <el-tabs  v-model="activeName">
                <el-tab-pane label="签到" name="first">
                    <a href="/阿瑟东撒的" class="qd">签到</a>
                </el-tab-pane>
                <el-tab-pane label="刷卡记录" name="second">
                    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="available"
      label="有效性" 
      :filters="[{ text: '有效', value: 'YES' }, { text: '无效', value: 'NO' }]" 
      :filter-method="filterTag" 
      filter-placement="bottom-end">
        <template slot-scope="scope">
        <el-tag
          :type="scope.row.available === 'YES' ? 'primary' : 'danger'"
          disable-transitions>{{scope.row.available}}</el-tag>
      </template>
    </el-table-column>
   
  </el-table>
     <div class="block">
    <el-pagination
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout=" prev, pager, next,total"
      :total="400">
    </el-pagination>
  </div>
                </el-tab-pane>
              
            </el-tabs>
        </el-main>
    </el-container>
</template>
<script>
import axios from "axios";
import Navigator from './Navigator'
export default {
  created: function() {
    axios.get("/zc/list").then(response => {
      console.log(response.data);
      let tableData = response.data;
      this.tableData = tableData;
    });
  },
  data() {
    return {
      activeName: "first",
      tableData: [],
      currentPage: 1
    };
  },
  methods:{
        filterTag(value, row) {
        return row.available === value;
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
  },
  components: {
      Navigator
  }
};
</script>
<style scoped>
.qd {
  display: block;
  width: 50vw;
  height: 50vw;
  line-height: 50vw;
  border: 1px solid #eee;
  border-radius: 50%;
  margin: 20vh auto;
  color: #fff;
  background: #409eff;
  text-decoration: none;
  text-align: center
}
header{
    height: 0 !important;
    text-align: right;
}
.block{
    text-align: center
}
</style>
<style>
.el-pagination__total {
    margin-right: 0px;
    display: block !important;
    text-align: center !important;
}
a{
    
}
</style>

