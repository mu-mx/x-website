'use client';

export const dynamic = 'force-static';

import Link from 'next/link';
import { Button } from 'antd';
import { useEffect } from 'react';

import Home from '@/app/views/Home';

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
