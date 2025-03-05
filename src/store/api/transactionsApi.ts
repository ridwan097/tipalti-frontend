import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TransactionsResponse } from '../types';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tip-transactions.vercel.app/api',
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionsResponse, void>({
      query: () => '/transactions?page=1',
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
