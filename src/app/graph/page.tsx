'use client';
import TransactionGraph from '@/components/custom-components/TransactionGraph';
import Link from 'next/link';

export default function GraphPage() {
  return (
    <main className='p-6 flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl font-bold mb-4'>Transaction Trends</h1>
      <TransactionGraph />
      <Link
        href='/'
        className='mt-4 inline-block text-blue-600 hover:underline'
      >
        Back to Table
      </Link>
    </main>
  );
}
