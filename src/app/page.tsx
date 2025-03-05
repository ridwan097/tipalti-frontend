'use client';
import TransactionTable from '@/components/custom-components/TransactionTable';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-6'>
      <div className='flex flex-col items-center text-center mb-4'>
        <h1 className='text-2xl font-bold'>Transactions</h1>
        <Link href='/graph' className='mt-2 text-blue-600 hover:underline'>
          View Graph
        </Link>
      </div>

      <TransactionTable />
    </main>
  );
}
