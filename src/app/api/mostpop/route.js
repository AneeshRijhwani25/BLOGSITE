// // Import necessary modules and dependencies
// import prisma from '@/utils/connect'
// import { NextResponse } from 'next/server';

// export const GET = async () => {
//     try {
//         // Get the top 4 most viewed posts
//         const top5Posts = await prisma.post.findMany({
//             orderBy: {
//                 views: 'desc', 
//             },
//             take: 4, 
//             include: {
//                 user: true,
//             },
//         });
//         console.log(top5Posts)
//         return new NextResponse(
//             JSON.stringify(top5Posts, { status: 200 })
//         );
//     } catch (err) {
//         console.log(err);
//         return new NextResponse(
//             JSON.stringify(
//                 {
//                     message: 'Something went wrong!',
//                 },
//                 { status: 500 }
//             )
//         );
//     }
// };



// Import necessary modules and dependencies
import prisma from '@/utils/connect'
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        
        const top4Posts = await prisma.post.findMany({
            orderBy: {
                views: 'desc', 
            },
            take: 4, 
            include: {
                user: true,
            },
        });

        return new NextResponse(
            JSON.stringify(top4Posts, { status: 200 })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify(
                {
                    message: 'Something went wrong!',
                },
                { status: 500 }
            )
        );
    }
};
