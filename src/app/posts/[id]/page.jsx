import React from 'react';

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

// export const generateMetadata = async ({ params }) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const postData = res.json()

//     return {
//         title: `Post details ${params.id}`,
//         description: postData.body
//     }
// }

const PostDetailsPage = async ({ params }) => {
    if (!params || !params.id) {
        throw new Error('Missing or invalid params');
    }
    const { title, body } = await getDetailsPost(params.id)
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