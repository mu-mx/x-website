<template>
    <div class="time-wrap">


        <el-popover placement="bottom" width="400px" visible trigger="hover">
            <template #reference>
                <span>
                    {{ day.format('YYYY-MM-DD') }}

                    {{ '星期' + week[day.day()] }}
                </span>
            </template>
        </el-popover>





        <span class="time">
            {{ dayjs(now).format('HH:mm:ss') }}
        </span>


    </div>


</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import dayjs from 'dayjs';
import { useNow } from '@vueuse/core'

const now = useNow()
const day = dayjs()
const value = ref(new Date())

const week = ['日', '一', '二', '三', '四', '五', '六']

</script>


<style scoped lang="scss">
.time-wrap {
    margin: 16px 0;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    span {
        margin: 0 12px;
    }

    .time {
        font-size: 24px;
    }
}
</style>