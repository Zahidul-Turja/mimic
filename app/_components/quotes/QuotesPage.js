"use client";

import { useEffect, useState } from "react";

import { IoHeartSharp } from "react-icons/io5";

import Spinner from "../Spinner";
import { getQuotesList } from "@/app/_lib/quotes-services";

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const data = await getQuotesList();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div className="mx-auto my-8 w-full md:w-[70%] lg:w-[50%]">
      {loading ? (
        <Spinner />
      ) : (
        <div className="text-left">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="my-8 rounded-lg border-2 border-primary-200 px-7 py-6 shadow-md shadow-[#D2E3C8]/30"
            >
              <div className="flex gap-2">
                {quote.tags.map((tag, key) => (
                  <span
                    key={key}
                    className="rounded-full border border-primary-200 px-4 py-1 text-sm font-light capitalize text-primary-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-2 mt-4 text-justify text-lg leading-6 tracking-wide">
                {quote.body}
              </p>
              <h3 className="text-right italic">
                <span className="font-extralight">by,</span>{" "}
                <span className="text-[#D2E3C8]">{quote.author}</span>
              </h3>

              <div className="flex items-center gap-2">
                <IoHeartSharp className="text-xl text-[#E16A54]" />
                <span className="text-lg">{quote.favorites_count}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuotesPage;
