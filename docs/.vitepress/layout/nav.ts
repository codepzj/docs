const nav = [
  { text: "首页", link: "/" },
  { text: "前端", items: [] },
  {
    text: "后端",
    items: [
      {
        text: "golang专栏",
        items: [
          { text: "golang文档", link: "/golang/入门指南.md" },
          { text: "gorm文档", link: "/gorm/index.md" },
          { text: "go学习日记", link: "/go_learn/air实现热重载.md" },
        ],
      },
    ],
  },
  {
    text: "大学",
    items: [{ text: "计算机图形学", link: "/university/计算机图形学.md" }],
  },
];

export default nav