"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { getMealCategories } from "@/app/_lib/meal-services";
import Link from "next/link";
import Spinner from "../Spinner";

function MealCategoryPage() {
  const [mealCategories, setMealCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);
        const mealCategories = await getMealCategories();

        setMealCategories(mealCategories);
      } catch (error) {
        console.error("Error fetching meal categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="group my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {mealCategories.length > 0 &&
        mealCategories.map((category) => (
          <Link
            key={category.idCategory}
            href={`/food/${category.strCategory}`}
            className="relative h-96 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-950 shadow-md transition-all duration-300 group-hover:opacity-50 hover:scale-105 hover:!opacity-100 hover:shadow-lg"
          >
            <div className="relative mx-auto my-4 h-[55%] w-[90%]">
              <Image
                src={category.strCategoryThumb}
                alt={category.strCategory}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 p-4">
              <h2 className="text-lg font-bold text-white">
                {category.strCategory}
              </h2>
              <p className="line-clamp-4 px-2 text-justify text-sm text-gray-200">
                {category.strCategoryDescription}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default MealCategoryPage;
