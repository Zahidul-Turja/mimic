"use client";

import { useState, useEffect } from "react";
import { SlMagicWand } from "react-icons/sl";
import { GoGrabber } from "react-icons/go";

import Spinner from "../Spinner";
import { getHarryPotterSpells } from "@/app/_lib/harry-potter-services";

function SpellsContainer() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpells() {
      try {
        const data = await getHarryPotterSpells();
        setSpells(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching spells:", error);
        setLoading(false);
      }
    }

    fetchSpells();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="my-8 grid w-full grid-cols-3 gap-6">
      {spells.map((spell) => (
        <div
          key={spell.index}
          className="col-span-1 flex justify-between rounded-lg border border-gray-500 px-4 py-2"
        >
          <div className="w-[80%]">
            <h1 className="bg-gradient-to-b from-cyan-500 to-blue-500 bg-clip-text text-lg font-semibold text-transparent">
              <span>{spell.index + 1}. </span>
              {spell.spell}
            </h1>

            <p className="my-2 truncate text-sm">{spell.use}</p>
          </div>
          <GoGrabber className="my-2 inline h-6 w-6 cursor-grab" />
        </div>
      ))}
    </div>
  );
}

export default SpellsContainer;
