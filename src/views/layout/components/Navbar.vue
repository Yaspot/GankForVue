<template>
  <el-row>
    <el-col :span="10">
      <div class="logo ">
        <span>干货集中营</span>
      </div>
    </el-col>
    <el-col :span="14">
        <el-menu router class="navbar" mode="horizontal">
          <el-menu-item index="/home" >首页</el-menu-item>  
          <el-menu-item index="/BE">后端</el-menu-item>
          <el-menu-item index="/IOS">IOS</el-menu-item>
          <el-menu-item index="/Android">安卓</el-menu-item>
          <el-menu-item index="/FE">前端</el-menu-item>
          <el-menu-item index="/MeiZi">妹子圖</el-menu-item>  
          <el-menu-item index="/About">关于宝宝</el-menu-item>
      </el-menu> 
    </el-col>
  </el-row>
  
</template>

<script>
export default {
  name: 'Navbar',
  components: {
   
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.logo {
  font-size: 20px;
  text-align: center;
  width: 100px;
  color:#409EFF;
  font-weight: 700;
  line-height: 58px;
  vertical-align: middle;
  padding-left: 30px;
}
.navbar { 
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

