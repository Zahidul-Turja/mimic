import Image from "next/image";

export default function Row({
  title,
  image,
  actor,
  gender,
  ancestry,
  house,
  fn,
}) {
  return (
    <li className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.3fr] border-b border-gray-600 bg-gray-800 px-4 py-2 capitalize">
      <div
        className={`relative flex h-20 w-16 items-center ${image ? "" : "rounded-sm border"}`}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-sm object-cover"
          />
        )}
      </div>
      <div className="flex items-center">{title}</div>
      <div className="flex items-center">{actor}</div>
      <div className="flex items-center">{house}</div>
      <div className="flex items-center">{ancestry}</div>
      <div className="flex items-center">Detail</div>
    </li>
  );
}
