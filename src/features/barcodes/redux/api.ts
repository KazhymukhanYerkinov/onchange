import { axiosBaseQuery } from '@/services';
import { createApi } from '@reduxjs/toolkit/query/react';
// types
import { type IUpdateBarcodeBody, type IBarcode, type IBarcodesQueryParams, type ICreateBarcodeBody } from './types';

export const barcodesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  reducerPath: 'barcodesApi',
  keepUnusedDataFor: 60,
  tagTypes: ['Barcodes'],
  endpoints: (builder) => ({

    getBarcode: builder.query<IBarcode, IBarcodesQueryParams>({
      query: (id: string) => ({
        url: `/barcodes/${id}`,
        method: 'GET'
      })
    }),

    getBarcodes: builder.query<IBarcode[], IBarcodesQueryParams>({
      query: () => ({
        url: '/barcodes',
        method: 'GET'
      }),
      providesTags: ['Barcodes']
    }),

    createBarcode: builder.mutation<Promise<void>, ICreateBarcodeBody>({
      query: (data) => ({
        url: '/barcodes',
        method: 'POST',
        data
      }),
      invalidatesTags: ['Barcodes']
    }),

    updateBarcode: builder.mutation<Promise<void>, IUpdateBarcodeBody>({
      query: ({ id, data }) => ({
        url: `/barcodes/${id}`,
        method: 'PATCH',
        data
      }),
      invalidatesTags: ['Barcodes']
    }),

    removeBarcode: builder.mutation<Promise<void>, IBarcodesQueryParams>({
      query: (id: number) => ({
        url: `/barcodes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Barcodes']
    })

  })
});

export const {
  useGetBarcodeQuery,
  useGetBarcodesQuery,
  useCreateBarcodeMutation,
  useUpdateBarcodeMutation,
  useRemoveBarcodeMutation
} = barcodesApi;
