import {request} from "umi";
import {baseUrl} from "@/api";


export const list = async (params: any) => {
    const res = await request<any>(baseUrl + "/site/list", {
        method: "GET",
        params,
    });
    return {
        success: true,
        data: res?.data?.list || res.data,
        total: res.data.total,
    };
};

export const save = async (params: any) => {
    return await request<any>(baseUrl + "/site/save", {
        method: "post",
        data: params,
    });
};

export const deletes = async (params: any) => {
    return await request<any>(baseUrl + "/site/delete", {
        method: "post",
        params,
    });
};

