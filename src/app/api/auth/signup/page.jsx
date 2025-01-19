"use client";
import React from 'react';

const page = () => {

    const handleRegister = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }

        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(resp);
    }

    return (
        <div className='flex items-center justify-center mt-24'>
            <div>
                <h6 className='text-lg font-semibold'>Sign up with email and password </h6>
                <div>
                    <form onSubmit={handleRegister} action="">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name='name' placeholder='your full name'
                            className='outline-none border-2 p-3 text-slate-700' /> <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" name='email' placeholder='your email'
                            className='outline-none border-2 p-3 text-slate-700' /> <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name='password' placeholder='your password'
                            className='outline-none border-2 p-3 text-slate-700' /> <br /> <br />
                        <button className='bg-orange-500 p-3'>Register</button>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default page;