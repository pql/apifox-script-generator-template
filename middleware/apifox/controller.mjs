import fs from "fs";
import path from "path";
import config from "./config.mjs";
import zlib from "zlib";
import * as service from "./services.mjs";
import * as utils from "./utils.mjs";
export const filterResponseData = (data) => {
  data = data.filter(config.filter);
};
export const sortResponseData = (data) => {
  data = data.sort(config.sort);
};
export const writeFileNameSync = (data, filename) => {
  const p = path.resolve(config.sourceFilePath, filename);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const writeDataJsonFileSync = (data) => {
  const p = path.resolve(config.output.dataJSONFilePath);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const writeResponseBodyJsonFileSync = (data) => {
  const p = path.resolve(config.output.responseBodyJSONFilePath);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const writeDocumentJsonFileSync = (data) => {
  const p = path.resolve(config.output.documentJSONFilePath);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const writeResponseDFileSync = (data) => {
  const p = path.resolve(config.output.responseFilePath);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const writeResponseValueFileSync = (data) => {
  const p = path.resolve(config.output.responseDefaultValueFilePath);
  fs.writeFileSync(p, data, { encoding: "utf-8" });
};

export const build = (apis, schemas) => {
  let dataList = [];
  if (apis.length) {
    const requestBody = service.getRequestBodyJson();
    const responseBody = service.getResponseBodyJson();

    for (let item of apis) {
      const url = item.path.replace(config.apiPrefix, "");
      const pureUrl = url.replace(/\/\{[^{}]+}/g, "/{x}");
      const pathReqUrl = url.replace(/\/\{/g, "/${");

      const key = utils.createKey(item.path, item.method);
      const requestJsonSchema = item.requestBody?.jsonSchema || {};
      const responseJsonSchema = item.responses?.find((i) => i.code === 200)
        ?.jsonSchema || {
        type: "object",
        properties: {},
      };
      const requestProperties = utils.findRequestProperties(
        requestJsonSchema,
        schemas
      );
      const responseProperties = utils.findResponseProperties(
        responseJsonSchema,
        schemas
      );

      const requestList = [];
      if (requestProperties) {
        if (requestJsonSchema.required?.length) {
          requestJsonSchema.required.forEach((key) => {
            requestProperties[key].required = true;
          });
        }
        Object.keys(requestProperties)
          .sort((a, b) => a.localeCompare(b))
          .forEach((key) => {
            const type = requestProperties[key].type;
            if (type) {
              if (Array.isArray(type)) {
                const typeList = type.map(
                  (i) => utils.getTransformValueByKey(i) || i
                );
                requestProperties[key].type = [...new Set(typeList)].join(
                  " | "
                );
              }
              requestList.push({
                name: key,
                ...requestProperties[key],
              });
            }
          });
      }
      if (responseProperties.$ref) {
        responseProperties.properties = utils.getSchemaPropertiesByJsonSchema(
          responseProperties.$ref,
          schemas
        );
      } else if (responseProperties.items?.$ref) {
        responseProperties.items = utils.getSchemaPropertiesByJsonSchema(
          responseProperties.items.$ref,
          schemas
        );
      }
      delete responseProperties.$ref;
      delete responseProperties["x-apifox-orders"];
      delete responseProperties.items?.["x-apifox-orders"];
      delete responseProperties.items?.$ref;

      let conf = {
        url,
        pureUrl,
        pathReqUrl,
        method: item.method,
        apiName: item.name,
        key,
        fnName: utils.getFuncName(key),
        requestBaseName: `I${key}`,
        requestName: [`I${key}`],
        responseBaseName: `O${key}`,
        responseName: [`O${key}`],
        responseValueName: [`O${key}Value`],
        request: {
          // file
          contentType: item.requestBody.type,
          params: (item.requestBody.parameters || []).concat(requestList),
          // query/path
          query: (item.parameters.query || []).concat(
            item.commonParameters.query || []
          ),
          path: (item.parameters.path || []).concat(
            item.commonParameters.path || []
          ),
          cookie: (item.parameters.cookie || []).concat(
            item.commonParameters.cookie || []
          ),
          header: (item.parameters.header || []).concat(
            item.commonParameters.header || []
          ),
        },
        response: responseProperties,
      };
      // 从地址中提取参数
      if (/\/\{[^{}]+}/.test(conf.url)) {
        const otherPath = conf.url.match(/\/\{([^{}\/]+)\}/g);
        otherPath.forEach((item) => {
          item = item.replace(/\/\{|}/g, "");
          const has = conf.request.path.find((i) => i.name === item);
          if (!has) {
            conf.request.path.push({
              name: item,
              type: "number | string",
            });
          }
        });
      }

      const bodyKey = conf.method.toLowerCase() + "_" + conf.pureUrl;
      // 处理前后端类型映射
      conf = utils.formatConfig(
        conf,
        requestBody[bodyKey],
        responseBody[bodyKey]
      );
      conf = {
        bodyKey,
        ...conf,
      };

      const fnConfig = utils.buildFn(conf);
      const reqConfig = utils.buildReq(conf);
      const resConfig = utils.buildRes(conf);

      const mergeObj = (props) => {
        for (let key in props) {
          const item = props[key];
          if (Array.isArray(item)) {
            if (conf[key]) {
              item.forEach((s) => {
                if (!conf[key].includes(s)) {
                  conf[key].push(s);
                }
              });
            } else {
              conf[key] = item;
            }
          } else if (typeof item === "object") {
            for (let sk in item) {
              conf[key][sk] = item[sk];
            }
          } else {
            conf[key] = item;
          }
        }
      };

      mergeObj(fnConfig);
      mergeObj(reqConfig);
      mergeObj(resConfig);

      // 删除确定不要的类型
      if (conf.deleteResponseName) {
        const index = conf.responseName.indexOf(conf.deleteResponseName);
        conf.responseName.splice(index, 1);

        const valueIndex = conf.responseValueName.indexOf(
          conf.deleteResponseName + "Value"
        );

        conf.responseValueName.splice(valueIndex, 1);
      }

      if (conf.deleteRequestName) {
        const index = conf.requestName.indexOf(conf.deleteRequestName);
        conf.requestName.splice(index, 1);
      }

      // 去重
      if (!dataList.find((i) => i.bodyKey === conf.bodyKey)) {
        dataList.push(conf);
      }
    }
  } else {
    return;
  }

  dataList = dataList.sort((a, b) => a.key.localeCompare(b.key));
  // 写入文档json文件
  writeDocumentJsonFileSync(JSON.stringify(dataList, null, 4));

  // 创建src/api目录
  const isApiFileDirectoryExist = fs.existsSync(config.output.apiFileDir);
  if (!isApiFileDirectoryExist) {
    fs.mkdirSync(config.output.apiFileDir);
  }

  // 写入src/api/index.ts文件
  fs.writeFileSync(
    config.output.apiFilePath,
    utils.fnCode(
      dataList,
      config.input.methodInputStr,
      config.input.requestInputStr,
      config.input.responseInputStr
    ),
    { encoding: "utf-8" }
  );
  console.log("\nAPI文档已生成:\n/src/api/index.ts");

  // 写入src/api/http.ts文件
  fs.writeFileSync(
    config.output.apiHttpFilePath,
    fs.readFileSync(path.resolve("./middleware/apifox/http.template.ts"), {
      encoding: "utf-8",
    }),
    { encoding: "utf-8" }
  );
  console.log("/src/api/http.ts");

  // 写入src/api/request.d.ts文件
  fs.writeFileSync(config.output.requestFilePath, utils.reqCode(dataList), {
    encoding: "utf-8",
  });
  console.log("/src/api/request.d.ts");

  // 写入src/api/response.d.ts文件
  writeResponseDFileSync(utils.resCode(dataList));
  console.log("/src/api/response.d.ts");

  // 写入src/api/response.value.ts文件
  writeResponseValueFileSync(utils.resValueCode(dataList));
  console.log("/src/api/response.value.ts\n\n");
};

export const buffDecompress = (url, encodingType, buff, callback) => {
  if (encodingType === "gzip" || encodingType === "br") {
    zlib[encodingType === "gzip" ? "unzip" : "brotliDecompress"](
      buff,
      (err, bufferDecompressed) => {
        if (!err) {
          const result = bufferDecompressed.toString();
          try {
            const json = JSON.parse(result);
            callback && callback(json);
          } catch (e) {
            console.log(result);
            console.log("数据格式化时出现错误：", url);
            console.log(e);
          }
        } else {
          console.log(encodingType, "解压失败", url);
          console.log(err);
        }
      }
    );
  } else {
    try {
      const json = JSON.parse(buff.toString("utf-8"));
      callback && callback(json);
    } catch (e) {
      callback && callback(buff.toString("utf-8"));
    }
  }
};
