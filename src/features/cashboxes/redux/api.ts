import { axiosBaseQuery } from '@/services';
import { createApi } from '@reduxjs/toolkit/query/react';
import { type ICashboxesQueryParams, type ICashbox, type ICreateCashboxForm, type IUpdateCashboxBody } from './types';

export const cashboxesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  reducerPath: 'cashboxesApi',
  keepUnusedDataFor: 60,
  tagTypes: ['Cashboxes'],
  endpoints: (builder) => ({

    getCashbox: builder.query<ICashbox, ICashboxesQueryParams>({
      query: (id: string) => ({
        url: `/cashboxes/${id}`,
        method: 'GET'
      })
    }),

    getCashboxes: builder.query<ICashbox[], ICashboxesQueryParams>({
      query: () => ({
        url: '/cashboxes',
        method: 'GET'
      }),
      providesTags: ['Cashboxes']
    }),

    createCashbox: builder.mutation<Promise<void>, ICreateCashboxForm>({
      query: (data) => ({
        url: '/cashboxes',
        method: 'POST',
        data
      }),
      invalidatesTags: ['Cashboxes']
    }),

    updateCashbox: builder.mutation<Promise<void>, IUpdateCashboxBody>({
      query: ({ id, data }) => ({
        url: `/cashboxes/${id}`,
        method: 'PATCH',
        data
      }),
      invalidatesTags: ['Cashboxes']
    }),

    removeCashbox: builder.mutation<Promise<void>, ICashboxesQueryParams>({
      query: (id: number) => ({
        url: `/cashboxes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cashboxes']
    })

  })
});

export const {
  useGetCashboxQuery,
  useGetCashboxesQuery,
  useCreateCashboxMutation,
  useUpdateCashboxMutation,
  useRemoveCashboxMutation
} = cashboxesApi;
