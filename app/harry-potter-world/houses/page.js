import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import HousePage from "@/app/_components/harry-potter/HousePage";

export const metadata = {
  title: "Houses",
};

function page() {
  return (
    <HarryPotterLayout>
      <HousePage />
    </HarryPotterLayout>
  );
}

export default page;
