<template>
     <el-container>
        <el-header class="header">
            <i class="el-icon-menu" @click="showMemu"></i>
            <el-tag class="fr">{{username}}</el-tag>
            <!-- <span>请选择一项查询：</span> -->
            <!-- <Navigator></Navigator> -->
            <el-card class="box-card-hidden" ref="card" :class="{'box-card': isShow}">
                <div class="text item">
                  <router-link :to="{path: '/activity'}">早操</router-link>
                </div>
                <div class="text item">
                  <router-link :to="{path: '/activity/club'}">俱乐部</router-link>
                </div>
                <div class="text item">
                  <router-link :to="{path: '/activity/body'}">身体素质</router-link>
                </div>
                <div class="text item">
                  <router-link :to="{path: '/activity/exercise'}">自主锻炼</router-link>
                </div>
            </el-card>

        </el-header>
        <el-main>
            <!-- <el-row :gutter="20">
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
            </el-row> -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import store from "../../store/index.js";
import Navigator from "./Navigator";
export default {
  data: function() {
    return {
      username: "",
      isShow: false
    };
  },
  created: function() {
    this.username = this.$store.state.username;
    var that = this;
    document.documentElement.onclick = function(){
      that.isShow = false
    }
  },
  components: {
    Navigator
  },
  methods: {
      showMemu(e){
        //   let width = 0,height = 0,speedWidth = 1,speedHeight = 1;
        //   let that = this;
        //   let func = function(){
        //       if(width < window.innerWidth){
        //       that.$refs.card.$el.style.width = width + 'px';
        //       width += speedWidth;
        //       speedWidth++;}
        //       if(height < 500){
        //       that.$refs.card.$el.style.height = height + 'px';
        //       height += speedHeight;
        //       speedHeight++;}
        //       if(height < 500||width < window.innerWidth)
        //        requestAnimationFrame(func)
        //   }
        //   requestAnimationFrame(func)
        e.stopPropagation();
        this.isShow = !this.isShow
      }
  }
};
</script>
<style scoped>
a {
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
.el-row {
  margin-bottom: 5vw;
}
.activity-item {
  height: 40vw;
  text-align: center;
  line-height: 40vw;
  color: #fff;
}
.activity-item.morning {
  background: #67c23a;
}
.activity-item.club {
  background: #e6a23c;
}
.activity-item.body {
  background: #f56c6c;
}
.activity-item.exercise {
  background: #909399;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}


.box-card-hidden{
    width: 0;
    height: 0;
    opacity: 0;
}
.box-card {
  width: 90%;
  height: 248px;
  position: absolute;
  top: 36px;
  z-index: 999;
  opacity: 1;
  transition: all .5s
}
[class*='el-icon-']{
    font-size: 36px;
}
.el-icon-menu{
    cursor: pointer;
}
.el-card .item:hover{
  background: rgba(233, 233, 233, .2)
}
.el-card .item a{
  color: #409eff
}
</style>
<style>
.fr {
  float: right;
}
</style>

