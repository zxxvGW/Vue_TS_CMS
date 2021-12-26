export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

/*Role*/
export interface Role {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}
/*Department*/
export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: Role
  department: Department
}

export interface IDataType<T = any> {
  code: number
  data: T
}
