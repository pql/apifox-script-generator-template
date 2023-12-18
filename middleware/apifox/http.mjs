import URL from "url";
import https from "https";
import http from "http";
import config from "./config.mjs";

// interface HttpHeaderOptions {
//   "Content-type"?: string;
//   "content-type"?: string;
//   "Content-Length"?: number;
//   "content-length"?: number;
//   referer?: string;
//   Referer?: string;
//   Authorization?: string;
//   "x-project-id"?: number;
//   [key: string]: any;
// }

// interface HttpOptions {
//   url: string;
//   method: string;
//   headers?: HttpHeaderOptions;
//   dataStr?: any;
//   [key: string]: any;
// }

export async function get(options) {
  const { url, headers, dataStr, ...other } = options;
  const method = other.method.toUpperCase();
  const query = URL.parse(url);
  const protocol = query.protocol?.replace(":", "");
  console.log("正在获取接口数据...");
  return new Promise((resolve) => {
    const service = protocol === "https" ? https : http;
    const req = service.request(
      {
        ...query,
        method, // 请求方式
        headers: {
          ...headers,
        },
      },
      (res) => {
        if (res.statusCode === 403) {
          console.log(
            "请求状态：",
            403,
            "错误",
            "\n排查以下原因：\n1.token是否存在或已失效\n2.是否有权限查看项目",
            config.projectId,
            "的权限\n项目地址：https://app.apifox.com/project/" +
              config.projectId
          );
        } else {
          console.log("已取得接口文档数据", res.statusCode, res.statusMessage);
        }
        // 给浏览器返回数据
        if (res.statusCode === 200) {
          // 设置编码格式
          res.setEncoding("utf-8");
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            resolve(data);
          });
        } else {
          const str = JSON.stringify({
            code: res.statusCode,
            msg: res.statusMessage,
            data: null,
          });
          resolve(str);
        }
      }
    );
    req.on("error", (e) => {
      console.log("error", e.toString());
      const str = JSON.stringify({
        code: 500,
        msg: e.toString(),
        data: null,
      });
      resolve(str);
    });
    if (method !== "GET" && method !== "DELETE") {
      // 向接口服务器 发送数据
      req.write(dataStr);
    }
    // 关闭发送通道
    req.end();
  });
}
