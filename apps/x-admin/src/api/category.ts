import { request, useRequest } from "umi";
import { baseUrl } from "@/api";

export const list = async (params: any) => {
    const res = await request<any>(baseUrl + "/category", {
        method: "GET",
        params,
    });
    console.log("res -> :", res);
    return {
        success: true,
        data: res.data.list,
        total: res.data.total,
    };
};

// export const getTreeList = async (params: any) => {
//   const res = await request<any>(baseUrl + "/category", {
//     method: "GET",
//     params,
//   });
//   return res;
// };

export const save = async (params: any) => {
    const res = await request<any>(baseUrl + "/category", {
        method: "post",
        data: params,
    });
    return res;
};
