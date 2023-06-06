import {defineConfig} from "umi";


export default defineConfig({
    define: {
        "process.env": {
            ...process.env,
        },
        "process.env.BASE_API_URL": "http://192.168.48.128:8001",
    }
});
