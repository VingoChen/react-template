import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from '@/utils/cookie';

interface ResponseData<T> {
  code: number;

  data: T;

  msg: string;
}

// 默认配置
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求拦截
service.interceptors.request.use(
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
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    /**
     * code example
     * code === 200 success
     * code === 401 token expired
     * ...
     */
    const res = response.data;
    if (res.code !== 200) {
      console.error(res.msg || 'response error');
      if (res.code === 401) {
        console.error(res.msg || '登录过期或未登录');
        // todo something
      }
      return Promise.reject(new Error(res.msg || 'response error'));
    }
    return res.data;
  },
  (error) => {
    console.error(error.msg);
    return Promise.reject(error);
  },
);

export const request = <T>(options: AxiosRequestConfig) => service.request<T>(options);
