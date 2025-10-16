import { IoMdDownload } from "react-icons/io";
import Masonry from "react-masonry-css";
import Spinner from "../Spinner";
import { useState } from "react";
import VideoModal from "./VideoModal";

function Videos({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };
  const handleDownload = async (videoUrl, videoId) => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `pexels-video-${videoId}.mp4`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
      {videos && videos.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-8 flex w-auto gap-4"
          columnClassName="bg-clip-padding"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative mb-4 cursor-pointer overflow-hidden rounded-md"
              onClick={() => setSelectedVideo(video)}
            >
              <GalleryVideo video={video} />

              <button
                className="absolute right-5 top-5 cursor-pointer rounded-md bg-primary-100 px-2 py-1 text-base font-bold text-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(video.video_files[0].link, video.id);
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

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}

function GalleryVideo({ video }) {
  const handleMouseEnter = (e) => {
    const videoElement = e.currentTarget;
    videoElement.controls = true;
    videoElement.play();
  };

  const handleMouseLeave = (e) => {
    const videoElement = e.currentTarget;
    videoElement.pause();
    videoElement.controls = false;
    videoElement.currentTime = 0;
  };

  return (
    <video
      src={video.video_files[0].link}
      muted
      loop
      className="h-auto w-full rounded-md object-cover transition-transform duration-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default Videos;
