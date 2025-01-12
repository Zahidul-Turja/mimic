import BoundingBox from "../_components/BoundingBox";
import MealCategoryPage from "../_components/meal/MealCategoryPage";

function Page() {
  return (
    <BoundingBox>
      <h1 className="text-2xl font-bold tracking-wide md:text-3xl">
        Meal Categories
      </h1>
      <p className="mx-auto my-4 text-lg md:w-[50%]">
        Get to learn different recipes from different cuisines. Choose your
        category.
      </p>

      <MealCategoryPage />
    </BoundingBox>
  );
}

export default Page;
