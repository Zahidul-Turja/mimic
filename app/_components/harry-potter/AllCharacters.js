"use client";

import { useState, useEffect } from "react";
import { getHarryPotterCharacters } from "@/app/_lib/harry-potter-services";
import { poppins } from "@/app/_utils/fonts/fonts";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getHarryPotterCharacters();
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Calculate the characters to display based on the current page
  const startIndex = (currentPage - 1) * 20;
  const endIndex = startIndex + 20;
  const displayedCharacters = characters.slice(startIndex, endIndex);

  return (
    <div className="w-full text-left">
      <h1 className={`text-3xl font-semibold ${poppins.className}`}>
        All Characters
      </h1>

      <ul>
        {displayedCharacters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="mr-2 bg-blue-500 p-2 text-white"
          >
            Previous
          </button>
        )}
        {endIndex < characters.length && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-blue-500 p-2 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default AllCharacters;
