<template>
  <header class="header">
    <div class="notice">
      <el-badge :value="120" :max="99">
        <el-icon><Bell /></el-icon>
      </el-badge>
    </div>
    <el-divider direction="vertical" />
    <div class="time">{{ time }}</div>
    <el-divider direction="vertical" />
    <div class="user">
      <el-avatar>
        <el-icon><UserFilled /></el-icon>
      </el-avatar>
      <div class="name">
        <span>欢迎您！</span>
        <span>超级管理员</span>
      </div>
      <el-icon><CaretBottom /></el-icon>
    </div>
  </header>
</template>

<script setup>
import { onUnmounted, ref } from "vue";

const time = ref(new Date().toLocaleString());

const t = setInterval(() => (time.value = new Date().toLocaleString()), 1000);
onUnmounted(() => clearInterval(t));
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .notice {
    width: 40px;
    cursor: pointer;
  }
  .user {
    display: flex;
    align-items: center;
    .name {
      display: flex;
      flex-direction: column;
      margin: 0 15px;
    }
  }
}
</style>
