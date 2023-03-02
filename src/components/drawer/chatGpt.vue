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
          <div class="content">
            <el-input
              v-model="item.content"
              autosize
              type="textarea"
              readonly
            />
          </div>
        </li>
      </ul>
      <el-empty v-else>
        <template v-slot:description>
          <el-icon v-if="loading"><Loading /></el-icon>
          <span v-else>暂无数据</span>
        </template>
      </el-empty>
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

        maxlength="120"
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
  fetch("https://api.forchange.cn", {
    method: "POST",
    credentials: "include",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "Human:" + keyword + "\nAI:",
      tokensLength: keyword.length,
    }),
  })
    .then((response) => {
      // network failure, request prevented
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }

      return Promise.reject(new Error(response.statusText));
    })
    .then((response) => response.json())
    .then((result) => {
      const len = lists.value.length;
      const newList = {
        id: len + 1,
        title: copyQuestion.value,
        content: result.choices[0].text,
      };
      loading.value = false;
      lists.value = [...lists.value, newList];
    })
    .catch((error) => {
      console.log("error -> :", error);
      // common error
      return null;
    });
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
      margin-bottom: 38px;
      // border-top: 1px solid #e2e2e2;
      padding: 8px;
      word-wrap: break-word;
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
