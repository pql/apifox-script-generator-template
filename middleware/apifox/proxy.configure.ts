import { IncomingMessage, ServerResponse } from "http";
import { HttpProxy, ProxyOptions } from "vite";
import config from "./config.mjs";
import * as controller from "./controller.mjs";
import * as services from "./services.mjs";
import * as utils from "./utils.mjs";

export default (proxy: HttpProxy.Server, options: ProxyOptions) => {
  proxy.on("error", (e) => {
    console.log("proxyError, 代理失败：服务器错误");
    console.log(JSON.stringify(e, null, 4));
  });
  proxy.on(
    "proxyRes",
    (
      proxyRes: IncomingMessage,
      req: IncomingMessage,
      res: ServerResponse<IncomingMessage>
    ) => {
      const encodingType = proxyRes.headers["content-encoding"];
      const body: any[] = [];
      proxyRes.on("data", (chunk) => {
        body.push(chunk);
      });
      proxyRes.on("end", () => {
        const buff = Buffer.concat(body);
        controller.buffDecompress(req.url, encodingType, buff, (json) => {
          if (json && typeof json === "object") {
            const { code, data } = json;
            if (code === 200 && data !== undefined && data !== null) {
              // 处理url
              let urlPath = req.url?.split("?")[0];
              urlPath = urlPath
                ?.replace(config.apiPrefix, "")
                .replace(/(\/\d+)$/g, "/{x}");
              let key: string = req.method?.toLowerCase() + "_" + urlPath;

              // 每次都重新读取文件
              const docJson: any[] = services.getDocJson();
              const responseBody = services.getResponseBodyJson();
              const dataJson = services.getDataJson();

              let index: number = -1;
              docJson.forEach((doc: any, idx: number) => {
                if (doc.bodyKey === key) {
                  index = idx;
                }
              });

              if (index === -1) {
                docJson.findIndex((doc: any) => {
                  const reg = new RegExp(
                    doc.bodyKey.replace("{x}", "[^\\/]+$")
                  );
                  if (reg.test(key)) {
                    key = doc.bodyKey;
                    return true;
                  }
                });
              }

              console.log(urlPath, key);

              dataJson[key] = json.data;

              let newDataJson: any = {};
              Object.keys(dataJson)
                .sort((a: any, b: any) => a.localeCompare(b))
                .forEach((i: any) => {
                  newDataJson[i] = dataJson[i];
                });

              controller.writeDataJsonFileSync(
                JSON.stringify(newDataJson, null, 4)
              );

              // 找到对应的原始数据结构
              const oldResponseBody = responseBody[key];
              // 处理新的数据结构
              const newResponseBody = utils.clearResponseData(json.data);
              let newObj = utils.deepMerge(
                oldResponseBody,
                newResponseBody,
                true
              );

              // 判断更新条件
              if (
                JSON.stringify(oldResponseBody) !==
                JSON.stringify(newResponseBody)
              ) {
                console.log(
                  urlPath,
                  "返回值类型：",
                  Array.isArray(newResponseBody)
                    ? "array"
                    : newResponseBody === null
                    ? "null"
                    : typeof newResponseBody === "string"
                    ? newResponseBody
                    : typeof newResponseBody
                );
                delete responseBody[urlPath!];
                responseBody[key] = newObj;

                controller.writeResponseBodyJsonFileSync(
                  JSON.stringify(responseBody, null, 4)
                );

                if (index > -1) {
                  const config = docJson[index];
                  // 处理前后端类型映射
                  let newDocItem = utils.formatConfig(
                    config,
                    null,
                    newResponseBody
                  );
                  newDocItem = {
                    ...newDocItem,
                    ...utils.buildRes(newDocItem),
                  };
                  dataJson[index] = newDocItem;
                  // 写入文档json文件
                  controller.writeDocumentJsonFileSync(
                    JSON.stringify(dataJson, null, 4)
                  );
                  // 写入response.d.ts文件
                  const getResponsedData = (() => {
                    return `\n${dataJson
                      .filter((i: any) => !!i.resCode)
                      .map((i: any) => i.resCode)
                      .join("\n\n")}\n\nexport default {\n\t${dataJson
                      .filter((i: any) => i.responseName?.length > 0)
                      .map((i: any) => i.responseName.join(",\n\t"))
                      .join(",\n\t")},\n}\n`;
                  })();
                  controller.writeResponseDFileSync(getResponsedData);

                  // 写入response.value.ts文件
                  const getResponseValData = (() => {
                    return `\n${dataJson
                      .filter((i: any) => !!i.resValueCode)
                      .map((i: any) => i.resValueCode)
                      .join("\n\n")}\n\nexport default {\n\t${dataJson
                      .filter((i: any) => i.responseValueName?.length > 0)
                      .map((i: any) => i.responseValueName.join(",\n\t"))
                      .join(",\n\t")},\n}\n`;
                  })();
                  controller.writeResponseValueFileSync(getResponseValData);

                  // 重新生成所有接口信息
                  const apiList = services.getFileNameJson(
                    "api-details-old.json"
                  );
                  const schemaList = services.getFileNameJson(
                    "api-schemas-old.json"
                  );

                  controller.build(apiList, schemaList);
                }
              }
            }
          }
        });
        const type = proxyRes.rawHeaders
          .join(":")
          .match(/content-type:([^;:,\s"']+)/i)?.[1];
        res.setHeader("Content-Type", type || "application/json");
        res.end(buff);
      });
    }
  );
};
