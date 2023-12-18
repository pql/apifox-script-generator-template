import config from "./config.mjs";

export const upperFirstCase = (str) => {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
};

export const createKey = (path, method) => {
  const arr = path
    .replace(config.apiPrefix + "/", "")
    .replace(/[{}]/g, "")
    .split("/");
  arr.push(method);
  return arr.map((i) => upperFirstCase(i)).join("");
};

export const getSchemaPropertiesByJsonSchema = (jsonSchema, schemas) => {
  let properties = {};
  if (jsonSchema.$ref) {
    const id = jsonSchema.$ref.match(/\d+/)?.[0] * 1;
    const item = schemas.find((i) => i.id === id);
    if (item) {
      if (item.jsonSchema?.required?.length) {
        item.jsonSchema.required.forEach((key) => {
          item.jsonSchema.properties[key].required = true;
        });
      }
      properties = item.jsonSchema?.properties || {};
    }
  }
  return properties;
};

export const findRequestProperties = (requestJsonSchema, schemas) => {
  const props = getSchemaPropertiesByJsonSchema(requestJsonSchema, schemas);
  const properties = requestJsonSchema.properties || props || {};
  return properties;
};

export const findResponseProperties = (responseJsonSchema, schemas) => {
  const props = getSchemaPropertiesByJsonSchema(responseJsonSchema, schemas);
  const properties = responseJsonSchema.properties?.data || props?.data || {};
  return properties;
};

export const getTransformValueByKey = (key) => {
  let value = key;
  if (key === "integer") {
    value = "number";
  } else if (key === "object") {
    value = "any";
  } else if (key === "array") {
    value = "any[]";
  }
  return value;
};

export const getFuncName = (key) => {
  return key.substring(0, 1).toLowerCase() + key.substring(1);
};

export const formatConfig = (config, oldReqData, oldResData) => {
  config = JSON.parse(JSON.stringify(config));
  config.request.params = config.request.params.map((i) => {
    i.type = getTransformValueByKey(i.type);
    // if (/\d/.test(sub.description)) {
    // 	let enumList = sub.description.match(/\d+/g)
    // 	if (enumList.length > 1) {
    // 		if (sub.type === 'number') {
    // 			sub.type = enumList.join(' | ')
    // 		} else if (sub.type === 'string') {
    // 			sub.type = enumList.map(i => `'${i}'`).join(' | ')
    // 		}
    // 	}
    // }
    return i;
  });

  config.request.path = config.request.path.map((i) => {
    i.type = getTransformValueByKey(i.type);
    // if (/\d/.test(sub.description)) {
    // 	let enumList = sub.description.match(/\d+/g)
    // 	if (enumList.length > 1) {
    // 		if (sub.type === 'number') {
    // 			sub.type = enumList.join(' | ')
    // 		} else if (sub.type === 'string') {
    // 			sub.type = enumList.map(i => `'${i}'`).join(' | ')
    // 		}
    // 	}
    // }
    return i;
  });

  config.request.query = config.request.query.map((i) => {
    i.type = getTransformValueByKey(i.type);
    // if (/\d/.test(sub.description)) {
    // 	let enumList = sub.description.match(/\d+/g)
    // 	if (enumList.length > 1) {
    // 		if (sub.type === 'number') {
    // 			sub.type = enumList.join(' | ')
    // 		} else if (sub.type === 'string') {
    // 			sub.type = enumList.map(i => `'${i}'`).join(' | ')
    // 		}
    // 	}
    // }
    return i;
  });

  config.request.params = config.request.params.map((item, index) => {
    config.request.params[index].oldType = item.type;
    delete config.request.params[index].format;
    delete item["x-tmp-pending-properties"];
    if (item.type === "array") {
      // 如果是数组类型，判断子项
      const newType = getTransformValueByKey(item.items?.type);
      if (newType) {
        config.request.params[index].type = newType;
      } else {
        config.request.params[index].type = item.items?.type;
      }
      // delete item.items;
    } else {
      const type = getTransformValueByKey(item.type);
      // if (/\d/.test(item.description)) {
      // 	let enumList = item.description.match(/\d+/g)
      // 	if (enumList.length > 1) {
      // 		if (type === 'number') {
      // 			type = enumList.join(' | ')
      // 		} else if (type === 'string') {
      // 			type = enumList.map(i => `'${i}'`).join(' | ')
      // 		}
      // 	}
      // }
      config.request.params[index].type = type;
    }
    return config.request.params[index];
  });

  if (oldReqData) {
    if (oldReqData.params?.length) {
      oldReqData.params.forEach((item) => {
        const has = config.request.params.find((i) => i.name === item.name);
        if (!has) {
          config.request.params.push(item);
        }
      });
    }

    if (oldReqData.query?.length) {
      oldReqData.query.forEach((item) => {
        const has = config.request.query.find((i) => i.name === item.name);
        if (!has) {
          config.request.query.push(item);
        }
      });
    }

    if (oldReqData.path?.length) {
      oldReqData.path.forEach((item) => {
        const has = config.request.path.find((i) => i.name === item.name);
        if (!has) {
          config.request.path.push(item);
        }
      });
    }
  }

  // 优先处理真实的返回值结构
  if (oldResData) {
    // 处理数组
    if (Array.isArray(oldResData)) {
      let properties = {};
      Object.keys(oldResData[0])
        .sort((a, b) => a.localeCompare(b))
        .forEach((key) => {
          const value = oldResData[0][key];
          const type =
            typeof value === "string"
              ? value
              : `any${Array.isArray(value) ? "[]" : ""}`;
          properties[key] = { type };
        });
      config.response = {
        type: config.responseBaseName + "Item",
        oldType: "array",
        items: {
          type: "object",
          properties,
        },
      };
    } else if (oldResData && typeof oldResData === "object") {
      // 处理对象
      let properties = {};
      Object.keys(oldResData)
        .sort((a, b) => a.localeCompare(b))
        .forEach((key) => {
          const value = oldResData[key];
          properties[key] = { type: value };
        });
      config.response = {
        type: config.responseBaseName,
        oldType: "object",
        properties,
      };
    } else {
      // 处理基本类型
      config.response = {
        type: oldResData,
        oldType: oldResData,
      };
    }
  } else {
    const newRes = JSON.parse(JSON.stringify(config.response));
    newRes.oldType = newRes.type;
    if (newRes.type === "array") {
      const newType = getTransformValueByKey(newRes.item?.type);
      if (newType && newType !== "any") {
        // 基础数组类型
        newRes.type = newType;
      } else {
        // 自定义数组类型
        newRes.type = config.responseBaseName + "Item";
        const sub = newRes.items.properties;
        for (let key in sub) {
          const subItem = sub[key];
          delete sub[key].format;
          sub[key].oldType = subItem.type;
          if (subItem.type === "array") {
            sub[key].type === getTransformValueByKey(subItem.type);
          } else {
            if (subItem.type) {
              sub[key].type = getTransformValueByKey(subItem.type);
            } else {
              sub[key].type = "any";
            }
          }
        }
      }
    } else {
      const newType = getTransformValueByKey(newRes.type);
      if (newType && newType !== "any") {
        newRes.type = newType;
      } else {
        if (newRes.properties && Object.keys(newRes.properties).length) {
          newRes.type = config.responseBaseName;
          for (let key in newRes.properties) {
            const item = newRes.properties[key];
            if (item.$ref) {
              newRes.properties[key].type = "any";
            }
          }
        } else {
          newRes.type = "any";
        }
      }
    }
    config.response = newRes;
    for (let key in config.response.properties) {
      const item = config.response.properties[key];
      if (item.type) {
        config.response.properties[key].type = getTransformValueByKey(
          item.type
        );
      }
    }
  }
  return config;
};

export const buildFn = (config) => {
  const url = `\`${config.pathReqUrl}\``;
  const hasFile = config.request.params.find((i) => i.type === "file");
  const headers = `${
    config.request &&
    config.request.contentType !== "none" &&
    !config.request.contentType.includes("form-data")
      ? `headers: { 'Content-Type': '${config.request.contentType}'}`
      : ""
  }`;
  if (config.request.path.length) {
    const { requestName, responseName, code } = buildFnPathCode({
      url,
      fnName: config.fnName,
      requestName: config.requestName,
      requestBaseName: config.requestBaseName,
      responseBaseName: config.responseBaseName,
      method: config.method,
      apiName: config.apiName,
      headers,
      pathList: config.request.path,
      query: config.request.query,
      params: config.request.params,
      resProps: config.response,
    });
    return {
      requestName,
      responseName,
      fnCode: code,
    };
  } else if (hasFile) {
    const { requestName, responseName, code } = buildFnFileCode({
      url,
      fnName: config.fnName,
      requestBaseName: config.requestBaseName,
      responseBaseName: config.responseBaseName,
      method: config.method,
      apiName: config.apiName,
      headers,
      params: config.request.params,
    });
    return {
      requestName,
      responseName,
      fnCode: code,
    };
  } else {
    if (config.response.oldType === "array") {
      const { requestName, responseName, code } = buildFnArrayCode({
        url,
        fnName: config.fnName,
        requestBaseName: config.requestBaseName,
        responseBaseName: config.responseBaseName,
        method: config.method,
        apiName: config.apiName,
        headers,
        params: config.request.params.concat(config.request.query),
      });
      return {
        requestName,
        responseName,
        fnCode: code,
      };
    } else {
      const { requestName, responseName, code } = buildFnGetOrPostCode({
        url,
        fnName: config.fnName,
        requestBaseName: config.requestBaseName,
        responseBaseName: config.responseBaseName,
        method: config.method,
        apiName: config.apiName,
        headers,
        params: config.request.params.concat(config.request.query),
        resProps: config.response,
      });
      return {
        requestName,
        responseName,
        fnCode: code,
      };
    }
  }
};

export const buildFnGetOrPostCode = (props) => {
  const {
    url,
    fnName,
    requestBaseName,
    responseBaseName,
    method,
    apiName,
    headers,
    params,
    resProps,
  } = props;

  const isBase =
    resProps.oldType !== "array" &&
    resProps.type !== "any" &&
    resProps.type !== responseBaseName;
  const resName = isBase ? resProps.type : responseBaseName;
  const remarkList = [];

  params.forEach((i) => {
    remarkList.push(
      ` * @param {${i.type}} params.${i.name} ${
        i.required ? "必填" : "可选"
      }: ${i.description || ""}`
    );
  });

  return {
    requestName: [requestBaseName],
    responseName: isBase ? [] : [resName],
    code: `
/**
 * @description ${apiName} buildFnGetOrPostCode
 * ${remarkList.length ? `\n${remarkList.join("\n")}` : ""}
 * @return Promise<${resName}>
 */
export const ${fnName} = async (params?: ${requestBaseName}) => {
\treturn ${method === "delete" ? "del" : method}<${resName}>(${url},{
\t\tparams${headers ? `,\n\t\t${headers}` : ""}
\t})
}`.trim(),
  };
};

export const buildFnArrayCode = (props) => {
  const {
    url,
    fnName,
    requestBaseName,
    responseBaseName,
    method,
    apiName,
    headers,
    params,
  } = props;
  const resName = `${responseBaseName}Item`;
  const remarkList = [];
  params.forEach((i) => {
    remarkList.push(
      ` * @param {${i.type}} params.${i.name} ${
        i.required ? "必填" : "可选"
      }: ${i.description === i.name ? "" : i.description}`
    );
  });
  return {
    requestName: [requestBaseName],
    responseName: [resName],
    code: `
/**
 * @description ${apiName} buildFnArrayCode
 * ${remarkList.length ? `\n${remarkList.join("\n")}}` : ""}
 * @return Promise<${resName}>
 */
export const ${fnName} = async (params?: ${requestBaseName}) => {
\treturn ${method === "delete" ? "del" : method}<${resName}[]>(${url}, {
\t\tparams${headers ? `,\n\t\t${headers}` : ""}
\t})
}`.trim(),
  };
};

export const buildFnFileCode = (props) => {
  const {
    url,
    fnName,
    requestBaseName,
    responseBaseName,
    method,
    apiName,
    headers,
    params,
  } = props;
  const remarkList = [];
  params.forEach((i) => {
    remarkList.push(
      ` * @param {${i.type}} params.${i.name} ${
        i.required ? "必填" : "可选"
      }: ${i.description === i.name ? "" : i.description}`
    );
  });

  return {
    requestName: [`${requestBaseName}FormData`],
    responseName: [responseBaseName],
    code: `
/**
 * @description ${apiName} buildFnFileCode
 * ${remarkList.length ? `\n${remarkList.join("\n")}` : ""}
 * @return Promise<${responseBaseName}>
 */
export const ${fnName} = async (params?: ${requestBaseName}FormData) => {
\treturn ${method === "delete" ? "del" : method}<${responseBaseName}>(${url}, {
\t\tparams${headers ? `,\n\t\t${headers}` : ""}  
\t})
}`.trim(),
  };
};

export const buildFnPathCode = (props) => {
  const {
    url,
    fnName,
    requestBaseName,
    responseBaseName,
    method,
    apiName,
    headers,
    pathList,
    query,
    params,
    resProps,
  } = props;

  const isBase =
    resProps.oldType !== "array" &&
    resProps.type !== "any" &&
    resProps.type !== responseBaseName;
  const resName = isBase
    ? resProps.type
    : `${responseBaseName}${resProps.oldType === "array" ? "Item" : ""}`;
  const remarkList = [];
  const resNameValue = `${resName}${resProps.oldType === "array" ? "[]" : ""}`;
  const pathStrList = [];

  pathList.forEach((i) => {
    pathStrList.push(`${i.name}${i.required ? "" : "?"}: ${i.type}`);
    remarkList.push(
      ` * @path {${i.type} ${i.name} ${i.required ? "必填" : "可选"}: ${
        i.description === i.name ? "" : i.description
      }}`
    );
  });

  query.forEach((i) => {
    remarkList.push(
      ` * @query {${i.type}} ${i.name} ${i.required ? "必填" : "可选"}: ${
        i.description === i.name ? "" : i.description
      }`
    );
  });

  params.forEach((i) => {
    remarkList.push(
      ` * @params {${i.type}} ${i.name} ${i.required ? "必填" : "可选"}: ${
        i.description === i.name ? "" : i.description
      }`
    );
  });

  return {
    requestName:
      query.length === 0 && params.length === 0
        ? []
        : [`${requestBaseName}Group`],
    responseName: isBase ? [] : [resName],
    code:
      query.length === 0 && params.length === 0
        ? `
/**
 * @description ${apiName} buildFnPathCode${
            remarkList.length ? `\n${remarkList.join("\n")}` : ""
          }
 * @return Promise<${resNameValue}>
 */
export const ${fnName} = async (${pathStrList.join(", ")}) => {
\treturn ${method === "delete" ? "del" : method}<${resNameValue}>(${url}${
            headers ? `, {\n\t\t${headers}\n\t}` : ""
          })
}`.trim()
        : `
/**
 * @description ${apiName} buildFnPathCode${
            remarkList.length ? `\n${remarkList.join("\n")}` : ""
          }
 * @return Promise<${resNameValue}>
 */
export const ${fnName} = async ({path, params}: ${requestBaseName}Group) => {
\treturn ${method === "delete" ? "del" : method}<${resNameValue}>(${url.replace(
            /\$\{/g,
            "${path."
          )},{\n\t\tparams\n\t})
}`.trim(),
  };
};

export const buildReq = (config) => {
  const hasFile = config.request.params.find((i) => i.type === "file");
  if (hasFile) {
    // 单独处理文件类型
    const { code, name, deleteName } = buildReqFileTyped({
      url: config.url,
      name: config.requestName,
      apiName: config.apiName,
      fileProps: config.request.params,
    });
    return {
      requestName: name,
      deleteRequestName: deleteName,
      reqCode: code,
    };
  } else {
    // 处理 get/post 请求的参数
    const { code, name } = buildReqGetOrPostTyped({
      url: config.url,
      name: config.requestBaseName,
      apiName: config.apiName,
      params: config.request.params.concat(config.request.query),
      path: config.request.path,
    });
    return {
      requestName: name,
      reqCode: code,
    };
  }
};

export const buildReqGetOrPostTyped = (props) => {
  const { url, name, apiName, params, path } = props;
  const typeCode = [];
  params.forEach((i) => {
    typeCode.push(
      `${i.name}${i.required ? "" : "?"}: ${
        typeof i.type === "string" ? i.type : "any"
      };${i.description ? ` // ${i.description}` : ""}`
    );
  });
  const pathCode = [];
  path.forEach((i) => {
    pathCode.push(
      `${i.name}${i.required ? "" : "?"}: ${
        typeof i.type === "string" ? i.type : "any"
      };${i.description ? ` // ${i.description}` : ""}`
    );
  });

  const hasGroup = path.length > 0 && params.length > 0;
  const nameList = [name];
  if (hasGroup) {
    nameList.push(`${name}Group`);
  }

  let code = `
/**
 * @description ${apiName} buildReqGetOrPostTyped
 * @url ${url}
 */
export interface ${name}{${
    typeCode.length ? `\n\t${typeCode.join("\n\t")}` : ""
  }\n}`.trim();

  if (hasGroup) {
    code += `
/**
 * @description ${apiName} buildReqGetOrPostTyped
 * @url ${url}
 */
export interface ${name}Group {
  path: {\n\t\t${pathCode.join("\n\t\t")}\n\t};
  params: ${name};\n}`.trim();
  }

  return {
    name: nameList,
    code,
  };
};

export const buildReqFileTyped = (props) => {
  const { url, name, apiName, fileProps } = props;
  const typeCode = [];

  if (fileProps.length === 0) {
    return {
      name: [],
      code: "",
    };
  }

  fileProps.forEach((i) => {
    typeCode.push(
      `${i.name}: string;${i.description ? ` // ${i.description}` : ""}`
    );
  });

  return {
    name: [`${name[0]}FormData`],
    deleteName: name[0],
    code: `
/**
 * @description ${apiName} buildReqFileTyped
 * @url ${url}
 */
export interface ${name[0]}FormData extends FormData{
\tappend: (name: ${fileProps
      .map((i) => `'${i.name}'`)
      .join(" | ")}, value: string | Blob, fileName?: string) => void;
}`.trim(),
  };
};

export const buildRes = (config) => {
  const data = config.response;

  if (data.oldType === "array") {
    const { code, valueCode, name, deleteName } = buildResArrayTyped({
      url: config.pureUrl,
      name: config.responseBaseName,
      apiName: config.apiName,
      params: data,
    });
    return {
      responseName: name,
      deleteResponseName: deleteName,
      resCode: code,
      resValueCode: valueCode,
    };
  } else if (data.type === "any" || data.type === config.responseBaseName) {
    const { code, valueCode, name } = buildResAnyTyped({
      url: config.pureUrl,
      name: config.responseBaseName,
      apiName: config.apiName,
      params: data,
    });
    return {
      responseName: name,
      resCode: code,
      resValueCode: valueCode,
    };
  } else {
    // 基础类型，无需处理
    return {
      responseName: [config.responseBaseName],
      resCode: `
/**
 * @description ${config.apiName} buildRes
 * @url ${config.url}
 */
export type ${config.responseBaseName} =${config.response.type}
`.trim(),
      resValueCode: `
/**
 * @description ${config.apiName} buildRes
 * @url ${config.url}
 */
export const ${config.responseBaseName}Value =
${getValueByType(config.response.type)}`.trim(),
    };
  }
};

export const buildResAnyTyped = (props) => {
  const { url, name, apiName, params } = props;
  const typeCode = [];
  const valueCode = [];
  const nameList = [name];
  const subCode = [];
  const subValueCode = [];

  if (params.items?.properties) {
    Object.keys(params.items.properties)
      .sort((a, b) => a.localeCompare(b))
      .forEach((key) => {
        const item = params.items.properties[key];
        typeCode.push(
          `${key}: ${item.type};${
            item.description ? ` // ${item.description}` : ""
          }`
        );
        valueCode.push(
          `${key}: ${getValueByType(item.type)},${
            item.description ? ` // ${item.description}` : ""
          }`
        );
      });
  } else {
    if (params.properties && Object.keys(params.properties).length) {
      Object.keys(params.properties)
        .sort((a, b) => a.localeCompare(b))
        .forEach((key) => {
          const item = params.properties[key];
          if (item.type) {
            let dataType = item.type;
            if (Array.isArray(dataType)) {
              dataType = dataType[0];
              if (Array.isArray(dataType)) {
                dataType = "any[]";
              }
            }

            if (typeof dataType === "object") {
              const subName = `${name}${upperFirstCase(key)}`;
              const arrType = Array.isArray(item.type) ? "[]" : "";
              typeCode.push(
                `${key}: ${subName}${arrType};${
                  item.description ? `// ${item.description}` : ""
                }`
              );
              valueCode.push(
                `${key}: ${getValueByType(subName + arrType)},${
                  item.description ? ` // ${item.description}` : ""
                }`
              );

              const subTypeCode = [];
              const subValueTypeCode = [];

              Object.keys(dataType)
                .sort((a, b) => a.localeCompare(b))
                .forEach((subKey) => {
                  const typeValue =
                    typeof dataType[subKey] === "string"
                      ? dataType[subKey]
                      : Array.isArray(dataType[subKey])
                      ? "any[]"
                      : "any";
                  subTypeCode.push(`${subKey}: ${typeValue}`);
                  subValueTypeCode.push(
                    `${subKey}: ${getValueByType(typeValue)}`
                  );
                });

              nameList.push(subName);
              subCode.push(
                `
/**
 * @description ${apiName} buildResAnyTyped
 * @url ${url}
 */
export type ${subName} = {
${subTypeCode.length ? `\n\t${subTypeCode.join("\n\t")}` : ""}}
`.trim()
              );

              subValueCode.push(
                `
/**
 * @description ${apiName} buildResAnyTyped
 * @url ${url}
 */
export const ${subName}Value = {
${subValueTypeCode.length ? `\n\t${subValueTypeCode.join("\n\t")}` : ""}
}
`.trim()
              );
            } else {
              typeCode.push(
                `${key}: ${dataType};${
                  item.description ? ` // ${item.description}` : ""
                }`
              );
              valueCode.push(
                `${key}: ${getValueByType(dataType)},${
                  item.description ? ` // ${item.description}` : ""
                }`
              );
            }
          }
        });
    }
  }

  return {
    name: nameList,
    code: `${subCode.join("\n")}
/**
 * @description ${apiName} buildResAnyTyped
 * @url ${url}
 */
export type ${name} = {${typeCode.length ? `\n\t${typeCode.join("\n\t")}` : ""}
}`.trim(),
    valueCode: `${subValueCode.join("\n")}
/**
 * @description ${apiName} buildResAnyTyped
 * @url ${url}
 */
export const ${name}Value = {${
      valueCode.length ? `\n\t${valueCode.join("\n\t")}` : ""
    }
}`.trim(),
  };
};

export const buildResArrayTyped = (props) => {
  const { url, name, apiName, params } = props;

  const typeCode = [];
  const valueCode = [];
  if (params.items.properties) {
    Object.keys(params.items.properties)
      .sort((a, b) => a.localeCompare(b))
      .forEach((key) => {
        const item = params.items.properties[key];
        typeCode.push(
          `${key}: ${item.type};${
            item.description ? ` // ${item.description}` : ""
          }`
        );
        valueCode.push(
          `${key}: ${getValueByType(item.type)},${
            item.description ? ` // ${item.description}` : ""
          }`
        );
      });
  }
  return {
    name: [`${name}Item`],
    deleteName: name,
    code: `
/**
 * @description ${apiName} buildResArrayTyped
 * @url ${url}
 */
export type ${name}Item = {${
      typeCode.length ? `\n\t${typeCode.join("\n\t")}` : ""
    }  
}`.trim(),
    valueCode: `
/**
 * @description ${apiName} buildResArrayTyped
 * @url ${url}
 */
export const ${name}ItemValue = {${
      valueCode.length ? `\n\t${valueCode.join("\n\t")}` : ""
    }
}`.trim(),
  };
};

export const getValueByType = (type) => {
  if (type.includes("[]")) {
    return "[]";
  } else if (type.includes("string")) {
    return "''";
  } else if (type.includes("number")) {
    return "-1";
  } else if (type.includes("boolean")) {
    return "false";
  } else {
    return "undefined";
  }
};

export const fnCode = (
  dataList,
  methodImport,
  requestImport,
  responseImport
) => {
  const codeString = dataList
    .filter((i) => !!i.fnCode)
    .map((i) => i.fnCode)
    .join("\n");
  return `${methodImport}
${requestImport.replace(
  /\$/,
  `\n\t${dataList
    .filter((i) => {
      let list = i.requestName;
      list = list.filter((s) =>
        new RegExp("[^a-zA-Z]" + s + "[^a-zA-Z]").test(codeString)
      );
      return list.length > 0;
    })
    .map((i) => {
      return i.requestName.sort((a, b) => a.localeCompare(b)).join(",\n\t");
    })
    .sort((a, b) => a.localeCompare(b))
    .join(",\n\t")},\n`
)}
${responseImport.replace(
  /\$/,
  `\n\t${dataList
    .filter((i) => {
      let list = i.responseName;
      list = list.filter((s) =>
        new RegExp("[^a-zA-Z]" + s + "[^a-zA-Z]").test(codeString)
      );
      return list.length > 0;
    })
    .map((i) => {
      return i.responseName.sort((a, b) => a.localeCompare(b)).join(",\n\t");
    })
    .sort((a, b) => a.localeCompare(b))
    .join(",\n\t")},\n`
)}
${codeString}
    `;
};

export const reqCode = (dataList) => {
  return `
${dataList
  .filter((i) => !!i.reqCode)
  .map((i) => i.reqCode)
  .join("\n\n")}

export default {\n\t${dataList
    .filter((i) => i.requestName?.length > 0)
    .map((i) => {
      return i.requestName.sort((a, b) => a.localeCompare(b)).join(",\n\t");
    })
    .sort((a, b) => a.localeCompare(b))
    .join(",\n\t")},
}`;
};

export const resCode = (dataList) => {
  return `
\n${dataList
    .filter((i) => !!i.resCode)
    .map((i) => i.resCode)
    .join("\n\n")}

export default {
\t${dataList
    .filter((i) => i.responseName?.length > 0)
    .map((i) => {
      return i.responseName.sort((a, b) => a.localeCompare(b)).join(",\n\t");
    })
    .sort((a, b) => a.localeCompare(b))
    .join(",\n\t")},
}
`;
};

const isStringType = (key) => {
  return (
    /email|phone|name|avatar|url|title/i.test(key) ||
    /\w+(No|Time|Title|By|Name)$/.test(key)
  );
};

export const resValueCode = (dataList) => {
  return `
\n${dataList
    .filter((i) => !!i.resValueCode)
    .map((i) => i.resValueCode)
    .join("\n\n")}

export default {
\t${dataList
    .filter((i) => i.responseValueName?.length > 0)
    .map((i) => {
      return i.responseValueName
        .sort((a, b) => a.localeCompare(b))
        .join(",\n\t");
    })
    .sort((a, b) => a.localeCompare(b))
    .join(",\n\t")},
}`;
};

export const clearResponseData = (data) => {
  if (data === null) {
    return "number | string";
  } else if (Array.isArray(data)) {
    if (data.length === 0) {
      return "any[]";
    }
    let trueData = data.filter((i) => i !== null);
    if (trueData.length === 0 && data.length > 0) {
      trueData = [data[0]];
    }
    if (typeof trueData[0] === "object") {
      let valueMap = {};
      data.forEach((item) => {
        Object.keys(item)
          .sort((a, b) => a.localeCompare(b))
          .forEach((key) => {
            valueMap[key] =
              item[key] === null && isStringType(key)
                ? "string"
                : clearResponseData(item[key]);
          });
      });
      return [valueMap];
    } else if (Array.isArray(trueData[0])) {
      return "any[][]";
    } else {
      return typeof trueData[0] + "[]";
    }
  } else if (typeof data === "object") {
    let valueMap = {};
    Object.keys(data)
      .sort((a, b) => a.localeCompare(b))
      .forEach((key) => {
        valueMap[key] =
          data[key] === null && isStringType(key)
            ? "string"
            : clearResponseData(data[key]);
      });
    return valueMap;
  } else {
    return typeof data;
  }
};

export const deepMerge = (oldRes, newRes, isFirst = false) => {
  let baseType = ["string", "number", "boolean", "any", "any[]", "any[][]"];
  if (oldRes === null || oldRes === undefined || newRes === null) {
    return oldRes || newRes;
  } else if (typeof oldRes === "string") {
    if (baseType.includes(oldRes) && typeof oldRes === typeof newRes) {
      return oldRes;
    } else {
      if (JSON.stringify(oldRes) !== JSON.stringify(newRes)) {
        console.log(`整体结构变化: 由【${oldRes}】变成了【${newRes}】`);
      }
      return newRes;
    }
  } else {
    if (
      (Array.isArray(oldRes) && Array.isArray(newRes)) ||
      (!Array.isArray(oldRes) && !Array.isArray(newRes))
    ) {
      if (Array.isArray(newRes)) {
        //合并数组
        return [deepMerge(oldRes[0], newRes[0])];
      } else {
        let obj = {};
        if (isFirst) {
          if (Object.keys(newRes).length === 0) {
            return oldRes;
          }
        }
        // 合并对象
        for (let key in oldRes) {
          let oldV = oldRes[key];
          let newV = newRes[key];
          if (newV === undefined) {
            console.log(`删除了字段: ${key}:${oldV}`);
          } else {
            obj[key] = deepMerge(oldV, newV);
          }
        }
        for (let key in newRes) {
          let oldV = oldRes[key];
          let newV = newRes[key];
          if (oldV === undefined) {
            console.log(`新增了字段: ${key}:${newV}`);
            obj[key] = newV;
          } else {
            obj[key] = deepMerge(oldV, newV);
          }
        }
        return obj;
      }
    } else {
      if (!baseType.includes(newRes)) {
        if (JSON.stringify(oldRes) !== JSON.stringify(newRes)) {
          console.log(`整体结构变化: 由【${oldRes}】变成了【${newRes}】`);
        }
        return newRes;
      } else {
        return oldRes;
      }
    }
  }
};
