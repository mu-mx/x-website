<template>
  <div class="fixed-wrap left">
    <div @click="toggle">
      <el-icon>
        <Sort />
      </el-icon>
    </div>

    <div @click="toggleDark()">
      <el-icon>
        <Moon />
      </el-icon>
    </div>

    <div @click="drawer = true">
      <el-icon>
        <Setting />
      </el-icon>
    </div>

    <div @click="infoDrawer = true">
      <el-icon>
        <InfoFilled />
      </el-icon>
    </div>
  </div>

  <!-- <div class="fixed-wrap right">
        <el-tabs tab-position="right" v-model="allTabs">
            <el-tab-pane v-for="(item, index) in dataArr" :key="index" :name="item.id">

                <template #label>

                    <el-link :href="'#cid' + item.id" type="danger">{{ item.title }}</el-link>

                </template>
            </el-tab-pane>
        </el-tabs>
    </div> -->

  <el-backtop :bottom="80" />

  <el-dialog v-model="drawer" width="30%" title="设置">
    <el-form label-position="right" label-width="140px">
      <el-form-item label="是否本页打开">
        <el-switch v-model="urlOpenType" active-text="是" inactive-text="否" />
      </el-form-item>

      <el-form-item label="是否使用京东字体">
        <el-switch v-model="useFamily" active-text="是" inactive-text="否" />
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="infoDrawer" width="30%" title="项目信息">
    <p class="info-item">
      仓库地址：
      <a
        href="https://github.com/mu-mx/x51"
        target="_blank"
        rel="noreferrer"
        title="Visit GitHub"
        class="info-alink"
      >
        <svg
          aria-hidden="true"
          role="img"
          class="octicon octicon-mark-github d-block"
          viewBox="0 0 16 16"
          width="28"
          height="28"
          fill="currentColor"
          style="
            display: inline-block;
            user-select: none;
            vertical-align: text-bottom;
            overflow: visible;
          "
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </p>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { toggleDark } from "~/composables";

import { useGlobalStore } from "~/stores/global";

const global = useGlobalStore();

// let dataArr = global.allData.map((it: any, ind: number) => ({
//     id: ind,
//     title: it.title,
// }))

// let dataArr = [...Array(global.allData.length).keys()]

const allTabs = ref(0);
const drawer = ref(false);
const infoDrawer = ref(false);
const urlOpenType = ref(global.urlOpenType);
const useFamily = ref(global.useFamily);

const changeTop = () => {
  allTabs.value = 0;
};

const toggle = () => {
  const cardOpen = global.cardOpen;

  let oldss: any = [];

  if (cardOpen.length !== global.allData.length) {
    oldss = [...Array(global.allData.length).keys()];
  }

  global.setCardOpen(oldss);
};

watch(urlOpenType, (val) => {
  global.setUrlOpenType(val);
});

watch(useFamily, (val) => {
  global.setFamily(val);
});
</script>

<style scoped lang="scss">
.fixed-wrap {
  position: fixed;
}

.left {
  top: 68px;
  // right: 16%;
  left: 12%;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    margin: 16px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f2f6fc;
    }
  }
}

.right {
  top: 68px;
  right: 10%;

  :deep(.el-tabs__item) {
    padding: 0 0px 0 20px;
  }

  // div {
  //     width: 40px;
  //     height: 40px;
  //     border-radius: 50%;
  //     background: #fff;
  //     margin: 16px 0;

  //     display: flex;
  //     align-items: center;
  //     justify-content: center;

  //     &:hover {
  //         background-color: #f2f6fc;
  //     }
  // }
}

.info-item {
  display: flex;
  align-items: center;

  .info-alink {
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    display: inline-block;
    padding: 6px 0;
    margin: 0 0 0 8px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: #66b1ff;
    }
  }
}
</style>
