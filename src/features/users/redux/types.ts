export interface IUser {
  id: number
  name: string
  surname: string
  patronymic: string
  is_active: boolean
  phone: string
  otp: number
}

export interface ICreateUserBody {
  name: string
  surname: string
  patronymic: string
  phone: string
  otp: number
}

export interface IUpdateUserForm {
  name: string
  surname: string
  patronymic: string
  phone: string
  otp: number
}

export interface IUpdateUserBody {
  id: string
  data: IUpdateUserForm
}

export interface IUsersQueryParams {}
