<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">工作台</el-menu-item>
      <el-menu-item index="2" ><router-link to="/Project">项目管理</router-link></el-menu-item>
      <el-menu-item index="3" >团队成员</el-menu-item>
      <el-menu-item index="4">系统设置</el-menu-item>
      <!--<el-menu-item index="5">项目设置</el-menu-item>-->
      <el-menu-item index="5"><router-link to="/ProjectHome">a项目</router-link></el-menu-item>
    </el-menu>
    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data () {
        return {

        }
      },
      methods:{
        toproject:function () {
          this.$router.push(toproject)
        }
      }
    }
</script>

<style scoped>

</style>
