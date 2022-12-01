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

    <el-backtop :bottom="260" />

    <el-dialog v-model="drawer" width="30%" title="设置">
        <el-form label-position="right" label-width="100px">

            <el-form-item label="是否本页打开">
                <el-switch v-model="urlOpenType" active-text="是" inactive-text="否" />
            </el-form-item>

            <el-form-item label="是否使用京东字体">
                <el-switch v-model="urlOpenType" active-text="是" inactive-text="否" />
            </el-form-item>
        </el-form>

    </el-dialog>

</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { toggleDark } from '~/composables';


import { useGlobalStore } from '~/stores/global'


const global = useGlobalStore()



// let dataArr = global.allData.map((it: any, ind: number) => ({
//     id: ind,
//     title: it.title,
// }))


// let dataArr = [...Array(global.allData.length).keys()]

const allTabs = ref(0);
const drawer = ref(false)
const urlOpenType = ref(global.urlOpenType)
const useFamily = ref(global.useFamily)


const changeTop = () => {
    allTabs.value = 0
}

const toggle = () => {
    const cardOpen = global.cardOpen;

    let oldss: any = []

    if (cardOpen.length !== global.allData.length) {
        oldss = [...Array(global.allData.length).keys()]
    }

    console.log('oldss -> :', oldss)
    global.setCardOpen(oldss)
}



watch(urlOpenType, (val) => {
    global.setUrlOpenType(val)
})

watch(useFamily, (val) => {
    global.setFamily(val)
})



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
</style>