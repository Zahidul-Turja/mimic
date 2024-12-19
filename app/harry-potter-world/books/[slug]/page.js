"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  poppins,
  caesarDressing,
  cinzel,
  imFellEnglish,
} from "@/app/_utils/fonts/fonts";
import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import { getBookBySlug } from "@/app/_lib/harry-potter-services";
import Spinner from "@/app/_components/Spinner";
import Image from "next/image";

function Page() {
  const slug = useParams().slug;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBookBySlug(slug);
      setBook(book.attributes);
      setLoading(false);
    };
    fetchBook();
  }, [slug]);

  return (
    <HarryPotterLayout>
      {loading ? (
        <Spinner />
      ) : (
        <div className={`flex h-[75vh] gap-8 ${imFellEnglish.className}`}>
          <div className="relative h-[95%] w-80 rounded-lg">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="h-[80%] w-[80%] py-5 text-left">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <h2 className="italic text-gray-400">{book.author}</h2>
            <p>{book.release_date}</p>
            <p>Pages: {book.pages}</p>
            <p className="text-[#75CE99]">{book.dedication}</p>
            <p className="my-5">{book.summary}</p>

            <a href={book.wiki}>Wiki</a>
          </div>
        </div>
      )}
    </HarryPotterLayout>
  );
}

export default Page;
