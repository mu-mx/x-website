// 搜索
const searchs = {
  title: "搜索",
  data: [
    {
      text: "bing",
      url: "https://cn.bing.com/",
      src: "https://cn.bing.com/sa/simg/favicon-2x.ico",
    },
    {
      text: "google",
      url: "https://www.google.com/",
      src: "https://images.frontendjs.com/google.png?imageView2/2/h/60",
    },
    {
      type: "line",
    },
    {
      text: "猫爪导航",
      url: "https://www.v2fy.com/",
    },
    {
      text: "今日热榜",
      url: "https://tophub.today/",
    },
  ],
};

// 开发工具
const tools = {
  title: "开发工具",
  data: [
    {
      src: "https://fanyi-cdn.cdn.bcebos.com/static/translation/img/favicon/favicon-32x32_ca689c3.png",
      text: "百度翻译",
      url: "https://fanyi.baidu.com/",
    },
    {
      src: "https://shared.ydstatic.com/fanyi/fanyi-ad-place/online/0.0.11/images/logo_cidian.png",
      text: "有道翻译",
      url: "https://fanyi.youdao.com/",
    },

    {
      text: "腾讯软件",
      url: "https://pc.qq.com/",
    },

    {
      type: "line",
    },

    {
      src: "https://static.clewm.net/static/images/favicon.ico",
      title: "草料二维码",
      text: "草料二维码",
      url: "https://cli.im/",
    },
    {
      src: "https://tinypng.com/images/favicon.ico",
      text: "图片压缩 - tin",
      title: "图片压缩",
      url: "https://tinypng.com/",
    },

    {
      src: "https://lhcdn.lanhuapp.com/web/static/favicon.ico?v=2",
      text: "蓝湖",
      url: "https://lanhuapp.com/web/",
    },

    {
      type: "line",
      text: "办公文档",
    },

    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
      text: "语雀-蓝晨",
      title: "语雀文档",
      url: "https://www.yuque.com/lcer",
    },
    {
      text: "掘金",
      title: "掘金",
      url: "https://juejin.cn/",
    },
    {
      src: "https://images.frontendjs.com/github.png?imageView2/2/h/30",
      text: "github",
      title: "github",
      url: "http://github.com/",
    },
    {
      src: "https://gitee.com/assets/favicon_message.ico?1581387642851",
      text: "码云",
      title: "码云",
      url: "https://gitee.com/",
    },
    {
      text: "CODING",
      title:
        "Coding.net 是一个面向开发者的云端开发平台，提供 Git/SVN 代码托管、任务管理、在线 WebIDE、Cloud Studio、开发协作、文件管理、Wiki 管理、提供个人服务及企业版本的服务",
      url: "https://recdar-code.coding.net/vcs/depots",
    },
    {
      src: "https://static.zhihu.com/heifetz/favicon.ico",
      text: "知乎",
      title: "知乎",
      url: "https://www.zhihu.com/",
    },

    {
      type: "line",
      text: "cdn",
    },

    {
      src: "https://www.bootcdn.cn/assets/ico/favicon.ico?1644166305141",
      text: "BootCDN",
      title: "BootCDN 稳定、快速、免费的前端开源项目 CDN 加速服务",
      url: "https://www.bootcdn.cn/",
    },
    {
      text: "CDNJS",
      title:
        "cdnjs是一个免费和开源的CDN服务，超过12.5%的网站信任，每月服务超过2000亿次请求，由Cloudflare提供支持。",
      url: "https://cdnjs.com/",
    },
    {
      text: "Staticfile",
      title:
        "此仓库由国内优秀的云存储服务商 七牛云 提供存储和加速赞助。同步国外 CDNJS 源站，同时由国内开源贡献值提交其它有价值的库。感谢所有开源库作者和挖掘者的努力。",
      url: "http://www.staticfile.org/",
    },
    {
      text: "UNPKG",
      title:
        "Unpkg是npm上所有内容的快速、全球内容交付网络。使用它可以快速、轻松地从任何包加载任何文件，使用URL",
      url: "https://unpkg.com/",
    },
    {
      text: "jsdelivr",
      url: "https://www.jsdelivr.com/",
    },
    {
      text: "jQ-CDN",
      title: "jQuery CDN -最新稳定版本",
      url: "http://code.jquery.com/",
    },
    {
      text: "360",
      title:
        "360 前端静态资源库是由奇舞团支持并维护的开源项目免费 CDN 服务，支持 HTTPS 和 HTTP/2，囊括上千个前端资源库和 Google 字体库。",
      url: "https://cdn.baomitu.com/",
    },
    {
      text: "字节跳动cdn",
      url: "https://cdn.bytedance.com/",
    },

    {
      type: "line",
      text: "React资源文档",
    },

    {
      text: "React资源",
      title: "React学习资源汇总",
      url: "https://github.com/tsrot/study-notes/blob/master/React%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E6%B1%87%E6%80%BB.md",
    },
    {
      text: "ReactHook",
      title: "React Hooks全面理解教程-前端开发博客",
      url: "http://caibaojian.com/react-hooks.html#t8",
    },
    {
      text: "fb的crud",
      title: "firebase 的 firestore 使用例子",
      url: "https://github.com/firebase/snippets-web/blob/8a72018c094b2d48ecbf1690787b94a01ee8fab4/firestore/test.firestore.js#L334-L355",
    },
    {
      text: "react单测",
      title: "react单元测试和集成测试",
      url: "https://blog.csdn.net/kuangshp128/article/details/119320875",
    },

    {
      type: "line",
    },

    {
      src: "https://www.aconvert.com/favicon.ico",
      text: "格式转换",
      url: "https://www.aconvert.com/cn/",
    },
    {
      src: "https://caniuse.com/img/favicon-128.png",
      text: "web兼容性",
      url: "https://caniuse.com/flexbox",
    },
    {
      src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-39734fbc-b241-4d89-ad87-0befd655e266/fbe27402-b82c-4e0b-b74b-309720a34d17.ico",
      text: "中国色",
      url: "http://zhongguose.com/",
    },
    {
      src: "https://sunpma.com/other/rgb/favicon.ico",
      text: "颜色转换",
      url: "https://sunpma.com/other/rgb/",
    },
    {
      src: "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
      text: "生成精灵图",
      url: "https://www.toptal.com/developers/css/sprite-generator",
    },
    {
      src: "http://www.m3u8.tv/favicon.ico",
      text: "m3u8",
      url: "http://www.m3u8.tv/",
    },
    {
      src: "https://ps.gaoding.com/favicon.ico",
      text: "在线ps",
      url: "https://ps.gaoding.com/#/",
    },
    {
      src: "https://www.pixilart.com/images/favicon/favicon-32x32.png?v=jw6qNMPWz4",
      text: "像素风设计",
      url: "https://www.pixilart.com/draw",
    },
    {
      src: "https://tool.lu/favicon.ico",
      text: "在线工具",
      url: "https://tool.lu/",
    },

    {
      src: "https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico",
      text: "爱给",
      url: "https://www.aigei.com/",
    },
    {
      src: "https://wallhaven.cc/favicon.ico",
      title: "网络上最好的壁纸！",
      text: "WallHaven",
      url: "https://wallhaven.cc/",
    },

    {
      text: "ts 语法解释器",
      url: "https://www.typescriptlang.org/",
    },
    {
      text: "ts AST Viewer",
      url: "https://ts-ast-viewer.com/",
    },
    {
      text: "astexplorer AST",
      url: "https://astexplorer.net/",
    },

    {
      type: "line",
    },
  ],
};

// 框架库
const clas = {
  title: "框架库",
  data: [
    {
      type: "line",
      text: "Vue",
    },
    /* Vue */
    {
      src: "https://cn.vuejs.org/images/logo.svg",
      text: "vue-Cli",
      title: "Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统",
      url: "https://cli.vuejs.org/zh/guide/",
    },
    {
      src: "https://cn.vuejs.org/images/logo.svg",
      title: "Vue.js 的官方路由",
      text: "vue-Router",
      url: "https://router.vuejs.org/zh/",
    },
    {
      src: "https://cn.vuejs.org/images/logo.svg",
      title: " Vue.js 应用程序开发的状态管理模式 + 库",
      text: "vue-Vuex",
      url: "https://vuex.vuejs.org/zh/",
    },
    {
      src: "https://cn.vuejs.org/images/logo.svg",
      title: "基本Vue合成实用程序集合",
      text: "vueUse",
      url: "https://vueuse.org/",
    },
    {
      src: "https://pinia.vuejs.org/logo.png",
      title: "Pinia 是 Vue 的专属状态管理库",
      text: "Pinia",
      url: "https://pinia.vuejs.org/",
    },

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
      text: "React",
    },

    /* React */

    {
      text: "react-router",
      title: "react 的官方路由",
      url: "https://reactrouter.com/en/main",
    },
    {
      text: "react-router v5",
      title: "react 的官方路由 v5",
      url: "https://v5.reactrouter.com/web/guides/quick-start",
    },
    {
      src: "https://www.mobxjs.com/img/favicon.png",
      text: "mobx",
      title: "MobX 是一个经过战火洗礼的库,使得状态管理变得简单和可扩展",
      url: "https://cn.mobx.js.org/",
    },
    {
      src: "https://ahooks.gitee.io/simple-logo.svg",
      text: "ahooks",
      title: "一套高质量可靠的 React Hooks 库",
      url: "https://ahooks.gitee.io/zh-CN",
    },
    {
      text: "formilyjs",
      url: "https://v2.formilyjs.org/zh-CN",
      title: "阿里巴巴统一前端表单解决方案",
    },
    {
      text: "procomponents",
      url: "https://procomponents.ant.design/",
      title: "让中后台开发更简单",
    },

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

    {
      src: "https://ng.ant.design/assets/img/logo.svg",
      text: "Antd Angular",
      url: "https://ng.ant.design/docs/introduce/zh",
      title: "遵循 Ant Design 设计规范的 Angular UI 组件库",
    },

    {
      type: "line",
      text: "babel",
    },

    {
      text: "babel",
      url: "https://www.babeljs.cn/",
      title: "今天就开始使用下一代的 JavaScript 语法编程吧！",
    },
    {
      text: "ESLint",
      url: "http://eslint.cn/",
      title: "可组装的JavaScript和JSX检查工具",
    },

    {
      type: "line",
      text: "基础工具库",
    },

    /* Base */
    {
      text: "axios",
      url: "http://www.axios-js.com/",
      title: "易用、简洁且高效的http库",
    },
    {
      src: "https://www.lodashjs.com/img/favicon.ico",
      text: "lodash",
      url: "https://www.lodashjs.com/",
      title: "一致性、模块化、高性能的 JavaScript 实用工具库",
    },
    {
      src: "https://dayjs.fenxianglu.cn/assets/favicon.png",
      title: "Day.js是一个极简的JavaScript库",
      text: "dayjs",
      url: "https://dayjs.fenxianglu.cn/",
    },
    {
      text: "Moment",
      title: "JavaScript 日期处理类库",
      url: "http://momentjs.cn/",
    },
    {
      text: "swiper",
      url: "https://3.swiper.com.cn/",
      title: "开源、免费、强大的移动端触摸滑动插件",
    },

    {
      type: "line",
      text: "计算库",
    },

    {
      text: "mockjs",
      url: "http://mockjs.com/",
      title: "生成随机数据，拦截 Ajax 请求",
    },
    {
      src: "https://bennettfeely.com/ztext/img/icon/favicon-32x32.png",
      text: "ztext",
      title: "适用于web的3D排版。适用于所有字体。",
      url: "https://bennettfeely.com/ztext/",
    },
    {
      src: "https://mathjs.org/favicon.ico",
      text: "mathjs",
      title: "一个广泛的JavaScript和Node.js数学库",
      url: "https://mathjs.org/",
    },

    {
      src: "https://pqina.nl/favicon.ico",
      title: "Flip是网络上最先进的翻转计数器插件",
      text: "flip",
      url: "https://pqina.nl/flip/#nutshell",
    },
    {
      text: "notyf",
      url: "https://carlosroso.com/notyf/",
      title:
        "用于 toast 通知的简约 JavaScript 库。响应式，A11Y，无依赖。很小 (~3KB)",
    },
    {
      src: "https://ejs.bootcss.com/assets/images/ejs-logo.png",
      text: "ejs",
      title: "高效的嵌入式 JavaScript 模板引擎",
      url: "https://ejs.bootcss.com/",
    },

    {
      src: "https://printjs.crabbly.com/assets/favicon.ico",
      title: "一个小的javascript库，用于帮助从web打印",
      text: "printjs",
      url: "https://printjs.crabbly.com/",
    },

    {
      src: "https://www.html5plus.org/favicon.ico",
      text: "h5Api",
      title: "HTML5+规范",
      url: "https://www.html5plus.org/doc/h5p.html",
    },
    {
      src: "https://cssvalues.com/favicon.ico",
      text: "css 属性速查",
      url: "https://cssvalues.com/",
    },
    {
      src: "https://static.runoob.com/images/favicon.ico",
      text: "css 选择器",
      url: "https://www.runoob.com/cssref/css-selectors.html",
    },
    {
      text: "js 一行代码",
      url: "https://1loc.dev/",
    },
    {
      src: "https://overapi.com/favicon.ico",
      text: "overapi",
      url: "https://overapi.com/",
      title: "程序员备忘录文档",
    },
    {
      text: "notneedjquery",
      url: "youmightnotneedjquery.com/#json",
      title: "你可能不需要jQuery",
    },
  ],
};

export default {
  searchs,
  tools,
  clas,
};
