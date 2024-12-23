import BoundingBox from "@/app/_components/BoundingBox";
import Gallery from "../_components/image-gallery/gallery";

export const metadata = {
  title: "Image Gallery",
};

function Page() {
  return (
    <BoundingBox>
      <h1 className="mb-4 text-3xl font-bold tracking-wide">Mimic Gallery</h1>
      <Gallery />
    </BoundingBox>
  );
}

export default Page;
