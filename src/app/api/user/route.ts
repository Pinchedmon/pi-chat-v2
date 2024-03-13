import {db} from '@/lib/db';
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';

const userSchema = z
    .object({
        username: z.string().min(3, 'Username is required').max(16),
        tag: z.string().min(3, 'Username is required').max(16),
        password: z
            .string()
            .min(1, 'Password is required')
            .min(6, 'Password must have than 8 characters'),
        avatar: z
            .string().optional() 
    });
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {username, password, tag}  = userSchema.parse(body);
        
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
                password: hashedPassword,
                avatar: 'https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'
            }
        })
         await db.profile.create({
            data: {
              userId: newUser.id,
            },
          });
        const {password: newUserPassword, ...rest} = newUser;
        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: "Something wend wrong!"}, {status: 500});
    }

}