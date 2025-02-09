import { onMounted, watch, nextTick, h } from "vue";
import { inBrowser, useRoute, useData } from "vitepress";
import { NProgress } from "nprogress-v2/dist/index.js";
import "nprogress-v2/dist/index.css";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import MNavLinks from "./components/MNavLinks.vue";
import mediumZoom from "medium-zoom";
import "./style/index.css";

export default {
  extends: DefaultTheme,
  Layout() {
    const props: Record<string, unknown> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MyLayout, props);
  },
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component("MNavLinks", MNavLinks);
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChanged = () => {
        // 根据路由动态添加或移除 nav.css 样式
        if (router.route.path === "/nav" || router.route.path === "/nav/") {
          const existingLink = document.querySelector(
            'link[href="/.vitepress/theme/style/nav.css"]'
          );
          if (!existingLink) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/.vitepress/theme/style/nav.css";
            document.head.appendChild(link);
          }
        } else {
          // 移除 nav.css 样式
          const linkElements = document.querySelectorAll(
            'link[href="/.vitepress/theme/style/nav.css"]'
          );
          if (linkElements.length > 0) {
            linkElements.forEach((link) => {
              if (link.parentNode) {
                link.parentNode.removeChild(link);
              }
            });
            location.reload(); // 找到并删除后重新加载页面
          }
        }
        NProgress.done();
      };
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    const { frontmatter } = useData();

    // giscus配置
    giscusTalk(
      {
        repo: "codepzj/docs", //仓库
        repoId: "R_kgDONnitaA", //仓库ID
        category: "Announcements", // 讨论分类
        categoryId: "DIC_kwDONnitaM4Cmb93", //讨论分类ID
        mapping: "pathname",
        inputPosition: "bottom",
        lang: "zh-CN",
      },
      {
        frontmatter,
        route,
      },
      true
    );
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
