import { type IStore } from '@/features/stores/redux/types';

export interface ICashbox {
  id: number
  name: string
  currency: string
  store: IStore
}

export interface ICreateCashboxForm {
  name: string
  currency: string
  store: IStore
}

export interface IUpdateCashboxBody {
  id: string
  data: ICreateCashboxForm
}

export interface ICashboxesQueryParams {}
