"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 cursor-pointer items-center transition-all duration-300 ${
          isOpen ? "w-80 translate-x-0" : "w-0 translate-x-2"
        } overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full rounded-full border border-gray-200 bg-gray-700/10 px-4 py-2 text-center text-base font-normal text-primary-50 outline-none placeholder:font-extralight placeholder:text-primary-100"
        />
      </div>
      <button
        onClick={toggleSearch}
        className="rounded-full bg-gray-900 p-2 transition-all duration-200 hover:bg-gray-800"
      >
        <IoIosSearch className="text-2xl text-primary-100" />
      </button>
    </div>
  );
};

export default SearchInput;
