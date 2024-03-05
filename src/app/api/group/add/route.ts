import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name,  bio, img, id}  = body;
        // if ( !authorId) {
        //     return NextResponse.json({post: null, message: "User with this tag already exists"}, {status: 409})
        // }
        const group = await db.group.create({
            data: {
                name: name,
                img: img,
                description: bio,
                userId: parseInt(id)
            },
          });
        const user = await db.user.update({
            where: { id: Number(id) },
            data: { myGroups: { connect: { id: Number(group.id) } } },
        });
        return NextResponse.json({ group, message: "Group created successfully"}, {status: 201});
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err}, {status: 500});
    }

}