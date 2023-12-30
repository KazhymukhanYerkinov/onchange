export interface IStore {
  id: number
  name: string
  address: string
}

export interface ICreateStoreBody {
  name: string
  address: string
}

export interface IUpdateStoreBody {
  id: string
  data: IUpdateStoreForm
}

export interface IUpdateStoreForm {
  name: string
}

export interface IStoresQueryParams {}
