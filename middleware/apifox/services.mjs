import config from "./config.mjs";
import fs from "fs";
import { get } from "./http.mjs";
import path from "path";

// 获取api列表
export const getApiList = async (props) => {
  const prop = {
    ...props,
  };

  const res = await get({
    method: "get",
    url: `https://api.apifox.cn/api/v1/api-${prop.name}?locale=zh-CN`,
    headers: {
      Authorization: config.token,
      Referer: "https://www.apifox.cn/",
      "x-project-id": config.projectId,
    },
  });

  const data = JSON.parse(res);
  return data;
};

// 获取schema列表
export const getSchemaList = async (props) => {
  const prop = {
    ...props,
  };
  const res = await get({
    method: "get",
    url: `https://api.apifox.cn/api/v1/api-${prop.name}?locale=zh-CN`,
    headers: {
      Authorization: config.token,
      Referer: "https://www.apifox.cn/",
      "x-project-id": config.projectId,
    },
  });
  const data = JSON.parse(res);
  return data;
};

// 获取'api-details-old.json' | 'api-schemas-old.json' JSON文件数据
export const getFileNameJson = (filename) => {
  const p = path.resolve(__dirname, config.sourceFilePath, filename);
  const isJsonFileExist = fs.existsSync(p);
  if (isJsonFileExist) {
    const res = fs.readFileSync(p, {
      encoding: "utf-8",
    });
    const data = JSON.parse(res || "{}");
    return data;
  } else {
    return {};
  }
};

// 获取'request.body.json'JSON文件数据
export const getRequestBodyJson = () => {
  const isJsonFileExist = fs.existsSync(config.output.requestBodyJSONFilePath);
  if (isJsonFileExist) {
    const res = fs.readFileSync(config.output.requestBodyJSONFilePath, {
      encoding: "utf-8",
    });
    const data = JSON.parse(res || "{}");
    return data;
  } else {
    return {};
  }
};

// 获取'response.body.json'JSON文件数据
export const getResponseBodyJson = () => {
  const isJsonFileExist = fs.existsSync(config.output.responseBodyJSONFilePath);
  if (isJsonFileExist) {
    const res = fs.readFileSync(config.output.responseBodyJSONFilePath, {
      encoding: "utf-8",
    });
    const data = JSON.parse(res || "{}");
    return data;
  } else {
    return {};
  }
};

// 获取'doc.json'JSON文件数据
export const getDocJson = () => {
  const isJsonFileExist = fs.existsSync(config.output.documentJSONFilePath);
  if (isJsonFileExist) {
    const res = fs.readFileSync(config.output.documentJSONFilePath, {
      encoding: "utf-8",
    });
    const data = JSON.parse(res || "[]");
    return data;
  } else {
    return [];
  }
};

// 获取'api-data.json'JSON文件数据
export const getDataJson = () => {
  const isJsonFileExist = fs.existsSync(config.output.dataJSONFilePath);
  if (isJsonFileExist) {
    const res = fs.readFileSync(config.output.dataJSONFilePath, {
      encoding: "utf-8",
    });
    const data = JSON.parse(res || "{}");
    return data;
  } else {
    return {};
  }
};
