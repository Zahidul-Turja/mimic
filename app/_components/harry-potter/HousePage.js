import { poppins, uncialAntiqua } from "@/app/_utils/fonts/fonts";

import HousesCountainer from "./HousesContainer";
import Filters from "./Filters";

function HousePage() {
  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-4xl font-semibold ${uncialAntiqua.className}`}>
          Hogwarts Houses
        </h1>
        <Filters />
      </div>

      <HousesCountainer />
    </div>
  );
}

export default HousePage;
