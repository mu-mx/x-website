'use client';

import Link from 'next/link';
import { Button } from 'antd';
import { useEffect } from 'react';

import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR('/api/website', fetcher);
  console.log('data - >:', data)

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          console.log('2 - >:', 2);
          console.log('data - >:', data);
        }}
      >
        Button
      </Button>
    </>
  );
}
