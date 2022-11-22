// 官方文档
const docs = {
  title: "官方文档",
  data: [
    /* vue */
    {
      type: "line",
      text: "vue",
    },
    {
      text: "vue2",
      url: "https://cn.vuejs.org/",
      title: "渐进式 JavaScript 框架",
    },
    {
      text: "vue3",
      url: "https://v3.cn.vuejs.org/",
      title: "渐进式 JavaScript 框架",
    },

    {
      text: "uniapp",
      title: "Vue 的跨端框架",
      url: "https://uniapp.dcloud.io/",
    },

    {
      text: "nuxtJs",
      url: "https://www.nuxtjs.cn/",
      title: "使用简便的Vue 框架",
    },
    {
      text: "vuePress",
      url: "https://vuepress.vuejs.org/zh/",
      title: "Vue 驱动的静态网站生成器",
    },

    /* react */
    {
      type: "line",
      text: "react",
    },

    {
      text: "React",
      url: "https://react.docschina.org/",
      title: "用于构建用户界面的 JavaScript 库",
    },
    {
      text: "react新",
      url: "https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx",
      title: "react-新文档-测试版",
    },

    {
      text: "React-native",
      url: "https://www.react-native.cn/",
      title: "一次学习，随处编写",
    },

    {
      text: "NextJs",
      url: "https://www.nextjs.cn/",
      title: "这是一个用于 生产环境的 React 框架",
    },

    {
      text: "Taro",
      url: "http://taro-docs.jd.com/taro/docs/README",
      title: "一个开放式跨端跨框架解决方案",
    },

    {
      text: "UmiJs3",
      title: "React-脚手架",
      url: "https://v3.umijs.org/zh-CN",
    },
    {
      text: "UmiJs4",
      title: "React-脚手架",
      url: "https://umijs.org/",
    },

    /* nodejs */
    {
      type: "line",
      text: "nodejs",
    },
    {
      text: "node",
      url: "http://nodejs.cn/",
    },
    {
      text: "express",
      url: "https://www.expressjs.com.cn/",
      title: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
    },
    {
      text: "egg",
      url: "https://eggjs.org/zh-cn/",
      title: "为企业级框架和应用而生",
    },
    {
      text: "koa",
      title: "阿里的node框架",
      url: "https://www.koajs.com.cn/",
    },

    /* css */
    {
      type: "line",
      text: "css",
    },
    {
      text: "tailwindcss",
      url: "https://www.tailwindcss.cn/",
      title: "无需离开您的HTML，即可快速建立现代网站。",
    },
    {
      src: "https://www.sass.hk/favicon.ico",
      text: "sass",
      url: "https://www.sass.hk/",
    },
    {
      src: "https://less.bootcss.com/public/ico/favicon.ico",
      text: "less",
      url: "https://less.bootcss.com/",
    },
    {
      src: "https://www.stylus-lang.cn/favicon.ico",
      text: "stylus",
      url: "https://www.stylus-lang.cn/",
    },

    /* 其他 */
    {
      type: "line",
      text: "其他",
    },
    {
      text: "Angular",
      url: "https://angular.cn/",
      title: "现代 Web 开发平台",
    },
    {
      text: "electron",
      url: "http://www.electronjs.org/",
      title: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
    },
    {
      text: "tauri",
      url: "https://tauri.app/zh/",
      title: "为多平台部署构建一个优化、安全和前端独立的应用。",
    },
    {
      text: "微信小程序",
      title: "微信小程序",
      url: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
    },
    {
      text: "flutter",
      url: "https://flutterchina.club/",
      title: "极速构建漂亮的原生应用",
    },
    {
      text: "Firebase",
      url: "https://firebase.google.com/docs/build",
      title: "Firebase 文档",
    },
    {
      text: "Python",
      url: "https://docs.python.org/zh-cn/3/",
      title: "Python 3.11.0 文档",
    },
    {
      src: "https://www.tslang.cn/assets/images/icons/favicon.ico",
      text: "Typescript",
      url: "https://www.tslang.cn/",
    },
    {
      src: "https://jquery.cuishifeng.cn/images/favicon.ico",
      text: "jquery",
      title: "jquery 文档",
      url: "https://jquery.cuishifeng.cn/",
    },
  ],
};

// ui框架
const uis = {
  title: "ui框架",
  data: [
    {
      type: "line",
      text: "vue",
    },
    /* vue */
    {
      text: "v2 element",
      title: "element vue2",
      url: "https://element.eleme.cn/#/zh-CN",
    },
    {
      text: "v3 element-plus",
      title: "element vue3",
      url: "https://element-plus.gitee.io/zh-CN/",
    },
    {
      title: "antd vue  2,3",
      text: "antd vue",
      url: "https://www.antdv.com/docs/vue/introduce-cn/",
    },
    {
      title: "vant vue2",
      text: "Vant2",
      url: "https://vant-contrib.gitee.io/vant/v2/#/zh-CN",
    },
    {
      title: "vant vue3",
      text: "Vant3",
      url: "https://vant-contrib.gitee.io/vant/v3/#/zh-CN",
    },
    {
      src: "https://www.uviewui.com/favicon.ico",
      text: "uview",
      title: "uView UI，是全面兼容nvue的uni-app生态框架",
      url: "https://www.uviewui.com/",
    },
    {
      src: "https://www.naiveui.com/assets/naivelogo.93278402.svg",
      text: "Naive UI",
      title:
        "一个 Vue 3 组件库 比较完整，主题可调，使用 TypeScript，快 有点意思",
      url: "https://www.naiveui.com/zh-CN/light",
    },
    {
      src: "https://varlet.gitee.io/varlet-ui/varlet_icon.png",
      title: "Varlet 是一个基于 Vue3 开发的 Material 风格移动端组件库",
      text: "varlet-ui",
      url: "https://varlet.gitee.io/varlet-ui/#/zh-CN/home",
    },

    {
      type: "line",
      text: "react",
    },

    /* react */
    {
      text: "antd react",
      title: "react 的 antd 框架",
      url: "https://ant.design/docs/react/introduce-cn",
    },
    {
      text: "antd-mobile",
      title: "react 的 antd 移动端框架",
      url: "https://mobile.ant.design/zh",
    },
    {
      src: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
      title: "字节跳动出品的企业级设计系统 react",
      text: "arco-design",
      url: "https://arco.design/react/docs/start",
    },
    {
      src: "https://mui.com/static/favicon.ico",
      title: "立即开始使用 React 和 Material-UI。",
      text: "MUI",
      url: "https://mui.com/zh/getting-started/installation/",
    },
    {
      text: "TDesign",
      title: "腾讯企业级设计体系",
      url: "https://tdesign.tencent.com/",
    },
    {
      src: "https://img12.360buyimg.com/imagetools/jfs/t1/101920/21/28459/834912/62870b04E0e1f20ec/17425bea5318a22c.png",
      text: "NutUI-JDT",
      url: "https://nutui.jd.com/jdt/#/",
      title: "京东科技移动端组件库",
    },

    {
      type: "line",
      text: "Angular",
    },

    /* Angular */

    {
      src: "https://ng.ant.design/assets/img/logo.svg",
      text: "Antd Angular",
      url: "https://ng.ant.design/docs/introduce/zh",
      title: "遵循 Ant Design 设计规范的 Angular UI 组件库",
    },
  ],
};

export default {
  docs,
  //   uis,
};
