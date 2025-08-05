// app/api/auth/me/route.ts
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
    const token = (await cookies()).get('token')?.value;

    if (!token) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        return Response.json({ user: decoded }, { status: 200 });
    } catch {
        return Response.json({ error: 'Invalid token' }, { status: 401 });
    }
}
