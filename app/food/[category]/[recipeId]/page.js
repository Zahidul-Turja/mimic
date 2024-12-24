"use client";

import { useEffect, useState } from "react";

import { getMealById } from "@/app/_lib/meal-services";
import { useParams } from "next/navigation";
import BoundingBox from "@/app/_components/BoundingBox";

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
      <h1>{recipe.strMeal}</h1>
    </BoundingBox>
  );
}

export default Page;
