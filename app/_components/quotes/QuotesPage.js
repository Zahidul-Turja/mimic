"use client";

import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

import Spinner from "../Spinner";
import { getQuotesList } from "@/app/_lib/quotes-services";

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setLoading(true);
        const data = await getQuotesList(page);
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuotes();
  }, [page]);

  return (
    <div className="mx-auto my-6 w-full md:my-8 md:w-[70%] lg:w-[50%]">
      {loading ? (
        <Spinner />
      ) : (
        <div className="text-left">
          {quotes &&
            quotes.map((quote) => (
              <div
                key={quote.id}
                className="my-6 rounded-lg border border-primary-200 bg-gray-950 px-7 py-6 shadow-md shadow-[#D2E3C8]/30 md:my-10 lg:my-12"
              >
                <p className="mb-2 mt-4 text-justify text-lg leading-6 tracking-wide">
                  <FaQuoteLeft className="mb-6 mr-2 inline text-sm text-[#E16A54]" />
                  {quote.quote}
                  {/* <FaQuoteRight className="mb-6 mr-2 inline text-sm text-[#E16A54]" /> */}
                </p>
                <h3 className="text-right italic">
                  <span className="font-extralight">by,</span>{" "}
                  <span className="text-[#D2E3C8]">{quote.author}</span>
                </h3>
              </div>
            ))}
        </div>
      )}

      {!loading && (
        <div div className="flex justify-between">
          <button
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            disabled={page === 1}
            className="border-b-2 border-primary-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="flex items-center gap-2">
              <FaAnglesLeft className="" />
              Previous
            </div>
          </button>
          <button
            onClick={() => {
              if (page < 10) setPage(page + 1);
            }}
            disabled={page === totalPages}
            className="border-b-2 border-primary-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="flex items-center gap-2">
              Next
              <FaAnglesRight className="" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default QuotesPage;
