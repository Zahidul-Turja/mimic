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

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getHarryPotterBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);
  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-4xl font-bold ${uncialAntiqua.className}`}>
          Harry Potter Books
        </h1>
      </div>

      <div className="my-8 grid w-full grid-cols-4 gap-6">
        {books.map((book) => (
          <ItemCard
            key={book.index}
            item={book}
            image={book.attributes.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
