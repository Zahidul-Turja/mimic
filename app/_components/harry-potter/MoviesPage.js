"use client";

import { poppins, uncialAntiqua } from "@/app/_utils/fonts/fonts";
import { getHarryPotterMovies } from "@/app/_lib/harry-potter-services";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Spinner from "../Spinner";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getHarryPotterMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <div className="flex items-center justify-between">
        <h1
          className={`text-lg font-bold md:text-3xl lg:text-4xl ${uncialAntiqua.className}`}
        >
          Harry Potter Movies
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="my-8 grid w-full grid-cols-1 gap-6 md:grid-cols-4">
          {movies.map((movie) => (
            <ItemCard
              key={movie.id}
              to={`/harry-potter-world/movies`}
              item={movie}
              image={movie.attributes.poster}
              customStyles={"rounded-2xl"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MoviesPage;
