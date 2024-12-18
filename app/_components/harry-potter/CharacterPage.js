"use client";

import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { getHarryPotterCharacters } from "@/app/_lib/harry-potter-services";
import {
  poppins,
  uncialAntiqua,
  imFellEnglish,
} from "@/app/_utils/fonts/fonts";

import { LIST_ITEMS_PER_PAGE } from "@/app/_utils/constants";

import { characters as dummyCharacters } from "@/app/_lib/dummy-data";
import Row from "../Row";
import Filters from "./Filters";
import Spinner from "../Spinner";

function CharacterPage() {
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

  // Calculate the characters to display based on the current page
  const startIndex = (currentPage - 1) * LIST_ITEMS_PER_PAGE;
  const endIndex = startIndex + LIST_ITEMS_PER_PAGE;
  const displayedCharacters = characters.slice(startIndex, endIndex);

  return (
    <div className={`w-full text-left ${imFellEnglish.className}`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-4xl font-bold ${uncialAntiqua.className}`}>
          Characters
        </h1>
        <Filters />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <ul className="my-6 rounded-lg border-[1.5px] border-gray-600">
            <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_0.3fr] rounded-t-lg border-b border-gray-600 px-4 py-4 font-semibold uppercase">
              <div>Avatar</div>
              <div>Name</div>
              <div>Nickname</div>
              <div>Actor</div>
              <div>House</div>
              <div className="grid-cols-none"></div>
            </div>

            {displayedCharacters.map((character) => (
              <Row
                key={character.fullName}
                image={character.image}
                title={character.fullName}
                actor={character.interpretedBy}
                house={character.hogwartsHouse}
                nickname={character.nickname}
              />
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="mx-auto mt-16 w-fit">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`mx-2 rounded border border-primary-100 bg-primary-100 p-2 font-semibold text-primary-950 ${currentPage > 1 ? "" : "cursor-not-allowed opacity-70"}`}
              disabled={currentPage === 1}
            >
              <GrPrevious className="-mr-2 inline-block text-sm" />
              <GrPrevious className="mr-1 inline-block text-sm" />
              Prev
            </button>

            {Array.from(
              { length: Math.ceil(characters.length / LIST_ITEMS_PER_PAGE) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-2 rounded border-2 border-primary-100 px-3 py-2 font-semibold text-primary-50 ${
                    currentPage === i + 1 ? "cursor-not-allowed opacity-30" : ""
                  }`}
                  disabled={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              ),
            )}

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`mx-2 rounded border border-primary-100 bg-primary-100 px-3 py-2 font-semibold text-primary-950 ${currentPage < Math.ceil(characters.length / LIST_ITEMS_PER_PAGE) ? "" : "cursor-not-allowed opacity-70"}`}
              disabled={
                currentPage ===
                Math.ceil(characters.length / LIST_ITEMS_PER_PAGE)
              }
            >
              Next
              <GrNext className="ml-1 inline-block text-sm" />
              <GrNext className="-ml-2 inline-block text-sm" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CharacterPage;
