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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>${transaction.amount.toFixed(2)}</TableCell>
            <TableCell>
              {new Date(transaction.date).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
