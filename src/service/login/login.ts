import http from '../index'
import { IAccount, IDataType, ILoginResult } from './types'
enum LoginApi {
  AccountLohin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return http.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLohin,
    data: account
  })
}
