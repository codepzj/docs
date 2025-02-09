import { defineConfig } from "vitepress";
import nav from "./layout/nav";
import sidebar from "./layout/sidebar";
import search from "./layout/search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "浩瀚星河",
  description: "实用的学习笔记、项目教程",
  lang: "zh-CN",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.jpg",
    nav,
    sidebar,
    search,
    socialLinks: [
      { icon: "github", link: "https://github.com/codepzj/docs" },
      { icon: "gitee", link: "https://gitee.com/codepzj" },
      { icon: "twitter", link: "https://twitter.com/codepzj" },
      { icon: "gmail", link: "mailto:email@codepzj.cn" },
    ],
    editLink: {
      pattern: "https://github.com/codepzj/docs/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 浩瀚星河`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: "deep",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  sitemap: {
    hostname: "https://docs.codepzj.cn",
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: "one-light",
      dark: "one-dark-pro",
    },
  },
  outDir: "../dist",
});
