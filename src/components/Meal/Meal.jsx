import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meal = ({addToSummary}) => {
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl'>
            {
                meals.map(meal=> <SingleMeal addToSummary={addToSummary} meal={meal} key={meal.idMeal}></SingleMeal>)
            }
        </div>
    );
};

export default Meal;