"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BsCalendar2DateFill, BsGlobe } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

import Spinner from "@/app/_components/Spinner";
import { cormorantGaramond, imFellEnglish } from "@/app/_utils/fonts/fonts";
import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import { getBookBySlug } from "@/app/_lib/harry-potter-services";

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

            <div className="flex justify-between gap-8">
              <div className="w-[70%]">
                {/* <p>{book.release_date}</p> */}
                {/* <p>Pages: {book.pages}</p> */}
                <p className="my-4 text-justify font-semibold text-[#75CE99]">
                  {book.dedication}
                </p>
                <p
                  className={`my-4 text-base font-extralight leading-5 text-slate-300 ${cormorantGaramond.className}`}
                >
                  {book.summary}
                </p>

                <div className="flex">
                  <a
                    href={book.wiki}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-[#92B0ED] px-4 py-2 text-gray-900"
                  >
                    Read Wiki
                    <div className="text-xl">
                      <BsGlobe />
                    </div>
                  </a>
                </div>
              </div>

              <div className="my-4 w-[30%]">
                <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-blue-400">
                        Published on
                      </h3>
                      <p>{book.release_date}</p>
                    </div>

                    <div className="text-xl text-orange-300">
                      <BsCalendar2DateFill />
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-blue-400">Total Pages</h3>
                      <p>{book.pages}</p>
                    </div>
                    <div className="text-2xl text-orange-300">
                      <IoBookSharp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </HarryPotterLayout>
  );
}

export default Page;
