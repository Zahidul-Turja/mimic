import BoundingBox from "@/app/_components/BoundingBox";
import FeedPage from "@/app/_components/social/FeedPage";

export const metadata = {
  title: "Feed",
  description: "Feed page of the Mimic",
};

function Page() {
  return (
    <BoundingBox>
      <FeedPage />
    </BoundingBox>
  );
}

export default Page;
