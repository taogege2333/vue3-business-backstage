import { reactive } from "vue";

export default function useForm() {
  // 表单
  const form = reactive({
    productName: "",
    createTime: "",
  });

  // 表单提交
  function onSubmit() {
    console.log(form);
  }

  // 日期禁用状态
  function disabledDate(date) {
    return date > new Date();
  }

  return {
    form,
    onSubmit,
    disabledDate,
  }
}
