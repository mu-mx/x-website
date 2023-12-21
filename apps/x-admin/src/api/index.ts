import { request, useRequest } from "umi";

// export const baseUrl = process.env.UMI_ENV === "dev" ? `http://localhost/api` : "https://xw8-eta.vercel.app/api";
export const baseUrl = process.env.UMI_ENV === "dev" ? `/api` : "https://xw8-eta.vercel.app/api";

console.log("process.env.UMI_ENV - >:", process.env.UMI_ENV);

export const userAuth = async () => {
    return await request<any>(baseUrl + "/auth", {
        method: "GET",
        params: {},
    });
};
