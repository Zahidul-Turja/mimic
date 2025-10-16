import { IoMdClose, IoMdDownload } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

function PhotoModal({ photo, onClose }) {
  const [showResolutions, setShowResolutions] = useState(false);

  const handleDownload = async (imageUrl, resolution) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `pexels-${photo.id}-${resolution}.jpeg`;
      link.click();

      window.URL.revokeObjectURL(url);
      setShowResolutions(false);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const resolutions = [
    { label: "Original", url: photo.src.original, size: "Full Size" },
    { label: "Large (2x)", url: photo.src.large2x, size: "1920px" },
    { label: "Large", url: photo.src.large, size: "1280px" },
    { label: "Medium", url: photo.src.medium, size: "640px" },
    { label: "Small", url: photo.src.small, size: "320px" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-7xl overflow-hidden rounded-lg bg-primary-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-primary-700 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700">
              <span className="text-lg font-bold">
                {photo.photographer.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{photo.photographer}</h3>
              <a
                href={photo.photographer_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-300 hover:text-primary-100"
              >
                View Profile <FiExternalLink size={12} />
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-primary-700"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex max-h-[70vh] items-center justify-center overflow-auto bg-primary-950 p-8">
          <Image
            src={photo.src.large2x}
            alt={photo.alt || "Pexels Image"}
            width={1920}
            height={1080}
            className="max-h-full w-auto rounded-lg object-contain"
            priority
          />
        </div>

        {/* Footer */}
        <div className="border-t border-primary-700 p-4">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <p className="mb-2 text-sm text-primary-300">
                {photo.alt || "No description available"}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-primary-400">
                <span>Photo ID: {photo.id}</span>
                <span>
                  {photo.width} × {photo.height}
                </span>
                {photo.avg_color && (
                  <span className="flex items-center gap-1">
                    Color:
                    <span
                      className="inline-block h-4 w-4 rounded border border-primary-600"
                      style={{ backgroundColor: photo.avg_color }}
                    ></span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-primary-600 px-4 py-2 text-sm transition-colors hover:border-primary-500 hover:bg-primary-800"
            >
              View on Pexels <FiExternalLink size={14} />
            </a>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-primary-600 p-2 transition-colors hover:border-red-500 hover:bg-red-500/10 hover:text-red-500">
                <FaHeart size={18} />
              </button>

              {/* Download Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowResolutions(!showResolutions)}
                  className="flex items-center gap-2 rounded-lg bg-primary-100 px-6 py-2 font-semibold text-primary-950 transition-colors hover:bg-primary-200"
                >
                  <IoMdDownload size={18} />
                  Download
                </button>

                {showResolutions && (
                  <div className="absolute bottom-full right-0 mb-2 w-64 overflow-hidden rounded-lg border border-primary-600 bg-primary-800 shadow-xl">
                    <div className="border-b border-primary-600 p-3">
                      <p className="text-xs font-semibold text-primary-300">
                        Choose Resolution
                      </p>
                    </div>
                    {resolutions.map((res, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(res.url, res.label)}
                        className="flex w-full items-center justify-between border-b border-primary-700 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-primary-700"
                      >
                        <div>
                          <p className="text-sm font-medium">{res.label}</p>
                          <p className="text-xs text-primary-400">{res.size}</p>
                        </div>
                        <IoMdDownload className="text-primary-300" size={16} />
                      </button>
                    ))}
                    <div className="border-t border-primary-600 bg-primary-900 p-3">
                      <p className="text-xs text-primary-400">
                        Free to use. No attribution required.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
