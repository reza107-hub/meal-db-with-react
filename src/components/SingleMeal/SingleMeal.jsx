import React, { useState } from "react";

const SingleMeal = ({meal,addToSummary}) => {
    // console.log(meal);
  return (
    <div className="card w-11/12 card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-11/12"
          src={meal.strMealThumb}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p className="truncate hover:text-clip">{meal.strInstructions}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>addToSummary(meal.strMeal)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
