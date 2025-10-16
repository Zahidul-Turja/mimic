import { IoMdClose, IoMdDownload } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function VideoModal({ video, onClose }) {
  const [showResolutions, setShowResolutions] = useState(false);

  const handleDownload = async (videoUrl, quality) => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `pexels-${video.id}-${quality}.mp4`;
      link.click();

      window.URL.revokeObjectURL(url);
      setShowResolutions(false);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Sort video files by quality (highest first)
  const sortedVideos = [...video.video_files].sort((a, b) => {
    const qualityOrder = { uhd: 4, hd: 3, sd: 2 };
    return (qualityOrder[b.quality] || 0) - (qualityOrder[a.quality] || 0);
  });

  // Remove duplicates based on quality and width
  const uniqueVideos = sortedVideos.reduce((acc, curr) => {
    const key = `${curr.quality}-${curr.width}`;
    if (!acc.some((v) => `${v.quality}-${v.width}` === key)) {
      acc.push(curr);
    }
    return acc;
  }, []);

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
                {video.user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{video.user.name}</h3>
              <a
                href={video.user.url}
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

        {/* Video Container */}
        <div className="flex max-h-[70vh] items-center justify-center bg-primary-950 p-8">
          <video
            src={video.video_files[0].link}
            controls
            autoPlay
            loop
            className="max-h-full w-auto rounded-lg"
          />
        </div>

        {/* Footer */}
        <div className="border-t border-primary-700 p-4">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap gap-4 text-xs text-primary-400">
                <span>Video ID: {video.id}</span>
                <span>Duration: {video.duration}s</span>
                <span>
                  {video.width} × {video.height}
                </span>
              </div>
              {video.tags && video.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {video.tags.slice(0, 5).map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary-800 px-3 py-1 text-xs text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={video.url}
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
                  <div className="absolute bottom-full right-0 mb-2 max-h-96 w-72 overflow-auto rounded-lg border border-primary-600 bg-primary-800 shadow-xl">
                    <div className="sticky top-0 border-b border-primary-600 bg-primary-800 p-3">
                      <p className="text-xs font-semibold text-primary-300">
                        Choose Quality & Resolution
                      </p>
                    </div>
                    {uniqueVideos.map((file, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleDownload(
                            file.link,
                            `${file.quality}-${file.width}x${file.height}`,
                          )
                        }
                        className="flex w-full items-center justify-between border-b border-primary-700 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-primary-700"
                      >
                        <div>
                          <p className="text-sm font-medium uppercase">
                            {file.quality}
                          </p>
                          <p className="text-xs text-primary-400">
                            {file.width} × {file.height}
                          </p>
                          {file.file_type && (
                            <p className="text-xs text-primary-500">
                              {file.file_type}
                            </p>
                          )}
                        </div>
                        <IoMdDownload className="text-primary-300" size={16} />
                      </button>
                    ))}
                    <div className="sticky bottom-0 border-t border-primary-600 bg-primary-900 p-3">
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

export default VideoModal;
