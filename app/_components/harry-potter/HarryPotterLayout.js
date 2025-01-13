import BoundingBox from "@/app/_components/BoundingBox";
import Sidebar from "@/app/_components/Sidebar";

function HarryPotterLayout({ children }) {
  return (
    <div className="h-[calc(100vh-4rem)] md:grid md:grid-cols-[20rem_1fr] md:grid-rows-[auto_1fr]">
      <Sidebar className="bg-primary-900" />

      <div className="mx-auto my-0 h-full w-full overflow-y-scroll bg-primary-950 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-700/50">
        <BoundingBox>{children}</BoundingBox>
      </div>
    </div>
  );
}

export default HarryPotterLayout;
