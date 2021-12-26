import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}
