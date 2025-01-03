"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useParams } from "next/navigation";
import { GiTimeTrap } from "react-icons/gi";
import { BsCalendar2CheckFill, BsGlobe, BsCameraReels } from "react-icons/bs";
import { FaRegCirclePlay, FaWallet, FaMusic } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";

import {
  imFellEnglish,
  poppins,
  cormorantGaramond,
} from "@/app/_utils/fonts/fonts";
import { getMovieBySlug } from "@/app/_lib/harry-potter-services";
import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import Spinner from "@/app/_components/Spinner";

function Page() {
  const slug = useParams().slug;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovieBySlug(slug);
      setMovie(movie.attributes);
      setLoading(false);
    };
    fetchMovie();
  }, [slug]);

  return (
    <HarryPotterLayout>
      {loading ? (
        <Spinner />
      ) : (
        movie && (
          <div className={`flex h-[75vh] gap-8 ${imFellEnglish.className}`}>
            <div className={`relative h-[80%] w-72`}>
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[80%] w-[80%] py-5 text-left">
              <h1 className="text-3xl font-bold">{movie.title}</h1>

              <div className="flex justify-between gap-8">
                <div className="w-[70%]">
                  <div className={`my-4 flex gap-2 ${poppins.className}`}>
                    <p className="rounded-full bg-gray-800 px-3 py-1 text-xs font-light text-gray-400">
                      Mystrey/Thriller
                    </p>
                    <p className="rounded-full bg-gray-800 px-3 py-1 text-xs font-light text-gray-400">
                      Adventure
                    </p>
                    <p className="rounded-full bg-gray-800 px-3 py-1 text-xs font-light text-gray-400">
                      Fantasy
                    </p>
                  </div>
                  <div className="my-4 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gradient-to-r from-[#F5C700] to-[#F5C700] px-3 py-[3px] text-sm text-slate-900">
                        <BsCalendar2CheckFill />
                      </div>
                      <p>{movie.release_date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="rounded-full bg-gradient-to-r from-[#E89A81] to-[#E89A81] px-3 py-[1px] text-sm font-light text-slate-800">
                        {movie.rating}
                      </p>
                      13(18+)
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gradient-to-r from-[#75CE99] to-[#75CE99] px-3 py-[3px] text-base font-extrabold text-slate-900">
                        <GiTimeTrap />
                      </div>
                      <p>{movie.running_time}</p>
                    </div>
                  </div>

                  {/* <div className="my-4 flex gap-4 text-sm font-light">
                    <div className="flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2">
                      <div>
                        <FaWallet />
                      </div>
                      <p>{movie.budget}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2">
                      <div>
                        <PiMoneyBold />
                      </div>
                      <p>{movie.box_office}</p>
                    </div>
                  </div> */}
                  <p
                    className={`my-8 text-base font-extralight leading-5 text-slate-300 ${cormorantGaramond.className}`}
                  >
                    {movie.summary}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={movie.trailer}
                      target="_blank"
                      className="flex items-center gap-2 rounded-full bg-[#92B0ED] px-4 py-2 text-gray-900"
                    >
                      Watch Trailer
                      <div className="text-xl">
                        <FaRegCirclePlay />
                      </div>
                    </a>
                    <a
                      href={movie.wiki}
                      target="_blank"
                      className="flex items-center gap-2 rounded-full border-2 border-gray-400 px-4 py-2 text-gray-400"
                    >
                      Read Wiki
                      <div className="text-xl">
                        <BsGlobe />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="my-4 w-[30%]">
                  <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-blue-400">Directors</h3>
                        <ul className="text-xs font-extralight tracking-wide">
                          {movie.directors.map((director, index) => (
                            <li key={index}>{director}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-xl text-orange-300">
                        <BiSolidMoviePlay />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-blue-400">
                          Music Composers
                        </h3>
                        <ul>
                          {movie.music_composers.map((composer, index) => (
                            <li key={index}>{composer}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-lg text-orange-300">
                        <FaMusic />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-blue-400">
                          Cinematographers
                        </h3>
                        <ul>
                          {movie.cinematographers.map(
                            (cinematographer, index) => (
                              <li key={index}>{cinematographer}</li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="text-xl text-orange-300">
                        <BsCameraReels />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-500 px-4 pb-8 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-blue-400">
                          Distributors
                        </h3>
                        <ul>
                          {movie.distributors.map((producer, index) => (
                            <li key={index}>{producer}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xl text-orange-300">
                        <TbMovie />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </HarryPotterLayout>
  );
}

export default Page;
