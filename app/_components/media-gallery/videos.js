import { IoMdDownload } from "react-icons/io";
import Spinner from "../Spinner";

function Videos({ videos }) {
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
    <div className="my-8 columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-md"
          >
            <GalleryVideo video={video} />

            <button
              className="absolute right-5 top-5 cursor-pointer rounded-md bg-primary-100 px-2 py-1 text-base font-bold text-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              onClick={() =>
                handleDownload(video.video_files[0].link, video.id)
              }
            >
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
    videoElement.currentTime = 0; // Reset the video to the start
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
