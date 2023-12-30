import { axiosBaseQuery } from '@/services';
import { createApi } from '@reduxjs/toolkit/query/react';

// types
import { type IUsersQueryParams, type IUser, type ICreateUserBody, type IUpdateUserBody } from './types';

export const usersApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  reducerPath: 'usersApi',
  keepUnusedDataFor: 60,
  tagTypes: ['Users'],
  endpoints: (builder) => ({

    getUser: builder.query<IUser, IUsersQueryParams>({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: 'GET'
      })
    }),

    getUsers: builder.query<IUser[], IUsersQueryParams>({
      query: () => ({
        url: '/users',
        method: 'GET'
      }),
      providesTags: ['Users']
    }),

    createUser: builder.mutation<Promise<void>, ICreateUserBody>({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        data
      }),
      invalidatesTags: ['Users']
    }),

    updateUser: builder.mutation<Promise<void>, IUpdateUserBody>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        data
      }),
      invalidatesTags: ['Users']
    }),

    removeUser: builder.mutation<Promise<void>, IUsersQueryParams>({
      query: (id: number) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })

  })
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useRemoveUserMutation
} = usersApi;
