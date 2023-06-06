export default {
  // 返回值可以是数组形式
  "GET /api/users": [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ],

  // 返回值也可以是对象形式
  "GET /api/users/1": { id: 1, name: "foo" },

  "GET /api/auth": (req, res) => {
    // 添加跨域请求头
    res.setHeader("Access-Control-Allow-Origin", "*");
    const randomBoolean = () => Math.random() >= 0.5;
    
    const str = 1
      ? { id: 1, name: "foo", token: "123456" }
      : { code: 401 };
    res.end(JSON.stringify(str));
  },
};
