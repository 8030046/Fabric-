<template>
  <div class="home">
    <el-container>
      <el-header style="background-color: #4e90ff;">
        <div style="color: #fff; line-height: 60px;">
          <span style="font-size: 20px;">管理OA</span>
          <div style="float: right;">
            <i class="el-icon-user" style="margin-right: 5px;"></i>
            <span style="font-size: 14px;">当前用户: {{}}</span>
          </div>
        </div>
      </el-header>
      <el-container :style="{height: windowHeight-120+'px'}">
        <el-aside width="220px" style="border-right: 1px solid #dcdcdc;">
          <el-menu :default-active="routerpush" class="el-menu-vertical-demo" router>
            <el-menu-item index="pcportal">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>招生计划</span>
              </template>
              <!-- <el-submenu index="1-4">
                <template slot="title">招生计划查询</template>
              </el-submenu>-->
              <el-menu-item index="enrollmentplaninquiry">招生计划查询</el-menu-item>
              <el-menu-item index="enrollmentplanmanagement">招生计划管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer
        style="text-align: center; background-color: #e5e5e5; line-height: 60px; font-size: 12px;"
      >管理OA @2020 Copy right</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      windowHeight: window.innerHeight, // 浏览器可用区域调试
      routerpush: "pcportal" //当前菜单激活
    };
  },

  methods: {}
};
</script>

<style>
</style>