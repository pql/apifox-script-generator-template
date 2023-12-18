import path from "path";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import proxyConfigure from "./middleware/apifox/proxy.configure.js";

export default defineConfig(({ command, mode }: ConfigEnv) => {
  // 根据当前工作目录中 `mode` 加载 .env 文件
  // loadEnv 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_`前缀
  const env = loadEnv(mode, process.cwd());
  return {
    base: "/",
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: `${path.resolve(__dirname, "src")}/`,
        },
      ],
    },
    server: {
      port: 7778,
      host: "0.0.0.0",
      open: command === "serve",
      proxy: {
        [env.VITE_APP_API_PREFIX]: {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          selfHandleResponse: true,
          configure: proxyConfigure,
        },
      },
    },
  };
});
