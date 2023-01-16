<template>
  <div class="section">
    <search />

    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="7"
        :lg="5"
        :xl="4"
        v-for="(it, ind) in one.data"
        :key="ind"
        class="card"
      >
        <el-card shadow="hover">
          <el-tooltip
            class="box-item"
            popper-class="tips"
            effect="dark"
            :content="it.title || it.text"
            placement="top"
          >
            <el-link
              class="card-text"
              :href="it.url"
              :target="global.urlOpenType ? '' : '_blank'"
              link
            >
              {{ it.text }}
            </el-link>
          </el-tooltip>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="card-wrap" v-for="(item, index) in otherData" :key="index">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item :name="index">
          <template #title>
            {{ item.title }}
          </template>

          <el-row :gutter="20">
            <template v-for="(it, ind) in item.data" :key="ind">
              <div class="line" v-if="it.type === 'line'">
                <el-divider />
                <el-tag
                  style="font-size: 16px"
                  v-if="it.text"
                  type="success"
                  class="tag"
                >
                  {{ it.text }}
                </el-tag>
              </div>

              <el-col
                :xs="24"
                :sm="12"
                :md="7"
                :lg="5"
                :xl="4"
                v-else
                class="card"
              >
                <el-card shadow="hover">
                  <el-tooltip
                    class="box-item"
                    popper-class="tips"
                    effect="dark"
                    :content="it.title || it.text"
                    placement="top"
                  >
                    <el-link
                      class="card-text"
                      :href="it.url"
                      :target="global.urlOpenType ? '' : '_blank'"
                      link
                    >
                      {{ it.text }}
                    </el-link>
                  </el-tooltip>
                </el-card>
              </el-col>
            </template>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useGlobalStore } from "~/stores/global";
import search from "./search.vue";

const global = useGlobalStore();

const [one, ...otherData] = global.allData;

const activeNames = ref(
  Array.isArray(global.cardOpen) ? global.cardOpen : JSON.parse(global.cardOpen)
);
const handleChange = (val: any) => {
  global.setCardOpen(val);
};

watch(
  () => global.cardOpen,
  (newValue, oldValue) => {
    activeNames.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.section {
  margin: 0;

  .card-wrap {
    border-radius: 10px;

    margin: 10px 0;
  }

  :deep(.el-collapse-item__header) {
    // border-bottom: 1px solid #4C4D4F;

    font-size: 22px;
  }

  .line {
    position: relative;
    width: 100%;

    .tag {
      position: absolute;
      top: 24px;
      left: 12px;
    }
  }

  .card {
    margin: 8px 0;

    .card-text {
      font-size: 15px !important;
    }

    :deep(.el-card__body) {
      padding: 0;
      // min-height: 45px;
    }

    :deep(.el-link) {
      display: block;
      padding: 10px 20px;
    }
  }
}
</style>
