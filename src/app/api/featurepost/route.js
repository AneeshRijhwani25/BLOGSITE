import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'

// GET SINGLE POST
export const GET = async () => {
    const randomPost = await prisma.post.findMany({
        take: 1,
        skip: Math.floor(Math.random() * (await prisma.post.count())),
      });
    // console.log(randomPost)
    if (!randomPost) {
        return new NextResponse(JSON.stringify({ message: 'No post found' }, { status: 404 }));
    }

    return new NextResponse(JSON.stringify(randomPost, { status: 200 }));
}