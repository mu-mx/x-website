import { auth } from "./utils/auth";
import type { RequestConfig } from "umi";
import { history } from "umi";

export const layout = () => {
    return {
        // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        logo: false,
        menu: {
            locale: false,
        },
        title: "x-admin",
        fixedHeader: true,
        siderMenuType: "sub",
        layout: "top",
        contentWidth: "Fixed",

        colorTextMenuSelected: "blue",
        colorTextMenuActive: "blue",
        colorBgMenuItemSelected: "blue",

        // 默认布局调整
        rightContentRender: () => undefined,
        footerRender: () => undefined,
        menuHeaderRender: undefined,
    };
};

export function onRouteChange(allParams: any) {
    // auth(allParams);
}

export const request: RequestConfig = {
    timeout: 1000,
    // other axios options you want
    errorConfig: {
        errorHandler() {},
        errorThrower() {},
    },
    requestInterceptors: [
        (url, options) => {
            options.params.token = localStorage.getItem("token");
            // do something
            return { url, options };
        },
    ],
    responseInterceptors: [
        (response: any) => {
            // 拦截响应数据，进行个性化处理
            const { data } = response;
            if (data.code == 401) {
                history.push("/login");
            }
            return response;
        },
    ],
};

// export function render(oldRender: any) {
//   auth(oldRender);
//   oldRender();

//   // fetch("/api/auth").then((auth: any) => {
//   //   if (auth.isLogin) {
//   //     oldRender();
//   //   } else {
//   //     location.href = "/login";
//   //     oldRender();
//   //   }
//   // });
// }
