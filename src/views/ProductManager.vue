<template>
  <div class="product-manager">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="产品名称">
        <el-input v-model="form.productName" placeholder="请输入产品名称" />
      </el-form-item>
      <el-form-item label="添加时间">
        <el-date-picker
          v-model="form.createTime"
          type="date"
          placeholder="请选择时间"
          clearable
          :disabled-date="disabledDate"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          <el-icon><Search /></el-icon>
          <span>搜索</span>
        </el-button>
      </el-form-item>
    </el-form>
    <el-button type="warning">
      <el-icon><Plus /></el-icon>
      <span>添加商品</span>
    </el-button>
    <el-button type="danger" @click="handleBatchDelete">
      <el-icon><Delete /></el-icon>
      <span>批量删除</span>
    </el-button>
    <el-row :gutter="20" style="margin-top: 15px">
      <el-col :span="6">
        <div class="tree-box">
          <h3>产品类型列表</h3>
          <el-tree
            class="tree"
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
            :expand-on-click-node="false"
            highlight-current
          >
            <template #default="{ data }">
              <div class="tree-node">
                <i
                  v-show="!data.children || data.children.length === 0"
                  class="tree-node-nochildren-icon"
                />
                <span>{{ data.label }}</span>
              </div>
            </template>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="table-box">
          <span style="margin-right: 10px">每页显示</span>
          <el-select v-model="pagination.pageSize">
            <el-option :value="10" label="10条"></el-option>
            <el-option :value="20" label="20条"></el-option>
            <el-option :value="30" label="30条"></el-option>
            <el-option :value="40" label="40条"></el-option>
          </el-select>
          <el-table
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="productNo" label="产品编号" width="100" />
            <el-table-column prop="productName" label="产品名称" width="180" />
            <el-table-column prop="prevPrice" label="原价格" width="100" />
            <el-table-column prop="nowPrice" label="现价" width="100" />
            <el-table-column prop="location" label="所属地区/国家" width="120" />
            <el-table-column prop="createTime" label="加入时间" width="180" />
            <el-table-column prop="approveStatus" label="审核状态" width="100">
              <template #default="{ row }">
                <span v-if="row.approveStatus === '1'" style="color: #409eff">通过</span>
                <span v-else-if="row.approveStatus === '2'" style="color: #f56c6c">未通过</span>
                <span v-else-if="row.approveStatus === '4'" style="color: #67c23a">审核中</span>
                <span v-else>未审核</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="100">
              <template #default="{ row }">
                <i :class="{'status-dot': true, enabled: row.status === '1'}"></i>
                <span v-if="row.status === '1'">启用</span>
                <span v-else>未启用</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250">
              <template #default="{ row }">
                <div class="btns">
                  <el-button
                    type="success"
                    size="small"
                    v-if="row.approveStatus === '0'"
                    @click="handleSubmitApprove"
                  >
                    <el-icon><Check /></el-icon>
                  </el-button>

                  <el-button
                    type="success"
                    size="small"
                    v-if="row.approveStatus === '1' && row.status === '0'"
                    @click="handleEnabled"
                  >启用</el-button>

                  <el-button
                    type="warning"
                    size="small"
                    v-if="row.approveStatus === '1' && row.status === '1'"
                    @click="handleDisabled"
                  >禁用</el-button>

                  <el-button
                    type="primary"
                    size="small"
                    :disabled="
                      row.approveStatus === '4' ||
                      (row.approveStatus === '1' && row.status === '1')
                    "
                    @click="handleEdit"
                  >
                    <el-icon><Edit /></el-icon>
                  </el-button>

                  <el-button
                    type="danger"
                    size="small"
                    :disabled="row.approveStatus === '4'"
                    @click="handleDelete"
                  >
                    <el-icon><Delete /></el-icon>
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <div>第{{ pagination.currentPage }}页 共{{ maxPages }}页，共{{ pagination.total }}条</div>
            <el-pagination
              v-model:currentPage="pagination.currentPage"
              v-model:page-size="pagination.pageSize"
              layout="prev, pager, next, slot"
              :total="pagination.total"
            >
              <template #default>
                <div class="pagination-slot">
                  <el-select v-model="pagination.pageSize">
                    <el-option :value="10" label="10条/页"></el-option>
                    <el-option :value="20" label="20条/页"></el-option>
                    <el-option :value="30" label="30条/页"></el-option>
                    <el-option :value="40" label="40条/页"></el-option>
                  </el-select>
                  <span class="jump-text">跳至</span>
                  <el-input-number :max="maxPages" :controls="false" @blur="handlejump" @keyup.enter="handlejump" />
                  <span>页</span>
                </div>
              </template>
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import useForm from "@/hooks/product_manager/useForm";
import useTree from "@/hooks/product_manager/useTree";
import useTable from "@/hooks/product_manager/useTable";

const { form, onSubmit, disabledDate } = useForm();
const { defaultProps, treeData, handleNodeClick } = useTree();
const {
  tableData,
  pagination,
  maxPages,
  handleSubmitApprove,
  handleEnabled,
  handleDisabled,
  handleEdit,
  handleDelete,
  handlejump,
  handleSelectionChange,
  handleBatchDelete,
} = useTable();
</script>

<style lang="less" scoped>
.product-manager {
  margin-top: 15px;
  .tree-box {
    height: 100%;
    border: 1px solid #ccc;
    > h3 {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      color: #fff;
      background: #409eff;
    }
    .tree {
      padding: 15px;
      .tree-node {
        .el-icon {
          margin-right: 10px;
        }
        .tree-node-nochildren-icon {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 10px;
          border-radius: 4px;
          background: #67c23a;
        }
      }
    }
  }
  .status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 6px;
    background: #909399;
    &.enabled {
      background: #67c23a;
    }
  }
  .btns {
    display: flex;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pagination-slot {
      display: flex;
      > .jump-text {
        margin: 0 4px 0 10px;
      }
      .el-input-number {
        width: 100px;
      }
    }
    /deep/ .el-pager {
      .is-active {
        background: #409eff;
        color: #fff;
        border-radius: 4px;
        font-weight: bold;
        transition: all 200ms linear;
      }
    }
  }
}
</style>
