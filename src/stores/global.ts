import { defineStore } from "pinia";

import { allData } from "~/data";

console.log("allData -> :", allData);

const useFamily: any = localStorage.getItem("useFamily");
const urlOpenType = localStorage.getItem("urlOpenType");
const cardOpen: any = localStorage.getItem("cardOpen") || [];

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      urlOpenType: urlOpenType === "true" || false,
      useFamily: useFamily === "true" || false,

      cardOpen,

      allData,
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setUrlOpenType(type: boolean) {
      this.urlOpenType = type;
      localStorage.setItem("urlOpenType", type?.toString());
    },

    setFamily(type: boolean) {
      if (type) {
        document.querySelector("body")!.style.fontFamily = "JDLangZhengTi";
      } else {
        document.querySelector("body")!.style.fontFamily =
          "Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\5fae8f6f96c59ed1,Arial,sans-serif";
      }
      this.useFamily = type;
      localStorage.setItem("useFamily", type?.toString());
    },

    setCardOpen(type: any[] = []) {
      this.cardOpen = type;
      localStorage.setItem("cardOpen", JSON.stringify(type));
    },
  },
});
