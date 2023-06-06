import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

import "~/styles/index.scss";
import "uno.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(window.ElementPlus, {
  locale: window.ElementPlusLocaleZhCn,
});

for (const [key, component] of Object.entries(window.ElementPlusIconsVue)) {
  app.component(key, component as any);
}
app.mount("#app");
