import { request, useRequest } from "umi";

// export const baseUrl = process.env.UMI_ENV === "dev" ? "/api" : process.env.BASE_API_URL;
export const baseUrl = `http://a.com/api`;

export const userAuth = async () => {
    return await request<any>(baseUrl + "/auth", {
        method: "GET",
        params: {},
    });
};
