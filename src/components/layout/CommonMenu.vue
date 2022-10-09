<template>
  <el-menu
    active-text-color="#fff"
    background-color="#000"
    class="menu"
    default-active="1"
    text-color="#ababab"
    router
  >
    <MenuItem :menu="menu" />
  </el-menu>
</template>

<script setup>
import MenuItem from "./MenuItem";
import { reactive } from "vue";

const menu = reactive([
  {
    id: "1",
    text: "系统首页",
    route: "/",
  },
  {
    id: "100",
    text: "测试",
    route: "/test",
  },
  {
    id: "2",
    text: "产品管理",
    children: [
      {
        id: "2-1",
        text: "产品类表",
        route: "/productManager",
      },
      {
        id: "2-2",
        text: "品牌管理",
        route: "/2-2",
      },
      {
        id: "2-3",
        text: "分类管理",
        route: "/2-3",
      },
    ],
  },
  {
    id: "3",
    text: "图片管理",
    children: [
      {
        id: "3-1",
        text: "广告管理",
        route: "/3-1",
      },
      {
        id: "3-2",
        text: "分类管理",
        route: "/3-2",
      },
    ],
  },
  {
    id: "4",
    text: "交易管理",
    children: [
      {
        id: "4-1",
        text: "交易信息",
        route: "/4-1",
      },
      {
        id: "4-2",
        text: "交易订单（图）",
        route: "/4-2",
      },
      {
        id: "4-3",
        text: "订单管理",
        route: "/4-3",
      },
      {
        id: "4-4",
        text: "交易金额",
        route: "/4-4",
      },
      {
        id: "4-5",
        text: "订单处理",
        route: "/4-5",
      },
      {
        id: "4-6",
        text: "退款管理",
        route: "/4-6",
      },
    ],
  },
  {
    id: "5",
    text: "支付管理",
    children: [
      {
        id: "5-1",
        text: "支付方式",
        route: "/5-1",
      },
      {
        id: "5-2",
        text: "支付配置",
        route: "/5-2",
      },
    ],
  },
  {
    id: "6",
    text: "会员管理",
    children: [
      {
        id: "6-1",
        text: "等级管理",
        route: "/6-1",
      },
      {
        id: "6-2",
        text: "记录管理",
        route: "/6-2",
      },
    ],
  },
  {
    id: "7",
    text: "店铺管理",
    children: [
      {
        id: "7-1",
        text: "店铺审核",
        route: "/7-1",
      },
    ],
  },
  {
    id: "8",
    text: "文章管理",
    children: [
      {
        id: "8-1",
        text: "分类管理",
        route: "/8-1",
      },
    ],
  },
]);
</script>

<style lang="less" scoped>
.menu {
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>
