"use client"
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState('');

    const loadData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        const data = await res.json();

        setMeals(data);
    }

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        loadData();
    }, [search]);

    return (
        <div className='mt-12'>
            <input onChange={handler} className='p-4 outline-none border-transparent text-slate-900 bg-lime-100' type="text" placeholder='search meals...' />
            <button className='bg-red-400 p-4'>Search</button>
        </div>
    );
};

export default Meals;