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
      imgSrc: "https://www.sass.hk/favicon.ico",
      text: "sass",
      url: "https://www.sass.hk/",
    },
    {
      imgSrc: "https://less.bootcss.com/public/ico/favicon.ico",
      text: "less",
      url: "https://less.bootcss.com/",
    },
    {
      imgSrc: "https://www.stylus-lang.cn/favicon.ico",
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
      imgSrc: "https://www.tslang.cn/assets/images/icons/favicon.ico",
      text: "Typescript",
      url: "https://www.tslang.cn/",
    },
    {
      imgSrc: "https://jquery.cuishifeng.cn/images/favicon.ico",
      text: "jquery",
      title: "jquery 文档",
      url: "https://jquery.cuishifeng.cn/",
    },
  ],
};

// 工具网址
const tools = {
  title: "工具网址",
  data: [
    {
      type: "line",
      text: "工具网址",
    },

    {
      text: "Sass/Less转换CSS",
      title: "Sass/Less在线转换工具 CSS转Sass Sass转换器 | Sass中文网",
      url: "https://www.sass.hk/css2sass/",
    },
    {
      text: "gitignore",
      title: "为你的项目创建必要的 .gitignore 文件",
      url: "https://www.toptal.com/developers/gitignore",
    },
    {
      text: "All转换工具",
      title: "在线格式转换 All2All | 免费在线格式转换工具 免费在线转换工具",
      url: "http://www.alltoall.net/",
    },
    {
      text: "工具大全",
      title: "工具123 - 在线工具大全_免下载_全在线小工具网站",
      url: "http://www.gjw123.com/",
    },
    {
      text: "正则可视化",
      title: "Regulex：正则可视化",
      url: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
    },
    {
      text: "html转js字符串",
      title: "HTML代码转换为JavaScript字符串-前端开发转换工具",
      url: "http://tools.jb51.net/transcoding/html2js",
    },
    {
      text: "md5破解",
      title: "md5在线解密破解,md5解密加密",
      url: "https://www.cmd5.com/",
    },
    {
      text: "vscode模板",
      title: "编辑器代码模板生成",
      url: "https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode",
    },
    {
      text: "程序员笔记",
      title: "程序员笔记 - 分享程序员的知识字典！",
      url: "https://www.knowledgedict.com/",
    },
    {
      text: "消除图片背景",
      title: "消除图片中的背景 – remove.bg",
      url: "https://www.remove.bg/zh/upload",
    },
    {
      text: "前端进阶仓库",
      title: "前端进阶不可错过的 10 个 Github 仓库",
      url: "https://mp.weixin.qq.com/s/uP2Ccc4rFa8H5ZWIGIx8yw",
    },
    {
      text: "学习sql",
      title: "一些学习sql的网站_小愚就是小小呀的博客-CSDN博客_学习sql的网站",
      url: "https://blog.csdn.net/qq_37627820/article/details/108378098",
    },
    {
      text: "图解前端",
      title: "大前端面试宝典 - 图解前端",
      url: "https://lucifer.ren/fe-interview/#/?id=%e5%85%b3%e4%ba%8e%e6%88%91",
    },
    {
      text: "VIP视频解析",
      title: "夜雨聆风VIP视频解析",
      url: "https://vip.yeyulingfeng.com/index.html",
    },
    {
      text: "md编辑器",
      title: "markdown编辑器 - 在线工具",
      url: "https://tool.lu/markdown/",
    },
    {
      text: "生成readme",
      title: "生成 readme 的-readme.so",
      url: "https://readme.so/editor",
    },
    {
      text: "vscode-web",
      title: "Visual Studio Code - web",
      url: "https://vscode.dev/",
    },
    {
      text: "npm包趋势",
      title: "npm多包比较趋势",
      url: "https://www.npmtrends.com/",
    },
    {
      text: "json转ts",
      title: "在线JSON转typescript工具 - ToolTT在线工具箱",
      url: "https://tooltt.com/json2typescript/",
    },
    {
      text: "监控系统—SDK",
      title: "【第2621期】从零开始搞监控系统 —— SDK",
      url: "https://mp.weixin.qq.com/s/y6oZuej94mR6KkkI3bAQag",
    },
    {
      text: "git太慢",
      title: "git clone 失败或速度慢_BonnieZhang.的博客-CSDN博客_git太慢",
      url: "https://blog.csdn.net/m0_47700906/article/details/126225169",
    },
    {
      text: "Code预览工具",
      title: "CodeRun_一个纯前端实现的在线代码运行预览工具",
      url: "https://wanglin2.github.io/code-run-online/#/",
    },
    {
      text: "网站测速",
      title: "多个地点ping[translate.google.cn]服务器-网站测速-站长工具",
      url: "https://ping.chinaz.com/translate.google.cn",
    },
    {
      text: "俄罗斯翻译",
      title:
        "localhost name – Yandex Translate – dictionary and online translation\n      between English and over 90 other languages.",
      url: "https://translate.yandex.com/?lang=en-zh&text=localhost%20name",
    },

    {
      text: "前端单测",
      title: "前端单元测试介绍 - 简书",
      url: "https://www.jianshu.com/p/3beaf7c2593e",
    },
    {
      text: "Java指南",
      title: "JavaGuide（Java学习&&面试指南）",
      url: "https://javaguide.cn/home.html",
    },
    {
      text: "idea激活码",
      title:
        "IDEA激活码,IDEA激活码2022,IDEA永久激活码_IDEA激活码2022和2023IDEA激活码,IDEA激活码2022,IDEA注册码,IDEA永久破解,Pycharm激活码,Webstorm激活码",
      url: "https://www.ajihuo.com/idea/4222.html",
    },

    {
      text: "微信助手",
      title: "微信文件传输助手网页版",
      url: "https://filehelper.weixin.qq.com/",
    },
    {
      text: "Chrome扩展",
      title: "chrdow插件_Chrome扩展插件商店_优质crx应用",
      url: "https://chrdow.com/",
    },

    {
      type: "line",
      text: "有用地址",
    },

    {
      text: "前端月报",
      title: "如何提交 · JS前端开发群月报 · 看云",
      url: "https://www.kancloud.cn/jsfront/month/227309",
    },
    {
      text: "FE.D博客园",
      title: "FE.Deuce - 博客园",
      url: "http://www.cnblogs.com/oicb/",
    },
    {
      text: "CodeSandbox",
      title: "CodeSandbox 在线编辑器",
      url: "https://codesandbox.io/s/new",
    },
    {
      text: "StackBlitz",
      title: "StackBlitz 在线编辑器",
      url: "https://stackblitz.com/",
    },
    {
      text: "华为镜像",
      title: "华为开源镜像站_软件开发服务_华为云",
      url: "https://mirrors.huaweicloud.com/",
    },
    {
      text: "jdk下载",
      title: "jdk下载",
      url: "https://www.injdk.cn/",
    },
    {
      text: "mongo下载",
      title: "mongodb-下载",
      url: "http://dl.mongodb.org/dl/win32/x86_64",
    },
    {
      text: "清华镜像",
      title: "清华大学开源软件镜像站 | Tsinghua Open Source Mirror",
      url: "https://mirrors.tuna.tsinghua.edu.cn/",
    },
    {
      text: "阿里云镜像",
      title: "阿里云镜像",
      url: "https://developer.aliyun.com/mirror/",
    },
    {
      text: "创建webpack配置",
      title: "创建webpack配置 - starting a new webpack or project",
      url: "https://createapp.dev/",
    },
    {
      text: "阿里云主机管理平台",
      title: "阿里云主机管理平台",
      url: "https://cp.aliyun.com/?spm=cp-aliyun-com.10698423.119.2.71d67231XjG2kp#/siteHome",
    },
    {
      text: "阿里云-主机",
      title: "阿里云-主机",
      url: "https://wanwang.aliyun.com/?spm=cp-aliyun-com.10698423.0.0.767876f2FwnYyG&accounttraceid=5a4f76c5-15fd-436e-a6c9-c87975caa2e1",
    },
    {
      text: "谷歌字体",
      title: "Google Fonts | 谷歌字体中文版 | GoogleFonts",
      url: "http://googlefonts.cn/?selection.family=Montserrat",
    },
    {
      text: "万词王",
      title: "万词王 WantWords",
      url: "https://wantwords.net/",
    },
    {
      text: "休息片刻",
      title: "休息片刻",
      url: "http://106.55.105.239:10001/",
    },
    {
      text: "js使用状态",
      title: "js的全球使用状态",
      url: "https://2017.stateofjs.com/",
    },
    {
      text: "PPChart图表",
      title: "PPChart - 让图表更简单",
      url: "http://ppchart.com/#/",
    },
    {
      text: "生成模拟数据",
      title: "批量生成模拟数据在线工具—工具猫",
      url: "http://www.toolscat.com/dev/data-generator",
    },
    {
      text: "生成随机数",
      title: "在线随机数生成器",
      url: "https://www.lddgo.net/string/randomnumber",
    },
    {
      text: "生成随机日期时间",
      title: "随机日期时间生成器 - 爱问 | 批处理",
      url: "https://cnnqr.com/randtime.html",
    },
    {
      text: "图片文字提取",
      title: "图片转文字在线 - 图片文字提取 - 网页OCR文字识别 - 白描网页版",
      url: "https://web.baimiaoapp.com/",
    },
    {
      text: "sublime激活",
      title:
        "导入程序后，搜索80 38 00更改为FE 00 90(第一个匹配到的),保存下来就行",
      url: "https://hexed.it/",
    },
    {
      type: "line",
      text: "chatGPT",
    },
    {
      text: "poe",
      title: "poe 国外机器人网站  需要翻墙",
      url: "https://poe.com/ChatGPT",
    },
    {
      text: "ph-code",
      title: "chat gpt code版本  平替版本 不用fq 不用等待，支持联网搜索功能",
      url: "https://phind.com/",
    },
    {
      text: "chatgpt私",
      title: "QQ群的 chat gpt 私人小站 qq群 比较慢 不推荐 要登陆了  开始收费",
      url: "https://qccq.cc/",
    },
    {
      text: "mossai",
      title: "MossAI chat ",
      url: "https://chat.mossai.me/#/chat",
    },
    // {
    //   text: "free.top",
    //   title: "free.anzz.top  vpn 可访问 ",
    //   url: "https://free.anzz.top/#/chat/1002",
    // },
    {
      text: "geekctf",
      title:
        "域名被dns污染，最新域名是  无任何群，无任何套路，最新永久域名https://chat.geekgpt.site/ ",
      // url: "https://chat.geekctf.cf/#/chat",
      url: "https://chat.geekgpt.site/#/chat/1002",
    },

    {
      text: "aichatos",
      title:
        "永久免费用于学习和测试，支持上下文，支持开启关闭联网模式，支持保存会话 不行就+1",
      url: "https://chat4.aichatos.com",
    },
    {
      text: "Hello-AI",
      title: "这个是个帮助自己链接到广阔AI世界的项目，也希望能帮助到你",
      url: "https://hello-ai.anzz.top/",
    },
    {
      text: "chat0",
      title:
        "本网站各域名经常被封  https://cdn.muspimerol.site/%E6%9C%80%E6%96%B0%E5%9F%9F%E5%90%8D.html ",
      url: "https://chat0.bnu120.space/",
    },
    {
      text: "chatbot",
      title: "vpn 可访问",
      url: "https://chatbot.theb.ai/#/chat",
    },
    {
      text: "chat-vip",
      title: "vpn 可访问 chat-vip",
      url: "https://cool-js.com/ai/chat-vip/index.html#/",
    },
    {
      text: "xcbl",
      title:
        "老北鼻AI AI工具集 导航 近期，用户访问量激增，官方大量处理账号，可能导致网站不稳定、 网页崩溃等情况",
      url: "https://gpt.xcbl.cc/",
    },

    {
      text: "qdymys",
      title: "小站 先观察到",
      url: "https://chatgpt.qdymys.cn/#/chat/1002",
    },
    {
      text: "chatgpt-cn",
      title: "每天可免费使用500个Token（约250个中文）",
      url: "https://chatgpt-cn.co/",
    },
    {
      text: "chatgpt org",
      title: "每天 15 条记录",
      url: "https://chatgpt.org/chat",
    },

    {
      text: "prompts",
      title: "Chatgpt 常用prompt  来自GITHUB: ChatGPT 中文调教指南",
      url: "https://github.com/PlexPt/awesome-chatgpt-prompts-zh/blob/main/prompts-zh.json",
    },

    {
      text: "调教gpt",
      title: "160 多种 prompt 提示词指令合集",
      url: "https://www.bytearch.com/questions/ai/",
    },

    // {
    //   text: "sishuokeji",
    //   title: "Based on OpenAI API (gpt-3.5-turbo)基于全球墨菲特大脑总算力开发.",
    //   url: "https://sishuokeji.com/",
    //   url: "https://supremes.pro/",
    // },

    // {
    //   text: "binjiechat",
    //   title: "binjie chat 支持开启关闭联网模式",
    //   url: "https://chat.binjie.site:7777/#/chat/",
    // },

    // {
    //   text: "toolkit",
    //   title:"欢迎进交流反馈群，解锁更多prompt玩法",
    //   url: "https://ai.toolkit.show/",
    // },

    // {
    //   text: "wolai",
    //   title:"chat gpt 共享账号",
    //   url: "https://www.wolai.com/9EAdjRYzRB5fL975RTfk3b",
    // },
  ],
};

/* Java 工具集合 */
const java = {
  title: "Java",
  data: [
    {
      type: "line",
      text: "工具",
    },
    {
      text: "java-sql工具",
      title:
        "JSON生成Java实体类   SQL生成Java代码  JSON转C#实体类   mysql转Java实体类",
      url: "https://www.bejson.com/",
    },
    {
      text: "json-sql工具",
      title: "yupi   结构化 SQL 生成器",
      url: "http://sql.yupi.icu/",
    },
    {
      type: "line",
      text: "文档",
    },
    {
      text: "stream",
      title: "Java 学习 stream ",
      url: "https://github.com/winterbe/java8-tutorial/blob/master/src/com/winterbe/java8/samples/stream/Streams7.java",
    },
    {
      text: "w3cschool",
      title: "w3cschool 文档",
      url: "https://www.w3cschool.cn/java/dict",
    },
    {
      text: "apidocs",
      title: "java  js 详细api文档  常用",
      url: "https://tool.oschina.net/apidocs/apidoc?api=jdk-zh",
    },
    {
      text: "语言学习文档",
      title: "书籍分类 - 记录分享，聚合链接知识。打破知识孤岛，链接创造价值。",
      url: "https://geekdaxue.co/",
    },
    {
      text: "java路线",
      title: "Java 学习路线",
      url: "https://www.cnblogs.com/yupi/p/15166218.html",
    },
  ],
};

export default {
  docs,
  tools,
  java,
};
