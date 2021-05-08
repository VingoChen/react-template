import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from 'Utils/cookie';

interface ResponseData<T> {
  code: number;

  data: T;

  msg: string;
}

// 指定请求类型
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8',
};

// 指定请求地址
axios.defaults.baseURL = 'xxxx';

// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();

    // 校验token
    if (token) {
      config.headers.token = token;
    } else {
      window.location.href = '/login';
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<ResponseData<any>>) => {
  if (!response.data) {
    return Promise.resolve(response);
  }
  if (response.data.code === 401) {
    // 登录过期
    return Promise.reject(new Error(response.data.msg));
  }
  if (response.data.code === 200) {
    return response.data as any;
  }
  // 其他错误
  return Promise.reject(new Error(response.data.msg));
});

export const request = <T>(options: AxiosRequestConfig) => axios.request<T>(options);
