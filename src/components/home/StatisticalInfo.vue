<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <dl class="info">
        <dt class="info-title">订单统计信息</dt>
        <dd class="info-item">
          <span>未处理订单：</span>
          <span><span class="info-item-val">0</span>个</span>
        </dd>
        <dd class="info-item">
          <span>待发货订单：</span>
          <span><span class="info-item-val">10</span>个</span>
        </dd>
        <dd class="info-item">
          <span>待结算订单：</span>
          <span><span class="info-item-val">13</span>个</span>
        </dd>
        <dd class="info-item">
          <span>已提交订单数：</span>
          <span><span class="info-item-val">35</span>个</span>
        </dd>
        <dd class="info-item">
          <span>交易失败：</span>
          <span><span class="info-item-val">21</span>个</span>
        </dd>
      </dl>
    </el-col>
    <el-col :span="8">
      <dl class="info">
        <dt class="info-title">商品统计信息</dt>
        <dd class="info-item">
          <span>商品总数：</span>
          <span><span class="info-item-val">340</span>个</span>
        </dd>
        <dd class="info-item">
          <span>回收站商品：</span>
          <span><span class="info-item-val">55</span>个</span>
        </dd>
        <dd class="info-item">
          <span>上架商品：</span>
          <span><span class="info-item-val">267</span>个</span>
        </dd>
        <dd class="info-item">
          <span>下架商品：</span>
          <span><span class="info-item-val">40</span>个</span>
        </dd>
        <dd class="info-item">
          <span>商品评论：</span>
          <span><span class="info-item-val">2464</span>个</span>
        </dd>
      </dl>
    </el-col>
    <el-col :span="8">
      <dl class="info">
        <dt class="info-title">会员登陆统计信息</dt>
        <dd class="info-item">
          <span>注册会员登录：</span>
          <span><span class="info-item-val">1235</span>个</span>
        </dd>
        <dd class="info-item">
          <span>新浪会员登录：</span>
          <span><span class="info-item-val">964</span>个</span>
        </dd>
        <dd class="info-item">
          <span>支付宝登录：</span>
          <span><span class="info-item-val">1843</span>个</span>
        </dd>
        <dd class="info-item">
          <span>QQ会员登录：</span>
          <span><span class="info-item-val">2744</span>个</span>
        </dd>
        <dd class="info-item">
          <span>微信会员登录：</span>
          <span><span class="info-item-val">1034</span>个</span>
        </dd>
      </dl>
    </el-col>
  </el-row>
</template>

<script setup></script>

<style lang="less" scoped>
.info {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  .info-title {
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    font-weight: bold;
    background: #eee;
  }
  .info-item {
    display: flex;
    height: 32px;
    line-height: 32px;
    font-size: 13px;
    & + .info-item {
      border-top: 1px solid #ccc;
    }
    & > span {
      flex: 1;
      text-align: center;
      .info-item-val {
        color: orange;
        margin-right: 8px;
      }
    }
  }
}
</style>
