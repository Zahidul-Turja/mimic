"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiOutlineUsers } from "react-icons/hi2";
import { GiSpellBook } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { MdMovieEdit, MdOutlineCastle } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import {
  imFellEnglish,
  cormorantGaramond,
  uncialAntiqua,
} from "@/app/_utils/fonts/fonts";
import { useState } from "react";

function Sidebar() {
  const pathname = usePathname().replace("/harry-potter-world", "");

  return (
    <>
      <BigScreen pathname={pathname} />
      <MobileScreen pathname={pathname} />
    </>
  );
}

export default Sidebar;

function MobileScreen({ pathname }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((cur) => !cur);
  }
  return (
    <div className="fixed bottom-10 right-10 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-primary-950 text-primary-50 md:hidden">
      <AiOutlineMenuUnfold className="text-4xl" onClick={handleToggle} />

      <div
        className={`fixed left-0 top-0 h-screen w-screen bg-primary-50 px-20 transition-all duration-300 ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <RxCross2
          className="absolute right-8 top-24 text-3xl text-primary-950"
          onClick={handleToggle}
        />
        <div className="flex flex-col gap-8 pt-36 text-2xl font-semibold">
          <Link
            href={"/harry-potter-world"}
            onClick={handleToggle}
            className="flex justify-center gap-4 border-b border-primary-900 py-4 text-primary-950"
          >
            <HiOutlineUsers className="w-7" />
            <span>Characters</span>
          </Link>
          <Link
            href={"/harry-potter-world/spells"}
            onClick={handleToggle}
            className="flex items-center justify-center gap-4 border-b border-primary-900 py-2 text-primary-950"
          >
            <GiSpellBook className="w-7" />
            <span>Magic Spells</span>
          </Link>
          <Link
            href={"/harry-potter-world/houses"}
            onClick={handleToggle}
            className="flex items-center justify-center gap-4 border-b border-primary-900 py-2 text-primary-950"
          >
            <MdOutlineCastle className="w-7" />
            <span>Houses</span>
          </Link>
          <Link
            href={"/harry-potter-world/movies"}
            onClick={handleToggle}
            className="flex items-center justify-center gap-4 border-b border-primary-900 py-2 text-primary-950"
          >
            <MdMovieEdit className="w-7" />
            <span>Movies</span>
          </Link>
          <Link
            href={"/harry-potter-world/books"}
            onClick={handleToggle}
            className="flex items-center justify-center gap-4 border-b border-primary-900 py-2 text-primary-950"
          >
            <BsBook className="w-7" />
            <span>Books</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BigScreen({ pathname }) {
  return (
    <aside className="top-0 z-10 hidden min-h-[calc(100vh-4rem)] w-0 overflow-y-scroll bg-primary-900 p-4 text-lg text-gray-600 scrollbar-none first-letter:left-0 md:block md:w-80">
      <nav className="py-12">
        <ul className={`flex flex-col gap-4 ${uncialAntiqua.className}`}>
          <li>
            <Link
              href="/harry-potter-world"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "" ? "bg-gray-700 text-primary-100" : "border-transparent"}`}
            >
              <HiOutlineUsers className="w-7" />
              <span>Characters</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/spells"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/spells" ? "bg-gray-700 text-primary-100" : "border-transparent"}`}
            >
              <GiSpellBook className="w-7" />
              <span>Magic Spells</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/houses"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/houses" ? "bg-gray-700 text-primary-100" : "border-transparent"}`}
            >
              <MdOutlineCastle className="w-7" />
              <span>Houses</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/movies"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname.includes("movies") ? "bg-gray-700 text-primary-100" : "border-transparent"}`}
            >
              <MdMovieEdit className="w-7" />
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/books"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname.includes("books") ? "bg-gray-700 text-primary-100" : "border-transparent"}`}
            >
              <BsBook className="w-7" />
              <span>Books</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
