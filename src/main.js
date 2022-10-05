import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/assets/less/reset.less";
import "@/assets/less/common.less";
import "@/assets/less/transition.less";

const app = createApp(App);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(store).use(router).mount("#app");
