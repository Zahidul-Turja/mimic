import BoundingBox from "../_components/BoundingBox";
import QuotesPage from "../_components/quotes/QuotesPage";

function Page() {
  return (
    <BoundingBox>
      <h1 className="text-3xl font-bold tracking-wide">Quotes</h1>
      <p className="mx-auto my-4 w-[50%] text-lg">
        Get to learn different quotes from different authors.
      </p>
      <QuotesPage />
    </BoundingBox>
  );
}

export default Page;
