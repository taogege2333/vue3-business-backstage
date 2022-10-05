<template>
  <div class="home">
    <el-alert class="alert" type="success" :closable="false" center>
      <el-icon><SuccessFilled /></el-icon>
      <span>
        欢迎使用后台管理系统，您本次登录时间为{{ time }}，登录IP：{{ ip }}
      </span>
    </el-alert>
    <SummaryData />
    <el-row :gutter="20">
      <el-col :span="18">
        <StatisticalInfo />
      </el-col>
      <el-col :span="6"><LatestMessage /></el-col>
    </el-row>
    <OtherNav />
  </div>
</template>

<script setup>
// @ is an alias to /src
import SummaryData from "../components/home/SummaryData";
import StatisticalInfo from "../components/home/StatisticalInfo";
import LatestMessage from "../components/home/LatestMessage";
import OtherNav from "../components/home/OtherNav";
import { ref } from "vue";

const ip = ref(window.returnCitySN.cip);
const time = new Date().toLocaleString();
</script>

<style lang="less" scoped>
.alert {
  margin: 15px 0;
}
</style>
