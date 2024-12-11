import { redirect } from 'next/navigation';
import React from 'react';

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    // if (id == 1) {
    //     redirect(`/gallery`);
    // }
    return data;
}

export const generateMetadata = async ({ params }) => {
    const thisId = (await params).id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${thisId}`)
    const postData = await res.json()

    return {
        // title: `${postData.title}`,
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const PostDetailsPage = async ({ params }) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // throttle for 3 seconds to check the loading state 

    const thisId = (await params).id;
    if (!params || !thisId) {
        throw new Error('Missing or invalid params');
    }
    const { title, body } = await getDetailsPost(thisId)
    return (
        <div className='px-12 py-24 text-3xl'>
            <h6>Title: {title}</h6>
            <h6>
                Description: {body}
            </h6>
        </div>
    );
};

export default PostDetailsPage;