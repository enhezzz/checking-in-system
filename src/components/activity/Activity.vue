<template>
     <el-container>
        <el-header class="header">
            <el-tag>{{username}}</el-tag>
            <span>请选择一项查询：</span>
            <Navigator></Navigator>
        </el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="12"><div class="activity-item morning">
                    <router-link :to="{name: 'activityDetail',params: {id:1}}">早操</router-link></div></el-col>
                <el-col :span="12"><div class="activity-item club">
                    <router-link to="">俱乐部</router-link></div></el-col>
  
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12"><div class="activity-item body">
                    <router-link to="">身体素质</router-link></div></el-col>
                <el-col :span="12"><div class="activity-item exercise">
                    <router-link to="">自主锻炼</router-link></div></el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import store from '../../store/index.js'
import Navigator from './Navigator'
export default {
    data: function(){
        return {
            username: '',
            
        }
    },
    created: function(){
        this.username = this.$store.state.username
    },
    components: {
        Navigator
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
}
.header {
  color: #409eff;
  text-align: left;
}
.el-row{
    margin-bottom: 5vw
}
.activity-item{
    height: 40vw;
    text-align: center;
    line-height: 40vw;
    color: #fff;

}
.activity-item.morning{
    background: #67C23A
}
.activity-item.club{
    background: #E6A23C
}
.activity-item.body{
    background: #F56C6C
}
.activity-item.exercise{
    background: #909399
}
</style>
