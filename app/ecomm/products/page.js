import BoundingBox from "@/app/_components/BoundingBox";
import HeaderSection from "@/app/_components/ecomm/HeaderSection";
import NavBar from "@/app/_components/ecomm/NavBar";
import ProductsList from "@/app/_components/ecomm/ProductsList";

export const metadata = {
  title: "Products",
  description: "Products page of the Mimic Shop",
};

function Page() {
  return (
    <main>
      <NavBar />
      <HeaderSection />
      <BoundingBox>
        <h1 className="mb-3 text-lg font-bold tracking-wide md:mb-0 md:text-3xl">
          Products
        </h1>
        <ProductsList />
      </BoundingBox>
    </main>
  );
}

export default Page;
