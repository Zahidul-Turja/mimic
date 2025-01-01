"use client";

import Image from "next/image";
import { useState } from "react";

function ProductImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-[50%]">
      <div className="relative max-h-[350px] w-full cursor-zoom-in overflow-hidden rounded-lg border-2 border-gray-400 bg-gray-400">
        <Image
          key={selectedImage}
          src={images[selectedImage]}
          alt={images[selectedImage]}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative h-16 w-16 cursor-pointer overflow-hidden rounded-lg border-2 border-gray-300 ${
              index !== selectedImage && "border-opacity-50 opacity-50"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={img}
              alt={img}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
