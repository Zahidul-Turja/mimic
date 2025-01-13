import Image from "next/image";
import { BsPersonBoundingBox } from "react-icons/bs";

export default function Row({
  title,
  image,
  actor,
  gender,
  nickname,
  house,
  fn,
}) {
  return (
    <li className="grid grid-cols-[1.2fr_2fr_2fr] border-b border-gray-600 bg-primary-900 px-4 py-2 capitalize md:grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr]">
      <div
        className={`relative flex h-20 w-16 items-center rounded border ${image ? "" : "rounded-sm border-2"}`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            size={100}
            className="rounded object-cover"
          />
        ) : (
          <BsPersonBoundingBox className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
      <div
        className={`flex items-center ${!title ? "font-extralight italic" : ""}`}
      >
        {title ? title : "Unknown"}
      </div>
      <div
        className={`hidden items-center md:flex ${!nickname ? "font-extralight italic" : ""}`}
      >
        {nickname ? nickname : "Unknown"}
      </div>
      <div
        className={`flex items-center ${!actor ? "font-extralight italic" : ""}`}
      >
        {actor ? actor : "Unknown"}
      </div>
      <div
        className={`hidden items-center md:flex ${!house ? "font-extralight italic" : ""}`}
      >
        {house ? house : "Unknown"}
      </div>
      <div className="hidden cursor-not-allowed items-center font-extralight">
        Details
      </div>
    </li>
  );
}
