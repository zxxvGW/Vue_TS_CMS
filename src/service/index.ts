import HTTP from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const http = new HTTP({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     console.log('请求拦截')
  //     return config
  //   }
  // }
})

export default http
