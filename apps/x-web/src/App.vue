<template>
  <el-config-provider :locale="locale">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <Time />
        <Section />
      </el-col>
    </el-row>

    <Drawer />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import Drawer from "./components/drawer";
import Section from "./components/section";
import Time from "./components/time";

import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const locale = computed(() => zhCn);

onMounted(() => {
  // document.documentElement.scrollTop = 0;
  // window.scrollBy({ top: 0, behavior: "smooth" });
});
</script>

<style>
#app {
  padding: 0 10px;

  min-height: 1800px;
}

.el-backtop {
  right: 12% !important;
}
</style>
