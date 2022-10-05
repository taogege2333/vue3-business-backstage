<template>
  <el-row class="summary-data" :gutter="20">
    <el-col :span="6">
      <div class="summary-data-item">
        <div class="icon">
          <el-icon><UserFilled /></el-icon>
        </div>
        <div class="data">
          <span class="num">34522</span>
          <span class="title">商城用户</span>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="summary-data-item">
        <div class="icon">
          <el-icon><Management /></el-icon>
        </div>
        <div class="data">
          <span class="num">140</span>
          <span class="title">分销记录</span>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="summary-data-item">
        <div class="icon">
          <el-icon><GoodsFilled /></el-icon>
        </div>
        <div class="data">
          <span class="num">345</span>
          <span class="title">商城订单</span>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="summary-data-item">
        <div class="icon">
          <el-icon><TrendCharts /></el-icon>
        </div>
        <div class="data">
          <span class="num">￥34,522</span>
          <span class="title">交易记录</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup></script>

<style lang="less" scoped>
.summary-data {
  margin-bottom: 15px;
  & .el-col:nth-of-type(1) {
    .icon {
      background: #00ffea;
    }
  }
  & .el-col:nth-of-type(2) {
    .icon {
      background: #f00;
    }
  }
  & .el-col:nth-of-type(3) {
    .icon {
      background: #ffa900;
    }
  }
  & .el-col:nth-of-type(4) {
    .icon {
      background: #00a3ff;
    }
  }
  .summary-data-item {
    display: flex;
    height: 80px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      color: #fff;
      font-size: 32px;
    }
    .data {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      .num {
        font-size: 24px;
      }
      .title {
        font-size: 12px;
      }
    }
  }
}
</style>
