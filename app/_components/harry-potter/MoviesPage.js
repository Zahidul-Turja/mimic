"use client";

import { poppins } from "@/app/_utils/fonts/fonts";

import { getHarryPotterMovies } from "@/app/_lib/harry-potter-services";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

// import { movies } from "@/app/_lib/dummy-data";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getHarryPotterMovies();
        setMovies(data);
        console.log(data);
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
        <h1 className={`text-4xl font-semibold`}>Harry Potter Movies</h1>
      </div>

      <div className="my-8 grid w-full grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
