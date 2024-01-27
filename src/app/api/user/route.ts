import {db} from '@/lib/db';
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {username, password, tag}  = body;
        
        // check if tag alreadyh exists
        const existingUserByTag = await db.user.findUnique({
            where: {tag: tag}
        });
        if (existingUserByTag) {
            return NextResponse.json({user: null, message: "User with this tag already exists"}, {status: 409})
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                tag,
                password: hashedPassword
            }
        })
        const {password: newUserPassword, ...rest} = newUser;
        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: "Something wend wrong!"}, {status: 500});
    }

}