import { image_categories } from "@/app/_lib/categories";
import client from "@/app/_lib/pexels-api";

function Categories({ setPhotos, setVideos, setLoading }) {
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

    setLoading(false);
  };

  return (
    <ul className="flex flex-wrap justify-center gap-4 text-center font-semibold">
      {image_categories.map((category, key) => (
        <li
          key={key}
          className="cursor-pointer rounded-lg bg-primary-100 px-4 py-2 capitalize text-primary-900"
          onClick={() => handleSearchSubmit(category, "photos")}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
