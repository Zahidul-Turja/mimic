import BoundingBox from "@/app/_components/BoundingBox";
import NavBar from "@/app/_components/ecomm/NavBar";
import ProductPage from "@/app/_components/ecomm/ProductPage";

export const metadata = {
  title: "Product",
  description: "Product single page of the Mimic Shop",
};

function Page() {
  return (
    <>
      {/* <NavBar /> */}
      <BoundingBox>
        <ProductPage />
      </BoundingBox>
    </>
  );
}

export default Page;
