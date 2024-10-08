"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiSpellBook } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { BsBook } from "react-icons/bs";
import { MdMovieEdit, MdOutlineCastle } from "react-icons/md";

function Sidebar() {
  const pathname = usePathname().replace("/harry-potter-world", "");

  return (
    <aside className="scrollbar-none top-0 z-10 min-h-[calc(100vh-4rem)] w-80 overflow-y-scroll bg-primary-900 p-4 text-lg text-primary-100 first-letter:left-0">
      <nav className="py-12">
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="/harry-potter-world"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "" ? "bg-gray-700" : "border-transparent"}`}
            >
              <HiOutlineUsers className="w-7" />
              <span>Characters</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/spells"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/spells" ? "bg-gray-700" : "border-transparent"}`}
            >
              <GiSpellBook className="w-7" />
              <span>Magic Spells</span>
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/students" ? "bg-gray-700" : "border-transparent"}`}
            >
              <PiStudentBold className="w-7" />
              <span>Hogwarts Students</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/staffs" ? "bg-gray-700" : "border-transparent"}`}
            >
              <GrUserWorker className="w-7" />
              <span>Hogwarts Staffs</span>
            </Link>
          </li> */}
          <li>
            <Link
              href="/harry-potter-world/houses"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/houses" ? "bg-gray-700" : "border-transparent"}`}
            >
              <MdOutlineCastle className="w-7" />
              <span>Houses</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/movies"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/movies" ? "bg-gray-700" : "border-transparent"}`}
            >
              <MdMovieEdit className="w-7" />
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link
              href="/harry-potter-world/books"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/books" ? "bg-gray-700" : "border-transparent"}`}
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

export default Sidebar;
