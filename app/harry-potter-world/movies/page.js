import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import MoviesPage from "@/app/_components/harry-potter/MoviesPage";

export const metadata = {
  title: "Harry Potter Movies",
};

function Page() {
  return (
    <HarryPotterLayout>
      <MoviesPage />
    </HarryPotterLayout>
  );
}

export default Page;
