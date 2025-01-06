import { getThemeConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
  mermaid: true,
  search: false,
  themeColor: "el-blue",
  author: "浩瀚星河",
  blog: false,
});

export { blogTheme };
