import BoundingBox from "@/app/_components/BoundingBox";
import SuccessPage from "@/app/_components/ecomm/SuccessPage";

export const metadata = {
  title: "Purchase Successfull",
  description: "Successfully purchased product page",
};

function Page() {
  return (
    <BoundingBox>
      <SuccessPage />
    </BoundingBox>
  );
}

export default Page;
