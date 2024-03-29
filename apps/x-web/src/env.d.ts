/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "element-plus/dist/locale/en.mjs";

declare interface Window {
  ElementPlusIconsVue: any;
  ElementPlusLocaleZhCn: any;
  ElementPlus: any;
  dayjs: any;
  dayjs_locale_zh_cn: any;
  PinyinMatch: any;
}
