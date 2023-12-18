import fs from "fs";
import config from "./config.mjs";
import * as controller from "./controller.mjs";
import * as services from "./services.mjs";

const init = async () => {
  // 创建脚本源码存放路径
  const isSourceFileExist = fs.existsSync(config.sourceFilePath);
  if (!isSourceFileExist) {
    fs.mkdirSync(config.sourceFilePath);
  }

  if (config.token) {
    const apiRequestParams = {
      name: "details",
      saveCache: true, // 是否缓存接口原始数据
      filter: config.filter,
      sort: config.sort,
    };

    // 获取api列表
    let apiList = await services.getApiList(apiRequestParams);
    apiList = apiList.data;
    if (apiRequestParams.saveCache && apiList) {
      controller.filterResponseData(apiList);
      controller.sortResponseData(apiList);
      controller.writeFileNameSync(
        JSON.stringify(apiList, null, 4),
        `api-${apiRequestParams.name}-old.json`
      );
    }
    // 获取api对应的schema
    if (apiList) {
      const shcemasRequestParams = {
        name: "schemas",
        saveCache: true, // 是否缓存接口原始数据
      };
      let schemaList = await services.getSchemaList(shcemasRequestParams);
      schemaList = schemaList.data;
      if (shcemasRequestParams.saveCache && schemaList) {
        controller.writeFileNameSync(
          JSON.stringify(schemaList, null, 4),
          `api-${shcemasRequestParams.name}-old.json`
        );
      }
      if (schemaList) {
        controller.build(apiList, schemaList);
      }
    }
  } else {
    console.log(
      `middleware/apifox/config.mjs文件中未找到'token'字段，请将[https://app.apifox.com/]登录后的token值填入其中`
    );
  }
};

init();
