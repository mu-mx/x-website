import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { successBody, errorBody } from '@/app/api/utils/config';

// This function can be marked `async` if using `await` inside
export async function middleware(request: any) {
  const searchParams = request.nextUrl.searchParams;
  let token = searchParams.get('token') || '';
  console.log('token - >:', token);

  if (!token) {
    try {
      const res = await request.json();
      token = res.token;
    } catch (err) {
      return NextResponse.json(errorBody(401), { status: 200 });
    }
  }

  if (token.includes('bea-')) {
    return NextResponse.next();
  }

  return NextResponse.json(errorBody(401), { status: 200 });
}

export const config = {
  matcher: ['/api/auth', '/api/webSite/:path*', '/api/category/:path*'],
};
