import { IDataType } from '@/service/@types'
import http from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return http.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
