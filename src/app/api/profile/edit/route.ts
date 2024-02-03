import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {userId, bio, username, image, backImage}  = body;
        const existingUser = await db.user.findUnique({ where: { id: parseInt(userId) }  });
            if (!existingUser) {
                return NextResponse.json({ message: "User not found!" }, { status: 404 });
            }
            
        const existingProfile = await db.profile.findUnique({ where: { userId: parseInt(userId) } });
            if (!existingProfile) {
                 return NextResponse.json({ message: "Profile not found!" }, { status: 404 });
            }
        await db.user.update({
            where: { id: parseInt(userId)  },
            data: {
              username: username ? username : existingUser.username,
              avatar: image ? image : existingUser.avatar,
            },
        })
        await db.profile.update({
            where: { userId: parseInt(userId) },
            data: {
              bio: bio ? bio : existingProfile.bio,
              backImage: backImage ? backImage : existingProfile.backImage
            },
          });
        return NextResponse.json({message: "User and profile updated successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}