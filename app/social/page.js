import BoundingBox from "../_components/BoundingBox";
import Login from "../_components/social/Login";

export const metadata = {
  title: "Social Login",
  description: "Social login page of the Mimic",
};

function Page() {
  return (
    <BoundingBox>
      <Login />
    </BoundingBox>
  );
}

export default Page;
