import { getThemeConfig } from "@sugarat/theme/node";

const baseUrl = "https://docs.codepzj.cn";
const RSS = {
  title: "浩瀚星河的文档",
  baseUrl,
  copyright: "Copyright (c) 2024-2025, 浩瀚星河",
};
const blogTheme = getThemeConfig({
  RSS,
  author: "浩瀚星河",
  mermaid: true,
  search: false,
  themeColor: "vp-green",
  recommend: false,
  comment: {
    type: "giscus",
    options: {
      repo: "codepzj/docs-comment",
      repoId: "R_kgDONmy5_Q",
      category: "Show and tell",
      categoryId: "DIC_kwDONmy5_c4ClzWq",
      inputPosition: "top",
    },
    mobileMinify: true,
  },
});

export { blogTheme };
