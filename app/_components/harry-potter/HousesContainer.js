"use client";

import { useEffect, useState } from "react";

import { houses as dummy } from "@/app/_lib/dummy-data";
import Image from "next/image";
import { getHarryPotterHouses } from "@/app/_lib/harry-potter-services";

function HousesContainer() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchHouses() {
      try {
        const data = await getHarryPotterHouses();
        setHouses(data);
      } catch (error) {
        console.error("Error fetching Hogwarts Hhouses:", error);
        setHouses(dummy);
      } finally {
        setLoading(false);
      }
    }

    fetchHouses();
  }, []);

  return (
    <div className="my-8 flex justify-between">
      {houses.map((house) => (
        <div
          key={house.index}
          className={`from-${house.colors[0]} to-${house.colors[1]} relative h-72 w-64 overflow-hidden rounded-lg border border-gray-500 bg-gradient-to-tr px-4 py-2`}
        >
          <Image
            src={dummy[house.index].image}
            alt={house.house}
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <h3 className="text-2xl font-bold text-gray-100">
              {house.emoji}
              {house.house}
            </h3>
            <p className="text-xs capitalize text-primary-200">
              Founded by
              <span className="italic text-gray-100"> {house.founder}</span>
            </p>
            <p className="my-2 text-sm capitalize text-gray-200">
              The Animal that represents the {house.house} is the {house.animal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HousesContainer;
