<template>
    <el-container>
        <el-header>
             <Navigator></Navigator>
        </el-header>
        <el-main>
            <el-tabs  v-model="activeName">
                <el-tab-pane label="签到" name="first">
                    <a href="/" class="qd" @click.prevent="qd">

                    {{qdStatus}}
                    </a>
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
    let currentPath = this.$route.path
    axios.get(currentPath).then(response => {
      let tableData = response.data.data,
          text = response.data.msg;
          console.log(tableData)
      this.tableData = tableData;
      this.allStatus[currentPath].data = tableData;
      this.allStatus[currentPath].status = text;
      this.qdStatus = text;
    });
  }, 
  data() {
    return {
      activeName: "first",
      tableData: [],
      currentPage: 1,
      qdStatus: '签到',
      allStatus: {
        '/activity/exercise': {
          status: "签到",
          data: []
        },
        '/activity/body': {
          status: "签到",
          data: []
        },
        "/activity/club": {
          status: "签到",
          data: []
        },
        "/activity": {
          status: "签到",
          data: []
        }
      }
    };
  },
  beforeRouteUpdate(to, from, next){
    console.log(to)
     axios.get(to.path).then(response => {
       let data = response.data.data,
           msg = response.data.msg
       this.allStatus[to.path].data = data;
       this.allStatus[to.path].status = msg;
       this.qdStatus = this.allStatus[to.path].status;
       this.tableData = data;
     })
    
    next()
  },
  methods:{
        filterTag(value, row) {
        return row.available === value;
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      qd(){
        let path = this.$route.path;
        // if(path == '/activity'){
        //   this.allStatus[path].status = '已签到';
        //   this.qdStatus = '已签到'
        // }
        // else{
        //   this.allStatus[path].status = '再次签到';
        //   this.qdStatus = '再次签到'
        // }
        axios.get('/status').then(response=>{
          let currentStatus = response.data.currentStatus;
          if(currentStatus == 1){
              this.$notify({
          title: '你还有其他活动',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
          }else if(this.qdStatus == '已签到'){
           this.$notify({
          title: '你已签到',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
          }else{
             axios.post(path,{mac: '2131-asd-da'}).then(response=>{
            console.log(response.data)
        })
          }
        })
       
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

