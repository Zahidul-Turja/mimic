"use client";

import { useEffect, useState } from "react";

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
        console.log(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div className="border-2 border-primary-200">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {quotes.map((quote) => (
            <div key={quote.id}>{quote.body}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuotesPage;

// author
// :
// "Edsger Dijkstra"
// author_permalink
// :
// "edsger-dijkstra"
// body
// :
// "Computer science is no more about computers than astronomy is about telescopes."
// dialogue
// :
// false
// downvotes_count
// :
// 0
// favorites_count
// :
// 4
// id
// :
// 299
// private
// :
// false
// tags
// :
// Array(4)
// 0
// :
// "computers"
// 1
// :
// "astronomy"
// 2
// :
// "programming"
// 3
// :
// "computer-science"
// length
// :
// 4
// [[Prototype]]
// :
// Array(0)
// upvotes_count
// :
// 1
// url
// :
// "https://favqs.com/quotes/edsger-dijkstra/299-computer-scienc-"
