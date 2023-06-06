import { request, useRequest } from "umi";
import { baseUrl } from "@/api";

export const auth = async (allParams: any) => {
  console.log("allParams -> :", allParams);

  const res = await request<any>(baseUrl + "/user/auth", {
    method: "GET",
    params: {},
  });
  console.log("res -> :", res);

  if (res.code == 401) {
    location.href = "/login";
  }
};
