import { axios } from './get-axios';
import { type IAxiosBaseUrl } from './types';
import { type AxiosRequestConfig } from 'axios';
import { type BaseQueryFn } from '@reduxjs/toolkit/query/react';

export const axiosBaseQuery = ({ baseUrl }: IAxiosBaseUrl): BaseQueryFn<{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
}> => async ({ url, method, data, params }) => {
  try {
    const axiosData = await axios({ url: baseUrl + url, method, data, params });
    return { data: axiosData.data };
  } catch (axiosError) {
    return { error: axiosError };
  }
};
