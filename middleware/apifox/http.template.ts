// api接口前缀

// 在此返回登录用户信息
const useUserStore = () => {
  return {
    token: localStorage.getItem("token") || "",
  };
};

// 在此进行注销账号操作
const logout = () => {
  console.log("注销账号");
};

// 请求API前缀
// import.meta.env.VITE_APP_API_PREFIX || "/api"
const api_base = import.meta.env.VITE_APP_API_PREFIX;

// 提示错误用的方法
const alertError = (msg: string) => {
  console.log(msg);
  // 在此执行错误提示操作
  //   window.$message.error(msg, {
  //     keepAliveOnHover: true,
  //   });
};

export type ObjAny = {
  [key: string]: any;
};
export type LikeString = string | null;
export type AjaxReturn<T> = {
  code?: number;
  data: T;
  msg: LikeString;
  total?: number;
};
export type UploadProgressFn = (
  loaded: number,
  total: number,
  completed: boolean
) => void | undefined;
export type RequestOptionProps = {
  method?: MethodProps;
  headers?: ObjAny;
  params?: ObjAny;
  uploadProgress?: UploadProgressFn;
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text";
};
export type MethodProps = "GET" | "POST" | "PUT" | "DELETE";

export async function http<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  url = api_base + url;

  return new Promise((resolve) => {
    const { method = "POST", headers = {}, uploadProgress } = options;
    const params = clearNullData(options.params);
    let dataStr =
      params instanceof FormData
        ? params
        : method === "POST" || method === "PUT"
        ? JSON.stringify(params)
        : objToQueryString(params);

    if (method === "GET" || method === "DELETE") {
      // GET请求方式，需要把参数放到query中 /xxx?id=xx
      if (dataStr) {
        url += "?" + dataStr;
      }

      // 清空请求体内容
      dataStr = "";
    }

    const xhr = new XMLHttpRequest();
    if (options.responseType) {
      xhr.responseType = options.responseType;
    }

    // 打开请求
    xhr.open(method.toUpperCase(), url);
    // 设置请求头
    setHeaders(xhr, headers);
    listenEvent(
      xhr,
      (data) => {
        resolve(data as AjaxReturn<T>);
      },
      uploadProgress
    );
    xhr.send(dataStr);
  });
}

export async function request<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  const userStore = useUserStore();

  options.headers = {
    Timezone: new Date().getTimezoneOffset(),
    Authorization: userStore.token || "",
    // Let the browser set it
    ...(options.params instanceof FormData
      ? {}
      : options.method === "POST" || options.method === "PUT"
      ? { "Content-Type": "application/json" }
      : { "Content-Type": "application/x-www-form-urlencoded" }),
    ...(options.headers || {}),
  };
  return http<T>(url, options);
}

export async function get<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  options.method = "GET";

  return request<T>(url, options);
}

export async function put<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  options.method = "PUT";

  return request<T>(url, options);
}

export async function del<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  options.method = "DELETE";

  return request<T>(url, options);
}

export async function post<T>(
  url: string,
  options: RequestOptionProps = {}
): Promise<AjaxReturn<T>> {
  options.method = "POST";

  return request<T>(url, options);
}

function listenEvent(
  xhr: XMLHttpRequest,
  resolve: (data: AjaxReturn<ObjAny | null>) => void,
  uploadProgress?: UploadProgressFn
) {
  // 上传进度回调
  if (uploadProgress) {
    xhr.upload.onprogress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        uploadProgress(event.loaded, event.total, event.total === event.loaded);
      }
    };
  }

  xhr.onerror = async () => {
    const msg = "请求错误";

    alertError(msg);
    resolve({ data: null, code: 500, msg });
  };
  xhr.onabort = () => {
    const msg = "请求已取消";

    resolve({ data: null, code: 0, msg });
  };
  xhr.upload.onabort = () => {
    const msg = "已取消上传";

    resolve({ data: null, code: 0, msg });
  };
  xhr.onload = async () => {
    if (xhr.status === 200) {
      try {
        const type = xhr.getResponseHeader("content-type");
        if (type?.includes("/json")) {
          const { code, msg, data, total }: any = JSON.parse(xhr.response);

          if (code === 200) {
            resolve({
              data,
              code,
              msg: null,
              ...(total ? { total } : {}),
            });
          } else {
            if (code === 401) {
              logout();
              if (location.search.includes("token=")) {
                location.replace("/login");
              } else {
                location.reload();
              }
            } else {
              alertError(msg);
            }

            resolve({ data: null, code, msg });
          }
        } else {
          resolve(xhr.response);
        }
      } catch (e) {
        const msg = "数据格式错误";

        alertError(msg);
        resolve({ data: null, code: 500, msg });
      }
    } else {
      const msg = `请求失败：${xhr.status} ${xhr.statusText}`;

      alertError(msg);
      resolve({ data: null, code: xhr.status, msg });
    }
  };
}

function forEachObj(obj: ObjAny, callback: (value: any, key: string) => void) {
  for (const key in obj) {
    callback(obj[key], key);
  }
}

function setHeaders(xhr: XMLHttpRequest, headers: ObjAny) {
  forEachObj(headers, (_value, key) => {
    if (headers[key] !== null && headers[key] !== undefined) {
      xhr.setRequestHeader(key, headers[key].toString());
    }
  });
}

export function objToQueryString(data?: ObjAny | null) {
  if (!data) {
    return "";
  }

  const dataArr: string[] = [];

  forEachObj(data, (value, key) => {
    // 过滤undefined的字段
    if (value !== undefined) {
      dataArr.push(`${key}=${value}`);
    }
  });

  return dataArr.join("&");
}

export function clearNullData(
  params: any,
  clearList: any[] = [undefined, "", null]
) {
  if (params instanceof FormData) {
    return params;
  }
  let obj: any = {};

  if (params && typeof params === "object" && !Array.isArray(params)) {
    for (const i in params) {
      const val: any = params[i];

      if (!clearList.includes(val)) {
        obj[i] = val;
      }
    }
  } else {
    obj = params;
  }

  return obj;
}
