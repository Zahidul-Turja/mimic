import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import BoundingBox from "../_components/BoundingBox";
import QuotesPage from "../_components/quotes/QuotesPage";

export const metadata = {
  title: "Quotes",
  description: "Need some motivational quotes? Find them here.",
};

function Page() {
  return (
    <BoundingBox>
      <h1 className="text-3xl font-bold tracking-wide">
        <FaQuoteLeft className="mb-6 mr-2 inline text-xl" />
        Quotes
        <FaQuoteRight className="mb-6 ml-2 inline text-xl" />
      </h1>
      <p className="mx-auto my-4 w-full text-lg md:w-[70%] lg:w-[50%]">
        Need some motivational quotes? Find them here. Search for what you need.
      </p>
      <QuotesPage />
    </BoundingBox>
  );
}

export default Page;
