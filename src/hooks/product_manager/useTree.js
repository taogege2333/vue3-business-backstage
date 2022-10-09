import { reactive, ref } from "vue";

export default function useTree() {
  // 当前选择的分类
  const productClassify = ref("");

  const defaultProps = reactive({
    label: "label",
    children: "children",
  });
  // 树形结构数据
  const treeData = reactive([
    {
      label: "商城分类列表",
      children: [
        {
          label: "蔬菜水果",
          children: [
            {
              label: "苹果",
              children: [],
            },
            {
              label: "香蕉",
              children: [],
            },
          ],
        },
        {
          label: "手机数码",
          children: [
            {
              label: "苹果手机",
              children: [],
            },
            {
              label: "小米手机",
              children: [],
            },
          ],
        },
        {
          label: "电脑配件",
          children: [
            {
              label: "显卡",
              children: [],
            },
            {
              label: "主板",
              children: [],
            },
          ],
        },
      ],
    },
  ]);

  // 树形节点点击事件
  function handleNodeClick(data) {
    productClassify.value = data.label;
    console.log(productClassify.value);
  }

  return {
    productClassify,
    defaultProps,
    treeData,
    handleNodeClick
  }
}
