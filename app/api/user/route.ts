import { db } from '../../../lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, username, password } = body;

        if (!email || !username || !password) {
            return NextResponse.json({ user: null, message: 'Missing fields' }, { status: 400 });
        }

        const existingUserByEmail = await db.user.findUnique({ where: { email } });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: 'Email already in use' }, { status: 400 });
        }

        const existingUserByUsername = await db.user.findUnique({ where: { username } });
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: 'Username already in use' }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ user: newUser, message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/register:', error);
        return NextResponse.json({ user: null, message: 'Something went wrong' }, { status: 500 });
    }
}
