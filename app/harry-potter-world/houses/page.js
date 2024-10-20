import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import SpellsPage from "@/app/_components/harry-potter/SpellsPage";

export const metadata = {
  title: "Houses",
};

function page() {
  return (
    <HarryPotterLayout>
      <SpellsPage />
    </HarryPotterLayout>
  );
}

export default page;
