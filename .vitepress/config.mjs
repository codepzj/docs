import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "浩瀚星河",
  description: "实用的学习笔记、项目教程",
  lang: "zh-cn",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.jpg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        items: [
          { text: "golang文档", link: "/golang/入门指南.html" },
          { text: "gorm文档", link: "/gorm/index.html" },
        ],
      },
      {
        text: "大学笔记",
        items: [
          { text: "计算机图形学", link: "/university/计算机图形学.html" },
        ],
      },
      { text: "生活感悟", link: "/life.html" },
    ],

    sidebar: {
      "/golang/": [
        { text: "入门指南", link: "/golang/入门指南.html" },
        {
          text: "基本语法",
          items: [
            { text: "关键字", link: "/golang/基本语法/关键字.html" },
            { text: "字面量", link: "/golang/基本语法/字面量.html" },
            { text: "运算符", link: "/golang/基本语法/运算符.html" },
            { text: "字符串", link: "/golang/基本语法/字符串.html" },
            { text: "数组与切片", link: "/golang/基本语法/数组与切片.html" },
            { text: "包", link: "/golang/基本语法/包.html" },
            { text: "函数", link: "/golang/基本语法/函数.html" },
            { text: "指针", link: "/golang/基本语法/指针.html" },
            { text: "时间与日期", link: "/golang/基本语法/时间与日期.html" },
            { text: "锁", link: "/golang/基本语法/锁.html" },
          ],
        },
        {
          text: "进阶用法",
          items: [
            { text: "go-redis", link: "/golang/进阶用法/go-redis.html" },
            { text: "go-generics", link: "/golang/进阶用法/go-generics.html" },
          ],
        },
      ],
      "/gorm/": [
        { text: "GORM简介", link: "/gorm/index.html" },
        {
          text: "文档",
          items: [
            {
              text: "前言",
              items: [
                { text: "关于镜像", link: "/gorm/文档/前言/关于镜像.md" },
                { text: "V1 与 V2", link: "/gorm/文档/前言/V1与V2.md" },
                {
                  text: "3.0 发布说明",
                  link: "/gorm/文档/前言/3.0发布说明.md",
                },
              ],
              collapsed: true,
            },
            {
              text: "入门指南",
              items: [
                { text: "GORM指南", link: "/gorm/文档/入门指南/GORM指南.md" },
                { text: "模型定义", link: "/gorm/文档/入门指南/模型定义.md" },
                {
                  text: "连接数据库",
                  link: "/gorm/文档/入门指南/连接数据库.md",
                },
              ],
              collapsed: true,
            },
            {
              text: "CRUD接口",
              items: [
                { text: "创建", link: "/gorm/文档/CRUD接口/创建.md" },
                { text: "查询", link: "/gorm/文档/CRUD接口/查询.md" },
                { text: "高级查询", link: "/gorm/文档/CRUD接口/高级查询.md" },
                { text: "更新", link: "/gorm/文档/CRUD接口/更新.md" },
                { text: "删除", link: "/gorm/文档/CRUD接口/删除.md" },
                { text: "SQL构建器", link: "/gorm/文档/CRUD接口/SQL构建器.md" },
              ],
              collapsed: true,
            },
            {
              text: "关联",
              items: [
                { text: "BelongsTo", link: "/gorm/文档/关联/BelongsTo.md" },
                { text: "HasOne", link: "/gorm/文档/关联/HasOne.md" },
                { text: "HasMany", link: "/gorm/文档/关联/HasMany.md" },
                { text: "ManyToMany", link: "/gorm/文档/关联/ManyToMany.md" },
                { text: "实体关联", link: "/gorm/文档/关联/实体关联.md" },
                { text: "预加载", link: "/gorm/文档/关联/预加载.md" },
              ],
              collapsed: true,
            },
            {
              text: "教程",
              items: [
                { text: "Context", link: "/gorm/文档/教程/Context.md" },
                { text: "错误处理", link: "/gorm/文档/教程/错误处理.md" },
                { text: "链式调用", link: "/gorm/文档/教程/链式调用.md" },
                { text: "会话", link: "/gorm/文档/教程/会话.md" },
                { text: "钩子", link: "/gorm/文档/教程/钩子.md" },
                { text: "事务", link: "/gorm/文档/教程/事务.md" },
                { text: "数据库迁移", link: "/gorm/文档/教程/数据库迁移.md" },
                { text: "记录日志", link: "/gorm/文档/教程/记录日志.md" },
                { text: "DB", link: "/gorm/文档/教程/DB.md" },
                { text: "性能", link: "/gorm/文档/教程/性能.md" },
                {
                  text: "自定义数据类型",
                  link: "/gorm/文档/教程/自定义数据类型.md",
                },
                {
                  text: "查询范围Scope",
                  link: "/gorm/文档/教程/查询范围Scope.md",
                },
                { text: "约定", link: "/gorm/文档/教程/约定.md" },
                { text: "设置", link: "/gorm/文档/教程/设置.md" },
              ],
              collapsed: true,
            },
            {
              text: "高级主题",
              items: [
                { text: "GORM配置", link: "/gorm/文档/高级主题/GORM配置.md" },
                {
                  text: "Prometheus",
                  link: "/gorm/文档/高级主题/Prometheus.md",
                },
                { text: "复合主键", link: "/gorm/文档/高级主题/复合主键.md" },
                {
                  text: "多数据源DBResolver",
                  link: "/gorm/文档/高级主题/多数据源DBResolver.md",
                },
                { text: "安全", link: "/gorm/文档/高级主题/安全.md" },
                {
                  text: "数据库索引",
                  link: "/gorm/文档/高级主题/数据库索引.md",
                },
                { text: "暗示Hints", link: "/gorm/文档/高级主题/暗示Hints.md" },
                { text: "更新日志", link: "/gorm/文档/高级主题/更新日志.md" },
                { text: "约束", link: "/gorm/文档/高级主题/约束.md" },
                { text: "编写插件", link: "/gorm/文档/高级主题/编写插件.md" },
                { text: "编写驱动", link: "/gorm/文档/高级主题/编写驱动.md" },
              ],
              collapsed: true,
            },
          ],
        },
        {
          text: "gen",
          items: [
            {
              text: "开始使用",
              items: [{ text: "概览", link: "/gorm/gen/开始使用/概览.md" }],
              collapsed: true,
            },
            {
              text: "动态SQL",
              items: [
                { text: "概览", link: "/gorm/gen/动态SQL/概览.md" },
                { text: "注解", link: "/gorm/gen/动态SQL/注解.md" },
              ],
              collapsed: true,
            },
            {
              text: "DAO",
              items: [
                { text: "概览", link: "/gorm/gen/DAO/概览.md" },
                { text: "创建", link: "/gorm/gen/DAO/创建.md" },
                { text: "查询", link: "/gorm/gen/DAO/查询.md" },
                { text: "更新", link: "/gorm/gen/DAO/更新.md" },
                { text: "删除", link: "/gorm/gen/DAO/删除.md" },
                { text: "事务", link: "/gorm/gen/DAO/事务.md" },
                { text: "关联", link: "/gorm/gen/DAO/关联.md" },
              ],
              collapsed: true,
            },
            {
              text: "DatabaseToStructs",
              items: [
                {
                  text: "GenTool",
                  link: "/gorm/gen/DatabaseToStructs/GenTool.md",
                },
                { text: "概览", link: "/gorm/gen/DatabaseToStructs/概览.md" },
              ],
              collapsed: true,
            },
            {
              text: "教程",
              items: [
                { text: "GORMClause", link: "/gorm/gen/教程/GORMClause.md" },
              ],
              collapsed: true,
            },
          ],
        },
      ],
      "/university/": [
        { text: "计算机图形学", link: "/university/计算机图形学.html" },
      ],
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/codepzj/docs" }],
    editLink: {
      pattern: "https://github.com/codepzj/docs/edit/main/:path",
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
      level: "deep"
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
  markdown: {
    theme: {
      light: "one-light",
      dark: "one-dark-pro",
    },
    config: (md) => {
      md.use(timeline);
    },
  },
});
