export interface IBarcode {
  id: number
  code: string
  description: string
}

export interface ICreateBarcodeBody {
  code: string
  description: string
}

export interface IUpdateBarcodeForm {
  id: number
  code: string
  description: string
}

export interface IUpdateBarcodeBody {
  id: string
  data: IUpdateBarcodeForm
}

export interface IBarcodesQueryParams {}
