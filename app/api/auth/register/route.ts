import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';

// Only POST method is supported
export async function POST(request: Request) {
    try {
        const { email, password, fullName } = await request.json();

        if (!email || !password || !fullName) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
            },
        });

        return new Response(JSON.stringify({
            message: 'User registered',
            user: { id: user.id, email: user.email },
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Email already exists or server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
