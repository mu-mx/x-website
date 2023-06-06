import { defineConfig } from "umi";

// console.log('process.env -> :', process.env)
console.log("process.env.UMI_ENV -> :", process.env.UMI_ENV);
console.log("process.env.BASE_API_URL -> :", process.env.BASE_API_URL);

export default defineConfig({
  mock: false,
  npmClient: "pnpm",

  plugins: [
    "@umijs/plugins/dist/antd",
    "@umijs/plugins/dist/layout",
    "@umijs/plugins/dist/request",
  ],
  request: {},
  antd: {
    configProvider: {},
  },
  layout: {
    title: "x-admin",
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/category", name: "分类管理", component: "category" },
    { path: "/site", name: "网站管理", component: "site" },
    { path: "/login", component: "login" },
  ],
});
