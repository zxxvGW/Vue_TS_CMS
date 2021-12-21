import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestConfig, RequestInterceptors } from './types'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = true

class HTTP {
  instance: AxiosInstance
  // 添加可选拦截器，每一个实例都可以自主添加拦截器
  interceptors?: RequestInterceptors
  showLoadiing: boolean
  loading?: LoadingInstance

  constructor(config: RequestConfig) {
    // 创建实例
    this.instance = axios.create(config)
    // 绑定拦截器
    this.interceptors = config.interceptors
    // 默认请求时显示loading界面
    this.showLoadiing = config.showLoading ?? DEFAULT_LOADING
    // 添加所有实例的拦截器
    this.addDefaultInterceptors()
    // 添加实例传入的请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 添加实例传入的响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  // 添加所有实例的默认拦截器
  addDefaultInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        // 请求时显示loading界面
        if (this.showLoadiing) {
          // 挂载loading
          this.loading = ElLoading.service({
            lock: true,
            text: '数据请求中~~~'
          })
        }
        return config
      },
      (err) => {
        console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        this.loading?.close()

        return res.data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
  // request请求
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 添加请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 处理loading的显示
      if (config.showLoading === !DEFAULT_LOADING) {
        this.showLoadiing = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求的数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.重置showLoading,防止影响其他实例
          this.showLoadiing = DEFAULT_LOADING
          // 3.将结果通过resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 重置showLoading,防止影响其他实例
          this.showLoadiing = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HTTP
