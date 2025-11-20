// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('accessToken')?.value;
    const pathname = req.nextUrl.pathname;

    const isProtectedPage = pathname.startsWith('/dashboard');
    const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register';

    // If user is logged in and tries to access auth pages, redirect to dashboard
    if (accessToken && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // If user is NOT logged in and tries to access dashboard, redirect to login
    if (!accessToken && isProtectedPage) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Otherwise, allow
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/auth/login',
        '/auth/register',
        '/dashboard/:path*',
    ],
};
