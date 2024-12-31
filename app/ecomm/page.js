import BoundingBox from "../_components/BoundingBox";
import Login from "../_components/ecomm/Login";

export const metadata = {
  title: "Products",
  description: "Products page of the Mimic Shop",
};

function Page() {
  return (
    <BoundingBox>
      <Login />
    </BoundingBox>
  );
}

export default Page;
