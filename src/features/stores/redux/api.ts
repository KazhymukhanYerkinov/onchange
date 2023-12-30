import { axiosBaseQuery } from '@/services';
import { createApi } from '@reduxjs/toolkit/query/react';

// types
import { type IStoresQueryParams, type IStore, type ICreateStoreBody, type IUpdateStoreBody } from './types';

export const storesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  reducerPath: 'storesApi',
  keepUnusedDataFor: 60,
  tagTypes: ['Stores'],
  endpoints: (builder) => ({

    getStore: builder.query<IStore, IStoresQueryParams>({
      query: (id: string) => ({
        url: `/stores/${id}`,
        method: 'GET'
      })
    }),

    getStores: builder.query<IStore[], IStoresQueryParams>({
      query: () => ({
        url: '/stores',
        method: 'GET'
      }),
      providesTags: ['Stores']
    }),

    createStore: builder.mutation<IStore, ICreateStoreBody>({
      query: (data) => ({
        url: '/stores',
        method: 'POST',
        data
      }),
      invalidatesTags: ['Stores']
    }),

    updateStore: builder.mutation<Promise<void>, IUpdateStoreBody>({
      query: ({ id, data }) => ({
        url: `/stores/${id}`,
        method: 'PATCH',
        data
      }),
      invalidatesTags: ['Stores']
    }),

    removeStore: builder.mutation<Promise<void>, IStoresQueryParams>({
      query: (id: number) => ({
        url: `/stores/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Stores']
    })

  })
});

export const {
  useGetStoreQuery,
  useGetStoresQuery,
  useUpdateStoreMutation,
  useCreateStoreMutation,
  useRemoveStoreMutation
} = storesApi;
