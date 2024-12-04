import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: "About",
    description: "About page",
    keywords: ["about", "about page"]
};

const page = () => {
    return (
        <div className={`${headland.className} min-h-screen px-12 py-24`}>
            <h6 className='text-3xl'>About Page</h6>
        </div>
    );
};

export default page;