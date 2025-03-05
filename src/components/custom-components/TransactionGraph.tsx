'use client';

import { formatDate } from '@/lib/utils';
import { useGetTransactionsQuery } from '@/store/api/transactionsApi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function TransactionGraph() {
  const { data } = useGetTransactionsQuery();
  const transactions = Array.isArray(data?.transactions)
    ? data?.transactions
    : [];

  return (
    <div className='w-full h-[400px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={transactions}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' tickFormatter={formatDate} />
          <YAxis />
          <Tooltip labelFormatter={formatDate} />
          <Line type='monotone' dataKey='amount' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
