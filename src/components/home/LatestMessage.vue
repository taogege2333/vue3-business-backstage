<template>
  <div class="latest-message">
    <p class="title">最新消息</p>
    <div class="message-content">
      <p class="message-item" v-for="(msg, index) in messages" :key="index">
        <el-icon color="#f00"><Bell /></el-icon>
        <span>{{ msg }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const messages = reactive([
  "我是消息AAAAAAAA",
  "我是消息AAAAAAAA",
  "我是消息AAAAAAAA",
  "我是消息AAAAAAAA",
  "我是消息AAAAAAAA",
  "我是消息AAAAAAAA",
]);
</script>

<style lang="less" scoped>
.latest-message {
  border: 1px solid #ccc;
  border-radius: 8px;
  .title {
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }
  .message-content {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    height: 164px;
    .message-item {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
}
</style>
