import {
  poppins,
  uncialAntiqua,
  imFellEnglish,
} from "@/app/_utils/fonts/fonts";

import SpellsContainer from "./SpellsContainer";
import Filters from "./Filters";

function SpellsPage() {
  return (
    <div className={`w-full text-left ${imFellEnglish.className}`}>
      <div className="flex items-center justify-between">
        <h1
          className={`text-lg font-bold md:text-3xl lg:text-4xl ${uncialAntiqua.className}`}
        >
          Magic Spells
        </h1>
        {/* <Filters /> */}
      </div>

      <SpellsContainer />
    </div>
  );
}

export default SpellsPage;
