import BoundingBox from "@/app/_components/BoundingBox";
import ProductPage from "@/app/_components/ecomm/ProductPage";

export const metadata = {
  title: "Product",
  description: "Product single page of the Mimic Shop",
};

function Page() {
  return (
    <BoundingBox>
      <ProductPage />
    </BoundingBox>
  );
}

export default Page;
