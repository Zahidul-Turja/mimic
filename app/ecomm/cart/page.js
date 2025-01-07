import BoundingBox from "@/app/_components/BoundingBox";
import CartPage from "@/app/_components/ecomm/CartPage";

export const metadata = {
  title: "Cart",
  description: "Cart page of the Mimic Shop",
};

function Page() {
  return (
    <BoundingBox>
      <CartPage />
    </BoundingBox>
  );
}

export default Page;
