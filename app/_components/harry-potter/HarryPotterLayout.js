import BoundingBox from "@/app/_components/BoundingBox";
import Sidebar from "@/app/_components/Sidebar";

function HarryPotterLayout({ children }) {
  return (
    <div className="grid h-[calc(100vh-4rem)] grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar className="bg-primary-900" />

      <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-700/50 mx-auto my-0 h-full w-full overflow-y-scroll bg-primary-950">
        <BoundingBox>{children}</BoundingBox>
      </div>
    </div>
  );
}

export default HarryPotterLayout;
