<template>
  <el-container>
    <el-aside>
      <h1 class="title">电商管理后台</h1>
      <CommonMenu />
    </el-aside>
    <el-container>
      <el-header><CommonHeader /></el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="item in breadcrumbs"
            :key="item.title"
            :to="{ path: item.path }"
          >
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in" appear>
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonMenu from "@/components/layout/CommonMenu";
import CommonHeader from "@/components/layout/CommonHeader";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    CommonMenu,
    CommonHeader,
  },
  setup() {
    const store = useStore();
    const breadcrumbs = computed(() => store.state.breadcrumbs);

    return {
      breadcrumbs,
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #000;
  color: #fff;
  border-right: 1px solid #fff;
}

.el-header {
  box-shadow: 2px 0 2px 2px #efefef;
}
</style>
