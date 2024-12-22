"use client";

import { useState, useEffect } from "react";

import client from "../_lib/pexels-api";
import BoundingBox from "../_components/BoundingBox";
import Image from "next/image";

// export const metadata = {
//   title: "Harry Potter Characters",
// };

function Page() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.photos.search({
          query: "nature",
          per_page: 10,
        });
        setPhotos(response.photos);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <BoundingBox>
      <h1 className="mb-4 text-xl font-bold">Image Gallery</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden rounded-md">
              <Image
                src={photo.src.medium}
                alt={photo.alt || "Pexels Image"}
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
    </BoundingBox>
  );
}

export default Page;
