import Image from "next/image";
import Masonry from "react-masonry-css";
import Spinner from "../Spinner";
import { IoMdDownload } from "react-icons/io";
import { useState } from "react";
import PhotoModal from "./PhotoModal";

function Photos({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };
  const handleDownload = async (imageUrl, photoId) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `pexels-photo-${photoId}.jpeg`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
      {photos && photos.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-8 flex w-auto gap-4"
          columnClassName="bg-clip-padding"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative mb-4 cursor-pointer overflow-hidden rounded-md"
              onClick={() => setSelectedPhoto(photo)}
            >
              <GalleryImage photo={photo} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute bottom-[-50px] left-3 text-left opacity-0 transition-all duration-500 group-hover:bottom-3 group-hover:opacity-100">
                <h3 className="my-1 text-base font-bold text-gray-100">
                  {photo.photographer}
                </h3>
                <p className="text-xs font-light leading-3 text-primary-50 opacity-95">
                  {photo.alt}
                </p>
              </div>
              <button
                className="absolute right-5 top-[-50px] cursor-pointer rounded-md bg-primary-100 px-2 py-1 text-right text-base font-bold text-gray-900 transition-all duration-500 group-hover:top-5"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(photo.src.original, photo.id);
                }}
              >
                <IoMdDownload />
              </button>
            </div>
          ))}
        </Masonry>
      ) : (
        <Spinner />
      )}

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

function GalleryImage({ photo }) {
  return (
    <Image
      src={photo.src.large2x}
      alt={photo.alt || "Pexels Image"}
      placeholder="blur"
      blurDataURL={photo.src.large}
      quality={70}
      width={300}
      height={300}
      className="h-auto w-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

export default Photos;
