import Image from "next/image";

import Spinner from "../Spinner";
import { IoMdDownload } from "react-icons/io";

function Photos({ photos }) {
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
    <div className="my-8 columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-md"
          >
            <GalleryImage photo={photo} />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-[-50px] left-3 text-left transition-all duration-500 group-hover:bottom-6">
              <h3 className="my-1 text-base font-bold text-gray-100">
                {photo.photographer}
              </h3>
              <p className="text-xs font-light leading-3 text-primary-50 opacity-95">
                {photo.alt}
              </p>
            </div>
            <button
              className="absolute right-5 top-[-50px] cursor-pointer rounded-md bg-primary-100 px-2 py-1 text-right text-base font-bold text-gray-900 transition-all duration-500 group-hover:top-5"
              onClick={() => handleDownload(photo.src.original, photo.id)}
            >
              <a
                href={photo.src.original}
                download={true}
                className="hidden"
              ></a>
              <IoMdDownload />
            </button>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
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
