"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);
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
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        }
    ]

    const handler = () => {
        router.push("/api/auth/signin");
    }
    // if (pathName.includes('dashboard')) {
    //     return (
    //         <div className='bg-green-400' >
    //             Dashboard layout
    //         </div >
    //     )
    // }

    return (
        <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
            <h3 className="text-3xl">Next <span className="text-cyan-300">Meal</span> </h3>
            <ul className="flex justify-between items-center space-x-4">
                {
                    links?.map((link) => <Link key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <Link href={'/api/auth/signup'}>
                <button className='mr-3 bg-white text-orange-600 font-semibold px-6 py-3'>
                    Sign Up
                </button>
            </Link>
            {session.status !== "authenticated" ? <button onClick={handler} className='text-sky-900 p-4'>
                Login
            </button> :
                <button onClick={() => signOut()} className='text-sky-900 p-4'>Logout</button>
            }
            <div>
                <Image height={50} width={50} alt={session?.data?.user?.image || "User Image"} src={session?.data?.user?.image} />
                {session?.data?.user?.name}
                <br />
                {session?.data?.user?.type}
            </div>
        </nav>
    );
};

export default Navbar;