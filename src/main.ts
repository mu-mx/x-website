import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// import "~/styles/element/index.scss";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

// import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);

for (const [key, component] of Object.entries(window.ElementPlusIconsVue)) {
  app.component(key, component as any);
}
app.mount("#app");
