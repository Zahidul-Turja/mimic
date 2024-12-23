"use client";

import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import client from "@/app/_lib/pexels-api";

import Categories from "./categories";
import Spinner from "../Spinner";
import Photos from "./photos";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [type, setType] = useState("photos");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        if (type === "photos") {
          const response = await client.photos.curated({
            page: 1,
            per_page: 20,
          });
          setPhotos(response.photos);
          console.log(response.photos);
        }
        if (type === "videos") {
          const response = await client.videos.popular({
            page: 1,
            per_page: 20,
          });
          setVideos(response.videos);
          console.log(response.videos);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [type]);

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
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
    <>
      <div className="mx-auto flex w-[100%] items-center justify-between">
        <select
          name="type"
          id="type"
          className="h-12 rounded-lg border-2 border-primary-200 bg-primary-200 px-6 font-semibold text-primary-950 outline-none transition-all duration-500 focus:border-primary-100"
        >
          <option value="photos">Photos</option>
          <option value="videos">Videos</option>
        </select>
        <div className="relative my-4 ml-6 mr-auto w-[30%] items-center transition-all duration-500 focus-within:w-[32%]">
          <form action="submit" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchInput}
              className="h-12 w-full rounded-full border-2 border-primary-300 bg-primary-950 px-6 outline-none focus:border-primary-100"
            />
            <button className="absolute right-6 top-3 text-2xl">
              <IoIosSearch />
            </button>
          </form>
        </div>
        <Categories
          setPhotos={setPhotos}
          setVideos={setVideos}
          setSearchText={setSearchText}
          setLoading={setLoading}
        />
      </div>

      {searchText && (
        <p className="my-4 w-auto items-start border-b border-primary-100 py-8 text-left text-2xl font-extralight italic">
          Search results for <span className="font-bold">{searchText}</span>
        </p>
      )}

      {loading && <Spinner />}
      {error && <p className="text-red-500">Error: {error}</p>}
      {type === "photos" && photos && photos.length > 0 && (
        <Photos photos={photos} />
      )}

      {!loading && (
        <button className="my-4 w-full rounded-md border-2 border-primary-300 py-4 text-xl tracking-widest text-primary-300">
          Load More
        </button>
      )}
    </>
  );
}

export default Gallery;
