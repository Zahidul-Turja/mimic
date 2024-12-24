"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaYoutube } from "react-icons/fa";

import {
  greatVibes,
  dancingScript,
  pacifico,
  raleway,
} from "@/app/_utils/fonts/fonts";
import { getMealById } from "@/app/_lib/meal-services";
import BoundingBox from "@/app/_components/BoundingBox";
import Image from "next/image";

function Page() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await getMealById(recipeId);
      setRecipe(response);
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <BoundingBox>
      <h1
        className={`mb-8 text-4xl font-bold tracking-widest ${dancingScript.className}`}
      >
        <span className={`text-primary-300 ${greatVibes.className}`}>
          Recipe for{" "}
        </span>
        {recipe.strMeal}
        <span
          className={`mx-auto my-2 block h-[1px] w-[50%] bg-primary-300`}
        ></span>
      </h1>

      <div className="flex justify-between gap-12">
        <div className="w-[30%]">
          <div className="relative h-[26rem] w-full rounded-lg border-2 border-primary-200 bg-slate-950 p-8">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              width={600}
              height={600}
              className="rounded-lg object-cover shadow-sm shadow-white/50"
            />
          </div>
          <div>
            <h2 className="mt-4 text-xl">
              {recipe.strMeal} belongs to{" "}
              <span className={`font-bold italic`}>
                {recipe.strArea} cuisine
              </span>{" "}
              and is a{" "}
              <span className={`font-bold italic`}>{recipe.strCategory}</span>{" "}
              based recipe.
            </h2>
          </div>
        </div>
        <div className={`w-[70%] ${raleway.className}`}>
          <h2 className="text-left text-xl font-semibold">
            To Make {recipe.strMeal},
          </h2>
          <p className="my-2 w-[90%] text-left text-sm leading-6 tracking-wide">
            {recipe.strInstructions}
          </p>

          <h3 className="my-2 flex text-left font-semibold">
            Watch step by step guide on{" "}
            <a
              href={recipe.strYoutube}
              className="ml-2 flex items-center gap-1 border-b-2 border-transparent transition-all duration-200 hover:border-[#FF0000]"
            >
              <FaYoutube className="text-lg text-[#FF0000]" /> Youtube
            </a>
          </h3>

          <h3 className="mb-4 mt-8 text-left text-xl font-semibold">
            Table of Measurements
          </h3>
          <ul className="w-[90%] rounded-lg border border-primary-200 text-left text-sm leading-6 tracking-wide">
            <li
              className={`flex items-center justify-between gap-2 border-b border-primary-200 text-lg font-bold`}
            >
              <div className="flex items-center gap-4 px-4 py-3">
                Ingredient
              </div>
              <div className="flex items-center gap-4 px-4 py-3">Measure</div>
            </li>
            {recipe.strIngredient &&
              recipe.strIngredient.map((ingredient, index) => (
                <li
                  key={index}
                  className={`my-2 flex items-center justify-between gap-2 ${index === recipe.strIngredient.length - 1 ? "" : "border-b border-primary-200"}`}
                >
                  <div className="flex items-center gap-4 px-4 py-3">
                    <div className="relative flex h-10 w-10 items-center justify-center">
                      <Image
                        src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                        alt={ingredient}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <span className="px-4 font-semibold">{ingredient}</span>
                  </div>
                  {recipe[`strMeasure${index + 1}`] && (
                    <span className="px-8 text-center font-semibold">
                      {recipe[`strMeasure${index + 1}`]}
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </BoundingBox>
  );
}

export default Page;
