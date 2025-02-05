/* .vitepress/theme/index.ts */
import DefaultTheme from "vitepress/theme";
import "./style/var.css";
import "./style/blockquote.css";
import "./style/custom-block.css";
import "./style/blur.css";
import "./style/hidden.css";
import "./style/link.css";

import Layout from "./components/layout.vue";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { inBrowser, useRoute, useData } from "vitepress";
import { NProgress } from "nprogress-v2/dist/index.js";
import "nprogress-v2/dist/index.css";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChanged = () => {
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
