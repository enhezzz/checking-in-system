<template>
  <div id="app">
    <router-view class="main" />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-container.main{
  min-height: 90vh;
}
.footer{
  min-height: 10vh;
  line-height: 10vh
}
</style>
