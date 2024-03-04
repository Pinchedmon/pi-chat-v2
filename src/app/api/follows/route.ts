import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const data = await db.user.findUnique({
        where: { id: Number(id) },
        select: {
            follows: true
        }
      }) ;
      console.log(data)
      if (!data) {
        return NextResponse.json({Message: 'no friends' }, { status: 404 });
      }
 
    
      const getUsers = async() => {
        const users: any[]= [];
        data.follows.forEach(async (id: number) =>
        users.push( db.user.findUnique({
           where: { id: Number(id) },
           select: {
               avatar: true,
               id: true,
               tag: true,
               username: true

           }
         })
       ))
     
        return users;
      }
        
      const friends = await getUsers()
    return NextResponse.json({friends: friends }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}