import path from "path";

/**
 * 输出参数配置项
 */
// interface OutputConfig {
//   apiFileDir: string; // api文件输出存放目录
//   apiFilePath: string; // api文件输出路径
//   apiHttpFilePath: string; // http请求文件路径地址
//   requestFilePath: string; // 请求数据结构保存的路径
//   requestBodyJSONFilePath: string; // 请求主体文件保存路径
//   responseFilePath: string; // 响应数据结构保存的路径
//   responseBodyJSONFilePath: string; // 响应主体文件保存路径
//   responseDefaultValueFilePath: string; // 响应的数据初始值保存的路径
//   documentJSONFilePath: string; // 生成的文档json文件保存的路径
//   dataJSONFilePath: string; // 生成的Data json 文件保存的路径
// }

/**
 * 导入参数配置项
 */
// interface InputConfig {
//   methodInputStr: string; // '方法'导入路径
//   requestInputStr: string; // '请求参数类型'导入路径 '$'是占位符
//   responseInputStr: string; // '响应参数类型'导入路径 '$'是占位符
// }

/**
 * 配置配置参数项
 */
// interface Config {
//   projectId: number; // 项目id
//   apiPrefix: string; // 接口前缀
//   token: string; // https://app.apifox.com/  [app.apifox.com网站的请求头Authorization选项对应的值]
//   sourceFilePath: string; // 脚本源码存放路径
//   output: OutputConfig;
//   input: InputConfig;
//   filter?: (i: any) => boolean; // 过滤器 过滤抓取到的数据的path
//   sort?: ((a: any, b: any) => number) | undefined;
// }
const config = {
  projectId: 2381435,
  apiPrefix: import.meta?.env?.VITE_APP_API_PREFIX || "/buildx",
  token:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM5MDY5MSwidHMiOiJkMTY2MzU0NjZlNDk2NGRkIiwiaWF0IjoxNjg2NjY4MzgzMzQ3fQ.WmmvDJwKmjEWeK6XtQ1LnOnY9gAnJfujOSLLGjpksdE",
  sourceFilePath: path.resolve("src/api"),
  output: {
    apiFileDir: path.resolve("src/api"),
    apiFilePath: path.resolve("src/api/index.ts"),
    apiHttpFilePath: path.resolve("src/api/http.ts"),
    requestFilePath: path.resolve("src/api/request.d.ts"),
    requestBodyJSONFilePath: path.resolve("src/api/request.body.json"),
    responseFilePath: path.resolve("src/api/response.d.ts"),
    responseBodyJSONFilePath: path.resolve("src/api/response.body.json"),
    responseDefaultValueFilePath: path.resolve("src/api/response.value.ts"),
    documentJSONFilePath: path.resolve("src/api/api-doc.json"),
    dataJSONFilePath: path.resolve("src/api/api-data.json"),
  },
  input: {
    methodInputStr: `import {get, post, put, del} from '@/api/http'`,
    requestInputStr: `import type {$} from '@/api/request'`,
    responseInputStr: `import type {$} from '@/api/response'`,
  },
  filter: (i) => i.path && /^\/buildx\/(admin|wechat)/i.test(i.path),
  sort: (a, b) => a.path.localeCompare(b.path),
};

export default config;
