import {db} from '@/lib/db';
import { BioRhyme } from 'next/font/google';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {id, description, img, name}  = body;
      
        const existingGroup = await db.group.findUnique({ where: { id: parseInt(id) } });
            if (!existingGroup) {
                 return NextResponse.json({ message: "Group not found!" }, { status: 404 });
            }
        await db.group.update({
            where: { id: parseInt(id) },
            data: {
              name: name,
              description: description,
              img: img ? img : existingGroup.img
            },
          });
        return NextResponse.json({message: "Group updated successfully"}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}