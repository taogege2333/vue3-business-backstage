<template>
  <template v-for="menuItem in menu" :key="menuItem.id">
    <el-sub-menu
      v-if="menuItem.children && menuItem.children.length > 0"
      :index="menuItem.id"
    >
      <template #title>
        <span>{{ menuItem.text }}</span>
      </template>
      <MenuItem :menu="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.route">
      {{ menuItem.text }}
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menu: Array,
  },
};
</script>

<style lang="less" scoped>
.el-sub-menu.is-opened /deep/ .el-sub-menu__title {
  color: #fff !important;
}

.el-menu-item.is-active {
  background-color: #409eff;
}
</style>
