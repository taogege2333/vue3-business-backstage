import { ElMessage } from "element-plus";
import { reactive, computed } from "vue";

export default function useTable() {
  const tableData = reactive([
    {
      productNo: "00001",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "0", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00002",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "0", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00003",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "4", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00004",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "1", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00005",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "1", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "1", // 0:未启用，1:启用
    },
    {
      productNo: "00006",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "2", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00006",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "4", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00008",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "1", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "1", // 0:未启用，1:启用
    },
    {
      productNo: "00009",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "2", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
    {
      productNo: "00010",
      productName: "小米12x12GB运存256GB内存5G手机",
      prevPrice: 3200,
      nowPrice: 2999,
      location: "中国",
      createTime: "2022-5-12 12:00:00",
      approveStatus: "1", // 0:待审核，1:通过，2:未通过，4:审核中
      status: "0", // 0:未启用，1:启用
    },
  ]);
  const pagination = reactive({
    pageSize: 10,
    currentPage: 1,
    total: 100,
  });

  const maxPages = computed(() => {
    return Math.ceil(pagination.total / pagination.pageSize);
  });

  let checkedProducts = [];

  function handleSubmitApprove() {
    ElMessage({
      message: "提交审核",
      type: "success",
    });
  }

  function handleEnabled() {
    ElMessage({
      message: "启用",
      type: "success",
    });
  }

  function handleDisabled() {
    ElMessage({
      message: "禁用",
      type: "success",
    });
  }

  function handleEdit() {
    ElMessage({
      message: "编辑",
      type: "success",
    });
  }

  function handleDelete() {
    ElMessage({
      message: "删除",
      type: "success",
    });
  }

  function handlejump(event) {
    pagination.currentPage = Number(event.target.value);
  }

  function handleSelectionChange(checked) {
    checkedProducts = checked;
  }

  function handleBatchDelete() {
    if (checkedProducts.length === 0) {
      ElMessage({
        message: `请选择需要删除的产品`,
        type: "warning",
      });
    } else {
      ElMessage({
        message: `删除编号为${checkedProducts.map(item => item.productNo).join(", ")}的产品`,
        type: "success",
      });
    }
  }

  return {
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
  };
}
