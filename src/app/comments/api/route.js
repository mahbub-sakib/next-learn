import { NextResponse } from 'next/server';

const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 2"
    },
    {
        id: 3,
        text: "Comment 3"
    }
]
// export async function GET() {
//     // return Response.json(

//     //     comments
//     //     , {
//     //         headers: {
//     //             "Set-Cookies": "theme=dark"
//     //         }
//     //     })
//     // const thisComments = comments;

//     const response = NextResponse.json(comments);
//     response.cookies.set('theme', 'dark', {
//         httpOnly: true, // Prevents JavaScript access to cookies
//         secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//         sameSite: 'strict', // Controls cross-site cookie behavior
//         maxAge: 60 * 60 * 24 * 7 // Set cookie to expire in 7 days
//     });

//     return response;

// }

export async function GET() {
    const response = NextResponse.json({ message: "Cookie test" });

    response.cookies.set('testCookie', 'testValue', {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
}

export async function POST(request) {
    const newComment = await request.json()
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })
    return Response.json({
        message: 'new comment added',
        comments
    })
}

// const comments = [
//     {
//         id: 1,
//         text: "Comment 1"
//     },
//     {
//         id: 2,
//         text: "Comment 2"
//     },
//     {
//         id: 3,
//         text: "Comment 3"
//     }
// ]