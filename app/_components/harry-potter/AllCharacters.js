"use client";

import { useState, useEffect } from "react";
import { getHarryPotterCharacters } from "@/app/_lib/harry-potter-services";
import { poppins } from "@/app/_utils/fonts/fonts";

import { LIST_ITEMS_PER_PAGE } from "@/app/_utils/constants";

import { characters as dummyCharacters } from "@/app/_lib/dummy-data";
import Row from "../Row";

function AllCharacters() {
  const [characters, setCharacters] = useState(dummyCharacters);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   async function fetchCharacters() {
  //     try {
  //       const data = await getHarryPotterCharacters();
  //       setCharacters(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching characters:", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchCharacters();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // Calculate the characters to display based on the current page
  const startIndex = (currentPage - 1) * LIST_ITEMS_PER_PAGE;
  const endIndex = startIndex + LIST_ITEMS_PER_PAGE;
  const displayedCharacters = characters.slice(startIndex, endIndex);

  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <h1 className={`text-3xl font-semibold`}>All Characters</h1>

      <ul className="my-6 rounded-lg border-[1.5px] border-gray-600">
        <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.3fr] border-b border-gray-600 px-4 py-4 font-semibold uppercase">
          <div>Avatar</div>
          <div>Name</div>
          <div>Actor</div>
          <div>House</div>
          <div>Ancestry</div>
          <div className="grid-cols-none"></div>
        </div>

        {displayedCharacters.map((character) => (
          <Row
            key={character.name}
            image={character.image}
            title={character.name}
            actor={character.actor}
            house={character.house}
            ancestry={character.ancestry}
          />
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
