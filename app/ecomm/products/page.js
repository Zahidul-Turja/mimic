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
        <h1 className="text-3xl font-bold tracking-wide">Products</h1>
        <ProductsList />
      </BoundingBox>
    </main>
  );
}

export default Page;
