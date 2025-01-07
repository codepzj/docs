import { getThemeConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
  mermaid: true,
  search: false,
  themeColor: "el-blue",
  author: "浩瀚星河",
  blog: false,
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