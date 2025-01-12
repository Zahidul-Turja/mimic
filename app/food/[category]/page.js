"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  greatVibes,
  dancingScript,
  pacifico,
  raleway,
} from "@/app/_utils/fonts/fonts";
import BoundingBox from "@/app/_components/BoundingBox";
import { getMealsByCategory } from "@/app/_lib/meal-services";
import Spinner from "@/app/_components/Spinner";

function Page() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const meals = await getMealsByCategory(category);
      setRecipes(meals);
      setLoading(false);
    };

    fetchMeals();
  }, [category]);

  return (
    <BoundingBox>
      <h1
        className={`text-2xl font-bold tracking-wide md:text-4xl ${dancingScript.className}`}
      >
        Recipes for{" "}
        <span className={`${dancingScript.className}`}>{category}</span>
      </h1>
      <p
        className={`mx-auto my-4 text-base font-light md:w-[50%] md:text-lg ${raleway.className}`}
      >
        All available recipes for {category}. Please find a recipe you like and
        let me know what you think.
      </p>
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {recipes &&
            recipes.map((recipe) => (
              <Link
                key={recipe.idMeal}
                href={`/food/${category}/${recipe.idMeal}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative">
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </div>
                {/* Title */}
                <h2 className="absolute inset-0 flex scale-75 items-center justify-center text-center text-3xl font-bold text-primary-100 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <span
                    className={`${raleway.className} max-w-[90%] rounded-lg bg-primary-950/85 px-4 py-6`}
                  >
                    {recipe.strMeal}
                  </span>
                </h2>
              </Link>
            ))}
        </div>
      )}
    </BoundingBox>
  );
}

export default Page;
