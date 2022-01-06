import http from '../index'
import { IAccount, ILoginResult, IUserInfo } from './types'
import { IDataType } from '../@types'
enum LoginApi {
  AccountLohin = '/login',
  UserInfo = '/users/', //用法 、/users/1
  UserMenus = '/role/' // 用法 、/role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return http.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLohin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return http.get<IDataType<IUserInfo>>({
    url: LoginApi.UserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return http.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
