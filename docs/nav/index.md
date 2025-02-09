---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<script setup>
import { NAV_DATA } from '/.vitepress/theme/utils/data'
</script>


# 我的导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>