"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    const data = await response.json();
    return data.meals || [];
}
export default function MealIdeas( {ingredient}) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        if (!ingredient) return;
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Meal Ideas for{" "}
        <span className="text-orange-500 capitalize">{ingredient}</span>
      </h2>
 
      {meals.length === 0 ? (
        <p className="text-gray-400 italic">No meal ideas found for this ingredient.</p>
      ) : (
        <ul className="grid gap-4 list-none p-0">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-36 object-cover block"
              />
              <p className="m-2 text-sm font-semibold text-gray-700 text-center">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
 
