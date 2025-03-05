'use client';
import TransactionGraph from '@/components/custom-components/TransactionGraph';
import Link from 'next/link';

export default function GraphPage() {
  return (
    <main className='p-6 flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl font-bold '>Expense Trends</h1>
      <Link
        href='/'
        className='mt-4 inline-block text-blue-600 hover:underline mb-4'
      >
        Back to Table
      </Link>

      <TransactionGraph />
    </main>
  );
}
