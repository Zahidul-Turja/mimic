import HarryPotterLayout from "../_components/harry-potter/HarryPotterLayout";
import CharacterPage from "../_components/harry-potter/CharacterPage";

export const metadata = {
  title: "Harry Potter Characters",
};

function Page() {
  return (
    <HarryPotterLayout>
      <CharacterPage />
    </HarryPotterLayout>
  );
}

export default Page;
