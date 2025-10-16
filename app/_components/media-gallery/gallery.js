"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";

import client from "@/app/_lib/pexels-api";

import Categories from "./categories";
import Spinner from "../Spinner";
import Photos from "./photos";
import Videos from "./videos";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [type, setType] = useState("photos");
  const [hasMore, setHasMore] = useState(true);

  const observerTarget = useRef(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        if (type === "photos") {
          const response = await client.photos.curated({
            page: 1,
            per_page: 20,
          });
          setPhotos(response.photos);
          setNextPage(2);
          setHasMore(response.photos.length > 0);
        }
        if (type === "videos") {
          const response = await client.videos.popular({
            page: 1,
            per_page: 20,
          });
          setVideos(response.videos);
          setNextPage(2);
          setHasMore(response.videos.length > 0);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
    setSearchText("");
  }, [type]);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      if (type === "photos") {
        if (!searchText) {
          const response = await client.photos.curated({
            page: nextPage,
            per_page: 20,
          });
          setPhotos((prev) => [...prev, ...response.photos]);
          setHasMore(response.photos.length > 0);
        } else {
          const response = await client.photos.search({
            query: searchText.trim(),
            page: nextPage,
            per_page: 20,
          });
          setPhotos((prev) => [...prev, ...response.photos]);
          setHasMore(response.photos.length > 0);
        }
      } else if (type === "videos") {
        if (!searchText) {
          const response = await client.videos.popular({
            page: nextPage,
            per_page: 20,
          });
          setVideos((prev) => [...prev, ...response.videos]);
          setHasMore(response.videos.length > 0);
        } else {
          const response = await client.videos.search({
            query: searchText.trim(),
            page: nextPage,
            per_page: 20,
          });
          setVideos((prev) => [...prev, ...response.videos]);
          setHasMore(response.videos.length > 0);
        }
      }
      setNextPage((prev) => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, type, searchText, nextPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMore, hasMore, loading]);

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!searchText.trim()) {
      return;
    }

    if (type === "photos") {
      setPhotos([]);
      const response = await client.photos.search({
        query: searchText.trim(),
        page: 1,
        per_page: 20,
      });
      setPhotos(response.photos);
      setNextPage(2);
      setHasMore(response.photos.length > 0);
    }

    if (type === "videos") {
      setVideos([]);
      const response = await client.videos.search({
        query: searchText.trim(),
        page: 1,
        per_page: 20,
      });
      setVideos(response.videos);
      setNextPage(2);
      setHasMore(response.videos.length > 0);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="mx-auto flex w-[100%] items-center justify-between">
        <select
          name="type"
          id="type"
          className="h-11 cursor-pointer rounded-lg border-2 border-primary-200 bg-primary-200 px-6 font-semibold text-primary-950 outline-none transition-all duration-500 focus:border-primary-100"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="photos">Photos</option>
          <option value="videos">Videos</option>
        </select>
        <div className="relative my-4 ml-6 mr-auto w-[70%] items-center transition-all duration-500 lg:w-[30%] lg:focus-within:w-[32%] lg:hover:w-[32%]">
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
      </div>
      <Categories
        setPhotos={setPhotos}
        setVideos={setVideos}
        searchText={searchText}
        setSearchText={setSearchText}
        setLoading={setLoading}
      />

      {searchText && (
        <p className="my-4 w-auto items-start border-b border-primary-100 py-8 text-left text-2xl font-extralight italic">
          Search results for <span className="font-bold">{searchText}</span>
        </p>
      )}

      {error && <p className="text-red-500">Error: {error}</p>}
      {type === "photos" && photos && photos.length > 0 && (
        <Photos photos={photos} />
      )}
      {type === "videos" && videos && videos.length > 0 && (
        <Videos videos={videos} />
      )}

      {/* Infinite scroll trigger */}
      <div ref={observerTarget} className="py-8">
        {loading && <Spinner />}
        {!loading && !hasMore && (
          <p className="text-center text-gray-400">No more items to load</p>
        )}
      </div>
    </>
  );
}

export default Gallery;
