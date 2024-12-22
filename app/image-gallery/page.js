import BoundingBox from "@/app/_components/BoundingBox";
import Gallery from "../_components/image-gallery/gallery";

export const metadata = {
  title: "Image Gallery",
};

function Page() {
  return (
    <BoundingBox>
      <h1 className="mb-4 text-xl font-bold">Image Gallery</h1>
      <Gallery />
    </BoundingBox>
  );
}

export default Page;
