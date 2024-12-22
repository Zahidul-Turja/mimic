"use client";

import { useEffect, useState } from "react";

import client from "@/app/_lib/pexels-api";
import Image from "next/image";
import Categories from "./categories";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.photos.curated({
          page: 1,
          per_page: 20,
        });
        setPhotos(response.photos);
        console.log(response.photos);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPhotos();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="p-y2 my-8 h-12 w-[60%] rounded-full border-2 border-primary-200 bg-primary-950 px-6"
      />
      <Categories />
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="my-8 columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden rounded-md">
              <Image
                src={photo.src.large2x}
                alt={photo.alt || "Pexels Image"}
                placeholder="blur"
                blurDataURL={photo.src.large2x}
                quality={90}
                width={300}
                height={300}
                className="h-auto w-full rounded-md object-cover"
              />
            </div>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
      <button className="my-4 w-full rounded-md border-2 border-primary-300 py-4 text-xl tracking-widest text-primary-300">
        Load More
      </button>
    </>
  );
}

export default Gallery;
