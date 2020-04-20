<template>
  <div id="projecthome">
    <el-menu
    :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1"><router-link to="/Home">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/StoryBoard">故事板</router-link></el-menu-item>
      <el-menu-item index="3">任务板</el-menu-item>
      <el-menu-item index="4">缺陷板</el-menu-item>
      <el-menu-item index="5">进度板</el-menu-item>
      <el-menu-item index="6">成本板</el-menu-item>
      <el-submenu index="7">
        <template slot="title">迭代</template>
        <el-menu-item index="7-1">迭代会议</el-menu-item>
        <el-menu-item index="7-2">迭代计划</el-menu-item>
        <el-menu-item index="7-3">迭代用户故事</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">发布计划</el-menu-item>
      <el-menu-item index="9">项目文件</el-menu-item>
      <el-submenu index="10">
        <template slot="title">项目团队</template>
        <el-menu-item index="10-1">团队动态</el-menu-item>
        <el-menu-item index="10-2">任务动态</el-menu-item>
        <el-menu-item index="10-3">工作量分析</el-menu-item>
      </el-submenu>

      <div class="project-nav-footer">
          <a class="footer-item" >
            <span> 成员</span>
          </a>
          <a class="footer-item" >
            <span> 设置</span>
          </a>
      </div>
    </el-menu>
    <div class="line"></div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectHome',
    data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
  }
</script>

<style scoped>
  .project-nav-footer {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    height: 50px;
    align-items: center;
    z-index: 998;
  }

  .project-nav-footer .footer-item {
    font-size: 14px;
    position: relative;
    padding: 15px 10px;
    margin: 0 5px;
    float: right;
    display: inline-block;
    text-align: center;
  }

  .project-nav-footer .footer-item.active {
    color: #2D8cF0;
  }

  .project-nav-footer .footer-item:hover {
    color: #2D8cF0;
  }

  .project-nav-footer :not(:first-child):after {
    position: absolute;
    content: '';
    right: -5px;
    top: 16px;
    bottom: 16px;
    width: 1px;
    background-color: #A6A6A6;
  }
</style>
