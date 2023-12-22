import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';
import { headers } from 'next/headers';
import { successBody, errorBody } from '@/app/api/utils/config';

export async function middleware(request: any, event: NextFetchEvent) {
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get('origin') ?? '';
  console.log('origin - >:', origin);
  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('access-control-allow-credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', '*');
  response.headers.set('Access-Control-Allow-Headers', '*');

  if (request.method.toUpperCase() == 'OPTIONS') {
    return response;
  }

  let token = request.headers.get('Authorization') || '';
  console.log('token - >:', token);

  if (!token) {
    return NextResponse.json(errorBody(401), { status: 200 });
  }
  return response;
}

export const config = {
  matcher: ['/api/auth', '/api/webSite/:path*', '/api/category/:path*'],
};
