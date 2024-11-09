"use client"
import React, { useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    return (
        <div className='mt-12'>
            <input className='p-4 outline-none border-transparent text-slate-900 bg-lime-100' type="text" placeholder='search meals...' />
            <button className='bg-red-400 p-4'>Search</button>
        </div>
    );
};

export default Meals;