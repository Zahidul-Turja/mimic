import Image from "next/image";
import Link from "next/link";

function CategoryItem({ category }) {
  return (
    <div className="group relative h-96 w-full overflow-hidden rounded-lg">
      <Link href={category.href}>
        <div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-950 opacity-90" />
          <Image
            src={category["bg-image"]}
            alt={category.name}
            fill
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <h3 className="text-xl font-bold text-primary-100">
              {category.name}
            </h3>
            <p className="text-sm capitalize text-gray-400">
              {category.desctiption}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
