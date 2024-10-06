import BoundingBox from "@/app/_components/BoundingBox";
import { categories } from "@/public/data";
import CategoryItem from "./_components/CategoryItem";

export default function Home() {
  return (
    <BoundingBox>
      <div className="mx-auto my-4 mb-12 w-full text-center md:w-[60%]">
        <h1 className="mb-4 text-3xl font-semibold md:text-5xl md:font-bold">
          Explore Different Categories
        </h1>
        <p className="text-justify text-base text-gray-400 md:text-center md:text-lg">
          These are some random categories I could find to have fun with. Please
          explore these categories, have fun and let me know what you think.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </section>
    </BoundingBox>
  );
}
