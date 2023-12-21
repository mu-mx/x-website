import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { successBody, errorBody } from '@/app/api/utils/config';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token') || '';

  if (token.includes('bea-')) {
    return NextResponse.next();
  }

  return NextResponse.json(errorBody(401), { status: 200 });
}

export const config = {
  matcher: '/api/:path*',
};
