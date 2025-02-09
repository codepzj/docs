import type { NavData } from "./types";

export const NAV_DATA: NavData[] = [
  {
    title: "社区",
    items: [
      {
        title: "Github",
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
    ],
  },
  {
    title: "Golang",
    items:[
      {
        icon: "https://go.dev/images/favicon-gopher.png",
        title: "Go 官网",
        desc: "Go 语言官方网站",
        link: "https://go.dev",
      },
      {
        icon: "https://gin-gonic.com/favicons/favicon.ico",
        title: "Gin",
        desc: "Go 最流行的 Web 框架",
        link: "https://gin-gonic.com",
      },
      {
        icon: "https://gorm.io/gorm.svg",
        title: "GORM",
        desc: "优秀的 Go ORM 库",
        link: "https://gorm.io",
      },
      {
        icon: "https://goframe.org/statics/image/favicon.ico",
        title: "GoFrame",
        desc: "一款模块化、高性能、企业级的 Go 基础开发框架",
        link: "https://goframe.org",
      },
      {
        icon: "https://iris-go.com/images/icon.svg",
        title: "Iris",
        desc: "Go 语言最快的 HTTP/2 Web 框架",
        link: "https://iris-go.com",
      },
      {
        icon: "https://echo.labstack.com/favicon.ico",
        title: "Echo",
        desc: "高性能、简约的 Go Web 框架",
        link: "https://echo.labstack.com",
      }
    ]
  },
  {
    title: "React",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org",
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com",
      },
      {
        icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org",
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design",
      },
      {
        icon: "https://docs.pmnd.rs/apple-touch-icon.png",
        title: "Zustand",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        icon: "https://valtio.pmnd.rs/favicon.ico",
        title: "Valtio",
        desc: "makes proxy-state simple for React and Vanilla",
        link: "https://valtio.pmnd.rs",
      },
      {
        icon: "https://jotai.org/favicon.svg",
        title: "Jotai",
        desc: "primitive and flexible state management for React",
        link: "https://jotai.org",
      },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org",
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org",
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN",
      },
    ],
  },
  {
    title: "Vue",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
        link: "https://router.vuejs.org/zh",
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh",
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com",
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org",
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant",
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui",
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com",
      },
    ],
  },
];
