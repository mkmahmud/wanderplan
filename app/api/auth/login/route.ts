// app/api/auth/login/route.ts

import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const email = 'mk1@gmail.com';
        const password = '1234';
        // const { email, password } = await request.json();

        if (!email || !password) {
            return Response.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return Response.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return Response.json({ error: 'Invalid Passwords' }, { status: 401 });
        }

        // Create JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        );

        // Set cookie
        (await
            // Set cookie
            cookies()).set({
                name: 'token',
                value: token,
                httpOnly: true,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 7 days
                sameSite: 'lax',
            });

        return Response.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
            },
        });
    } catch (err) {
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}
