"use client";

import {
  poppins,
  cinzel,
  caesarDressing,
  uncialAntiqua,
} from "@/app/_utils/fonts/fonts";
import { useEffect, useState } from "react";

import ItemCard from "./ItemCard";
import { getHarryPotterBooks } from "@/app/_lib/harry-potter-services";
import Spinner from "../Spinner";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getHarryPotterBooks();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);
  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <div className="flex items-center justify-between">
        <h1
          className={`text-xl font-bold md:text-3xl lg:text-4xl ${uncialAntiqua.className}`}
        >
          Harry Potter Books
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid w-full grid-cols-1 gap-0 md:my-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {books.map((book) => (
            <ItemCard
              key={book.index}
              to={"/harry-potter-world/books"}
              item={book}
              image={book.attributes.cover}
              customStyles="my-6 rounded-lg border-gray-500 border shadow-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BooksPage;
