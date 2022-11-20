import { defineStore } from "pinia";

import { allData } from "~/data";

console.log("allData -> :", allData);

const urlOpenType = localStorage.getItem("urlOpenType");
const cardOpen: any = localStorage.getItem("cardOpen") || [];

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      urlOpenType: urlOpenType === "true" || false,

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

    setCardOpen(type: any[] = []) {
      this.cardOpen = type;
      localStorage.setItem("cardOpen", JSON.stringify(type));
    },
  },
});
