import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals page",
};


const MealsPage = () => {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
            <p className={`${styles.font_tomato} ${styles.text_large}`}>Choose meals by searching...</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;