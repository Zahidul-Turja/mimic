import { poppins } from "@/app/_utils/fonts/fonts";

function Filters() {
  return (
    <div className="flex items-center justify-between gap-4">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="rounded-full border border-gray-500 bg-gray-700/10 px-4 py-2 text-center text-primary-100 outline-none placeholder:font-extralight placeholder:text-primary-100"
      />

      {/* <select
        name="house"
        className={`rounded border-2 border-primary-100 bg-primary-100 px-4 py-2 text-primary-900 outline-none placeholder:text-primary-100 ${poppins.className}`}
      >
        <option value="all" default>
          Everyone
        </option>
        <option value="gryffindor" className={`${poppins.className}`}>
          Gryffindor
        </option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select> */}
    </div>
  );
}

export default Filters;
