import React from 'react';

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

const PostDetailsPage = async ({ params }) => {
    const { title, body } = await getDetailsPost(params.id)
    return (
        <div>
            <h6>Title: {title}</h6>
            <h6>
                Description: {body}
            </h6>
        </div>
    );
};

export default PostDetailsPage;