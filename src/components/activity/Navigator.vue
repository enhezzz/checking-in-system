<template>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    前往<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="/activity">activity</el-dropdown-item>
    <el-dropdown-item command="/">切换账号</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>
<script>
export default {
    methods: {
         handleCommand(command) {
        this.$router.push(command);
      }
    }
}
</script>
<style scoped>

</style>
