"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(false);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            console.log(data);
            if (data.meals) {
                setMeals(data.meals);
                setError(false);
            } else {
                setMeals([]); // Set meals to an empty array if no data is found
                setError(true); // Set error to true to show "No meals found"
            }
        }
        catch (error) {
            console.error("Error fetching data:", error);
            setMeals([]); // Clear meals in case of error
            setError(true); // Set error to true to show "No meals found"
        }
    }

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (search) { // Only load data if there is a search term
            loadData();
        } else {
            setMeals([]); // Clear meals if search is empty
            setError(false);
        }
    }, [search]);

    return (
        <div className='mt-12'>
            <input onChange={handler} className='p-4 outline-none border-transparent text-slate-900 bg-lime-100' type="text" placeholder='search meals...' />
            <button onClick={() => loadData()} className='bg-red-400 p-4'>Search</button>
            <div className='mt-12 grid grid-cols-3 gap-12'>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <div key={meal.idMeal} className='border-2 p-4'>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} width={400} height={400} />
                            <h6>{meal.strMeal}</h6>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                ) : (
                    error && <h6>No meals found</h6>
                )}
            </div>
        </div>
    );
};

export default Meals;