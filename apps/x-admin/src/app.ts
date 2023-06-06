import { auth } from "./utils/auth";




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
  auth(allParams);
}

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
