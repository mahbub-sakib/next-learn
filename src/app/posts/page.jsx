import React from 'react';

//create data fetching function
const getPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    return data;
}

const PostPage = async () => {
    const postsData = await getPosts();
    console.log(postsData);
    return (
        <div>
            Post page
        </div>
    );
};

export default PostPage;