<template>
  <div class="time-wrap">
    <el-popover
      :visible="visible"
      placement="bottom"
      width="360px"
      trigger="click"
    >
      <template #reference>
        <span @click="visible = !visible">
          {{ dayFormat }}

          {{ "星期" + week[day.day()] }}

          {{ todayLunar.animal }}
          {{ todayLunar.monthCn }}
          {{ todayLunar.dayCn }}
        </span>
      </template>

      <el-calendar>
        <template #date-cell="{ data }">
          <span
            :style="{
              color:
                dayjs(data.day).day() === 0 || dayjs(data.day).day() === 6
                  ? 'red'
                  : '',
            }"
          >
            {{ data.day.split("-")[2] }}
          </span>

          <br />

          <span
            v-if="getLunarDay(data.day).dayCn === '初一'"
            style="color: aqua"
          >
            {{ getLunarDay(data.day).monthCn }}
          </span>

          <span v-else>{{ getLunarDay(data.day).dayCn }}</span>
        </template>
      </el-calendar>
    </el-popover>

    <span class="time">
      {{ dayjs(now).format("HH:mm:ss") }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import solarLunar from "solarlunar-es";
import { useNow } from "@vueuse/core";

window.ElementPlus.dayjs.en.weekStart = 1;

const dayjs = window.dayjs;

const visible = ref(false);

const now = useNow();
const day = dayjs();
const dayFormat = day.format("YYYY-MM-DD");

const week = ["日", "一", "二", "三", "四", "五", "六"];

const getLunarDay: any = (dayFormat: string) => {
  const params: number[] = dayFormat.split("-").map((it, ind) => Number(it));
  return solarLunar.solar2lunar(params[0], params[1], params[2]);
};

const todayLunar: any = getLunarDay(dayFormat);
</script>

<style>
.el-calendar-day {
  height: unset !important;
}

.el-calendar__body {
  padding: 0;
}
</style>

<style scoped lang="scss">
.time-wrap {
  margin: 12px 0;
  margin-bottom: 100px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  span {
    margin: 0 12px;
    font-size: 14px;
  }

  .time {
    font-size: 24px;
  }

  .is-selected {
    color: #1989fa;
  }
}

:deep(.el-calendar-table .el-calendar-day) {
  padding: 4px;

  span {
    font-size: 12px;
  }
}

:deep(.el-calendar__header) {
  font-size: 12px;

  span {
    font-size: 12px;
  }
}
</style>
