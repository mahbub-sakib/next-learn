import React from 'react';
import { Headland_One } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: "About",
    description: "About page",
    keywords: ["about", "about page"]
};

// const getTime = async () => {
//     const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } });
//     const data = await res.json();
//     console.log(data);
//     return data.currentTime;
// }

const page = async () => {

    const currentTime = new Date().toISOString();
    // const currentTime = await getTime();
    const session = await getServerSession(authOptions);
    console.log({ session });
    return (
        <div className={`${headland.className} min-h-screen px-12 py-24`}>
            <h6 className='text-3xl'>About Page</h6>
            <h3 className='text-3xl text-red-400 mt-12'>Time: {currentTime}</h3>
        </div>
    );
};

export default page;