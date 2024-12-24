import BoundingBox from "../_components/BoundingBox";
import MealCategoryPage from "../_components/meal/MealCategoryPage";

function Page() {
  return (
    <BoundingBox>
      <h1 className="text-3xl font-bold tracking-wide">Meal Categories</h1>
      <p className="mx-auto my-4 w-[50%] text-lg">
        Get to learn different recipes from different cuisines. Choose your
        category.
      </p>

      <MealCategoryPage />
    </BoundingBox>
  );
}

export default Page;
