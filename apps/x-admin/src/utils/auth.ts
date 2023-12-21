import { request, useRequest } from "umi";
import { userAuth } from "@/api";
import { history } from "umi";

export const auth = async (allParams: any) => {
    console.log("allParams -> :", allParams);
    if (allParams.location.pathname !== "/login") {
        const res = await userAuth();

        if (res.code == 401) {
            history.push("/login");
        }
    }
};
