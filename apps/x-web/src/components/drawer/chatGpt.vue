<template>
  <el-dialog
    v-model="props.infoDrawer"
    width="55%"
    title="chatGPT聊天机器人"
    class="chat-wrap"
    @close="emit('update:infoDrawer', false)"
  >
    <div class="demo-list">
      <ul v-if="lists.length">
        <li v-for="(item, index) in lists" :key="index">
          <div class="title">问：{{ item.title }}</div>
          <div class="content" v-loading="!item.content.length">
            <el-input
              v-model="item.content"
              autosize
              type="textarea"
              readonly
            />
          </div>
        </li>
      </ul>
      <el-empty v-else />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="question-input">
      <el-input
        v-model="question"
        :autosize="{ minRows: 4, maxRows: 4 }"
        type="textarea"
        placeholder="请输入问题"
        @keyup.enter.native="sendQuestion"
        style="width: 100%"
        maxlength="500"
        show-word-limit
      >
        <template #append>
          <el-button @click="sendQuestion">发送</el-button>
        </template>
      </el-input>
      <p>Ctrl+Enter 发送消息</p>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed, reactive, ref, watch, defineProps, defineEmits } from "vue";
const props = defineProps(["infoDrawer"]);
const emit = defineEmits();

const question = ref("");
const loading = ref(false);
const copyQuestion = ref("");
const lists = ref([]);

const sendQuestion = (param) => {
  if (param.ctrlKey && param.keyCode == 13) {
    copyQuestion.value = param.target.value;
    loading.value = true;
    request(copyQuestion.value);
    question.value = "";
  } else {
    question.value += "\n";
  }
};

const request = (keyword) => {
  const len = lists.value.length;
  const newList = {
    id: len + 1,
    title: copyQuestion.value,
    content: "",
  };
  lists.value = [...lists.value, newList];

  axios({
    // url: "https://cbjtestapi.binjie.site:7777/api/generateStream",
    url: "https://api.aichatos.cloud/api/generateStream",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "stream",
    mode: "no-cors",
    data: JSON.stringify({
      prompt: keyword,
      userId: "",
      network: false,
    }),
  }).then((res) => {
    const stream = res.data;

    lists.value = lists.value.map((item) => {
      if (item.id === len + 1) {
        item.content = stream;
      }
      return item;
    });
    loading.value = false;
  });

  // fetch("https://api.forchange.cn", {
  //   method: "POST",
  //   credentials: "include",
  //   headers: {
  //     // Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     // prompt: "Human:" + keyword + "\nAI:",
  //     // tokensLength: keyword.length,
  //     prompt: keyword,
  //     model: "text-davinci-003",
  //     maxTokens: 4096,
  //     top_p: 1.0,
  //     temperature: 0,
  //     frequency_penalty: 0.0, // 控制语言模型中出现的词语频率，惩罚
  //     presence_penalty: 0.0, // 控制语言模型中出现的词语频率，惩罚
  //   }),
  // })
  //   .then((response) => {
  //     // network failure, request prevented
  //     if (response.status >= 200 && response.status < 300) {
  //       return Promise.resolve(response);
  //     }

  //     return Promise.reject(new Error(response.statusText));
  //   })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     lists.value = lists.value.map((item) => {
  //       if (item.id === len + 1) {
  //         item.content = result.choices[0].text;
  //       }
  //       return item;
  //     });
  //     // result.choices[0].text;
  //     loading.value = false;
  //   })
  //   .catch((error) => {
  //     console.log("error -> :", error);
  //     // common error
  //     return null;
  //   });
};
</script>

<style lang="scss" scoped>
.chat-wrap {
  :global(.el-dialog__body) {
    position: relative;
    padding: 20px;
  }

  .demo-list {
    height: 460px;
    overflow-y: auto;
    margin-bottom: 100px;

    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .title {
      // background: #343540;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 10px;
      padding: 0 4px 8px;
      word-wrap: break-word;
    }

    .content {
      // background: #f5f2f3;
      font-size: 16px;
      margin-bottom: 20px;
      // border-top: 1px solid #e2e2e2;
      padding: 8px;
      word-wrap: break-word;
      min-height: 90px;
    }
  }

  .question-input {
    position: absolute;
    width: 96%;
    bottom: 0;
    height: 140px;
    p {
      margin-top: 6px;
      color: #606266;
      font-size: 13px;
    }
  }
}
</style>
