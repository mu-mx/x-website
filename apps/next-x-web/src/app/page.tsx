'use client';

import Link from 'next/link';
import { Button } from 'antd';
import { useEffect } from 'react';

import Home from '@/app/views/Home';

import useSWR from 'swr';


const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());


export default function Page() {
  // const { data, error, isLoading } = useSWR('/api/website', fetcher);

  return (
    <>
      <Home />
    </>
  );
}
