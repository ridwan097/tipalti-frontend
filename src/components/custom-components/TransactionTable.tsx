'use client';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetTransactionsQuery } from '@/store/api/transactionsApi';
import { Transaction } from '@/store/types';

export default function TransactionTable() {
  const { data, error, isLoading } = useGetTransactionsQuery();

  if (isLoading) return <Skeleton className='h-20 w-full' />;
  if (error || (!isLoading && !data))
    return <p className='text-red-500'>Failed to load transactions.</p>;

  const transactions: Transaction[] = data?.transactions ?? [];

  return (
    <div className='overflow-x-auto'>
      <Table className='w-full border border-gray-300 shadow-sm'>
        {/* Header Section */}
        <TableHeader className='bg-gray-100 border-b border-gray-300'>
          <TableRow className='border-b border-gray-300'>
            <TableHead className='font-bold text-gray-700 p-3 border-r border-gray-300'>
              ID
            </TableHead>
            <TableHead className='font-bold text-gray-700 p-3 border-r border-gray-300'>
              Date
            </TableHead>
            <TableHead className='font-bold text-gray-700 p-3 border-r border-gray-300'>
              Amount
            </TableHead>
            <TableHead className='font-bold text-gray-700 p-3 border-r border-gray-300'>
              Merchant
            </TableHead>
            <TableHead className='font-bold text-gray-700 p-3'>
              Category
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Body Section */}
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              className='border-b border-gray-300 hover:bg-gray-50 transition'
            >
              <TableCell className='p-3 border-r border-gray-200'>
                {transaction.id}
              </TableCell>
              <TableCell className='p-3 border-r border-gray-200'>
                {new Date(transaction.date).toLocaleDateString()}
              </TableCell>
              <TableCell className='p-3 border-r border-gray-200'>
                ${transaction.amount.toFixed(2)}
              </TableCell>
              <TableCell className='p-3 border-r border-gray-200 capitalize'>
                {transaction.merchant}
              </TableCell>
              <TableCell className='p-3 capitalize'>
                {transaction.category}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
