import Image from "next/image";
import Link from "next/link";

function ItemCard({ item, to, image, customStyles }) {
  const attributes = item.attributes;

  return (
    <Link
      href={`${to}/${attributes.slug}`}
      className={`group relative h-96 w-64 overflow-hidden ${customStyles}`}
    >
      <div className="relative h-full w-auto">
        <Image
          src={image}
          alt={attributes.title}
          fill
          className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-50`}
        />
      </div>
    </Link>
  );
}

export default ItemCard;
