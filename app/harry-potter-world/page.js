import HarryPotterLayout from "../_components/harry-potter/HarryPotterLayout";
import AllCharacters from "../_components/harry-potter/AllCharacters";

export const metadata = {
  title: "Harry Potter World",
};

function Page() {
  return (
    <HarryPotterLayout>
      <AllCharacters />
    </HarryPotterLayout>
  );
}

export default Page;
