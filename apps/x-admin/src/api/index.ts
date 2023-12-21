import { request, useRequest } from "umi";

export const baseUrl =
    process.env.UMI_ENV === "dev" ? `http://a.com/api` : "https://xw8-eta.vercel.app/api";

export const userAuth = async () => {
    return await request<any>(baseUrl + "/auth", {
        method: "GET",
        params: {},
    });
};
