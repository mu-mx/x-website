<template>
  <div class="search-select-wrap">
    <el-select-v2
      v-model="value"
      :remote-method="remoteMethod"
      :height="370"
      :options="options"
      filterable
      remote
      autocomplete="list"
      fit-input-width
      clearable
      placeholder="请输入相关条目关键字"
      size="large"
      class="search-select"
      @change="handleChange"
    >
      <template #default="{ item }">
        <el-tooltip
          class="box-item"
          popper-class="tips"
          effect="dark"
          :content="item.title || item.text"
          placement="top"
        >
          <span>
            <span style="font-weight: 500; font-size: 14px">
              {{ item.type }}
            </span>
            =>
            <span
              style="color: var(--el-text-color-secondary); font-size: 16px"
            >
              {{ item.label }}
            </span>
          </span>
        </el-tooltip>
      </template>
    </el-select-v2>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from "vue";
import { useGlobalStore } from "~/stores/global";

const global = useGlobalStore();

const PinyinMatch = window.PinyinMatch;

const mergeAllData = (val: any) => {
  const value: any = toRaw<any>(val);
  const data: any = [];
  value.forEach((second: any) => {
    second.data.forEach((item: any) => {
      if (!item.type) {
        data.push({
          ...item,
          value: item.url,
          label: item.text,
          type: second.title,
        });
      }
    });
  });
  return data;
};

const list = mergeAllData(global.allData);

const value = ref(undefined);
const options = ref<any>([]);
const loading = ref(false);


const includes =  (data, searchTerm) => {
  const results = [];

  for (let item of data) {
    if (
      item.label.includes(searchTerm) ||
      item.type.includes(searchTerm) ||
      item.value.includes(searchTerm) ||
      PinyinMatch.match(item.label, searchTerm) ||
      PinyinMatch.match(item.type, searchTerm)
    ) {
      results.push(item);
    }
  }

  return results;
}

const remoteMethod = (query: string) => {
  if (query !== "") {
    options.value = includes(list, query)
  } else {
    options.value = [];
  }
};

const handleChange = (param: any) => {
  if (global.urlOpenType) {
    location.href = param;
  } else {
    window.open(param, "_blank");
  }

  value.value = undefined;
  options.value = list;
};
</script>

<style lang="scss" scoped>
.search-select-wrap {
  display: flex;
  justify-content: center;
  margin: 0 0 24px;
  .search-select {
    width: 40%;

    :deep(.el-select-v2__wrapper) {
      border-radius: 12px;
    }
  }
}
</style>
