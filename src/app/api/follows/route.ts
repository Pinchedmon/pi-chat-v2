import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') as string) || 1; 

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
        return NextResponse.json({Message: 'no follows' }, { status: 404 });
      }
      
      const getUsers = async () => {
        const promises = data.follows.map(async (id: number) =>{
          let x = await db.user.findUnique({
            where: { 
              id: Number(id),
              username: { contains: search || '' }
             },
            select: {
                avatar: true,
                id: true,
                tag: true,
                username: true
            }
            
          })
          return x;
        })
        const results = await Promise.all(promises);
        return results.slice(0 + ((page-1) * 10), page*10);
      }
        
    
    return NextResponse.json({follows: await getUsers() }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}