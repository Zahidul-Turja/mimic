import { image_categories } from "@/app/_lib/categories";
import client from "@/app/_lib/pexels-api";

function Categories({
  setPhotos,
  setVideos,
  searchText,
  setSearchText,
  setLoading,
}) {
  const handleSearchSubmit = async (searchText, type = "photos") => {
    setLoading(true);

    if (type === "photos") {
      setPhotos([]);
      const response = await client.photos.search({
        query: searchText.trim(),
        page: 1,
        per_page: 20,
      });
      setPhotos(response.photos);
      console.log(response.photos);
    }

    if (type === "videos") {
      setVideos([]);
      const response = await client.videos.search({
        query: searchText.trim(),
        page: 1,
        per_page: 20,
      });
      setVideos(response.videos);
      console.log(response.videos);
    }

    setSearchText(searchText);
    setLoading(false);
  };

  return (
    <ul className="hidden flex-wrap justify-center gap-4 text-center font-semibold md:w-full lg:flex">
      {image_categories.map((category, key) => (
        <li
          key={key}
          className={`cursor-pointer rounded-lg border border-primary-100 bg-primary-100 px-4 py-2 capitalize transition-all duration-300 ease-in-out hover:bg-primary-950 hover:text-primary-100 ${searchText === category ? "cursor-not-allowed bg-primary-950 text-primary-100" : "text-primary-900"}`}
          onClick={() => handleSearchSubmit(category, "photos")}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
