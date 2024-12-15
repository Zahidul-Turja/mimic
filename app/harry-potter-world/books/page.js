import BooksPage from "@/app/_components/harry-potter/BooksPage";
import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";

export const metadata = {
  title: "Harry Potter Books",
};

function Page() {
  return (
    <HarryPotterLayout>
      <BooksPage />
    </HarryPotterLayout>
  );
}

export default Page;
