import BoundingBox from "@/app/_components/BoundingBox";
import FeedPage from "@/app/_components/social/FeedPage";
import NavBar from "@/app/_components/social/NavBar";

export const metadata = {
  title: "Feed",
  description: "Feed page of the Mimic",
};

function Page() {
  return (
    <>
      <NavBar />
      <BoundingBox>
        <FeedPage />
      </BoundingBox>
    </>
  );
}

export default Page;
