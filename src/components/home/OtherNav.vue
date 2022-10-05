<template>
  <ul class="other-nav">
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><ShoppingBag /></el-icon>
        <span>添加商品</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><PieChart /></el-icon>
        <span>产品分类</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><UserFilled /></el-icon>
        <span>个人信息</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><Setting /></el-icon>
        <span>系统设置</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><ShoppingCart /></el-icon>
        <span>商品订单</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><PictureFilled /></el-icon>
        <span>添加广告</span>
      </router-link>
    </li>
    <li class="nav">
      <router-link to="/">
        <el-icon size="24px"><Document /></el-icon>
        <span>添加文章</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup></script>

<style lang="less" scoped>
.other-nav {
  display: flex;
  margin-top: 15px;
  .nav {
    width: 100px;
    height: 80px;
    margin-right: 15px;
    border-radius: 8px;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 12px;
      & > span:last-child {
        margin-top: 10px;
      }
    }

    &:nth-of-type(1) {
      background: #00ffea;
    }
    &:nth-of-type(2) {
      background: #037fff;
    }
    &:nth-of-type(3) {
      background: #ff7f00;
    }
    &:nth-of-type(4) {
      background: #00a3ff;
    }
    &:nth-of-type(5) {
      background: #be00ff;
    }
    &:nth-of-type(6) {
      background: #00b816;
    }
    &:nth-of-type(7) {
      background: #e8ca38;
    }
  }
}
</style>
