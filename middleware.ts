// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname;

    const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register';
    const isProtectedPage = pathname.startsWith('/dashboard');

    if (token && isAuthPage) {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
            return NextResponse.redirect(new URL('/dashboard', request.url));
        } catch {

        }
    }

    if (!token && isProtectedPage) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/auth/login',
        '/auth/register',
        '/dashboard/:path*',
    ],
};
