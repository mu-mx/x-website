import { defineConfig } from "umi";

export default defineConfig({
    define: {
        "process.env": {
            ...process.env,
        },
        //   "process.env.BASE_API_URL": "http://localhost:8001",
    },
    proxy: {
        "/api": {
            target: "http://localhost",
            changeOrigin: true,
            // pathRewrite: { "^/api": "" },
        },
    },
});
