import BoundingBox from "@/app/_components/BoundingBox";
import HeaderSection from "@/app/_components/ecomm/HeaderSection";
import ProductsList from "@/app/_components/ecomm/ProductsList";

export const metadata = {
  title: "Products",
  description: "Products page of the Mimic Shop",
};

function Page() {
  return (
    <>
      <HeaderSection />
      <BoundingBox>
        <h1 className="text-3xl font-bold tracking-wide">Products</h1>
        <ProductsList />
      </BoundingBox>
    </>
  );
}

export default Page;
