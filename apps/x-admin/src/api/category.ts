import { request, useRequest } from "umi";
import { baseUrl } from "@/api";

export const list = async (params = {}) => {
    const res = await request<any>(baseUrl + "/category/page", {
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

export const getTreeList = async (params = {}) => {
    const res = await request<any>(baseUrl + "/category/list", {
        method: "GET",
        params,
    });
    return res;
};

export const save = async (params = {}) => {
    const res = await request<any>(baseUrl + "/category/edit", {
        method: "post",
        data: params,
    });
    return res;
};
