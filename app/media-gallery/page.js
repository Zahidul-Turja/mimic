import BoundingBox from "@/app/_components/BoundingBox";
import Gallery from "../_components/media-gallery/gallery";

export const metadata = {
  title: "Image Gallery",
};

function Page() {
  return (
    <BoundingBox>
      <h1 className="text-3xl font-bold tracking-wide">Mimic Gallery</h1>
      <p className="mx-auto my-4 w-[50%] text-lg">
        The best free stock photos, royalty free images & videos shared by
        creators to download and use in your next project.
      </p>
      <Gallery />
    </BoundingBox>
  );
}

export default Page;
