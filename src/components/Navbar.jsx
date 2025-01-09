"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    // const router = useRouter();
    const session = useSession();
    // console.log(session);
    const links = [
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Gallery",
            path: "/gallery"
        }
    ]
    if (pathName.includes('dashboard')) {
        return (
            <div className='bg-green-400' >
                Dashboard layout
            </div >
        )
    }

    return (
        <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
            <h3 className="text-3xl">Next <span className="text-cyan-300">Meal</span> </h3>
            <ul className="flex justify-between items-center space-x-4">
                {
                    links?.map((link) => <Link key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            {session.status === "authenticated" ? <button className='text-sky-900 p-4'>
                Login
            </button> :
                <button className='text-sky-900 p-4'>Logout</button>
            }

        </nav>
    );
};

export default Navbar;