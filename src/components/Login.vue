<template>
  <el-container>
    <el-header>
      <img src="../assets/header.png" alt="刷卡">
    </el-header>
    <el-main>
      <el-form  label-width="80px" >
  <el-form-item  label="学号">
    <el-input  type="text" clearable></el-input>
  </el-form-item>
  <el-form-item  label="密码">
    <el-input  type="password" clearable></el-input>
  </el-form-item>
  
    <el-button @click="login" v-loading.fullscreen.lock="fullscreenLoading">登陆</el-button>
  
</el-form>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import store from '../store'
export default {
  name: "Login",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      fullscreenLoading: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login(e){
      e.stopPropagation();
      this.fullscreenLoading = true;
      axios.get('/user/login').then(response=>{
        let name = response.data.username
        // store.commit('updateName',name);
        console.log(this.$store)
        this.$store.commit('updateName',name)
        console.log(response.statusText);
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
        this.fullscreenLoading = false;
        this.$router.push('/activity');
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    height: auto !important
  }
  header>img{
    width: 100%
  }
  .el-form{
  text-align: center
}
</style>
<style>
.el-message {
    min-width: 40vw !important;
}

</style>

