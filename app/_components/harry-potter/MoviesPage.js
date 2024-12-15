import { poppins } from "@/app/_utils/fonts/fonts";

import { movies } from "@/app/_lib/dummy-data";

function MoviesPage() {
  return (
    <div className={`w-full text-left ${poppins.className}`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-4xl font-semibold`}>Harry Potter Movies</h1>
      </div>

      <div className="my-8 grid w-full grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.index}
            className="col-span-1 flex justify-between rounded-lg border border-gray-500 px-4 py-2"
          >
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
