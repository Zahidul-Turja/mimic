"use client";

import Link from "next/link";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiSpellBook } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname().replace("harry-potter-world", "");

  return (
    <aside className="top-0 z-10 min-h-[calc(100vh-4rem)] w-80 overflow-y-scroll bg-primary-900 p-4 text-lg text-primary-100 first-letter:left-0">
      <nav className="py-12">
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="#"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/" ? "bg-gray-700" : "border-transparent"}`}
            >
              <HiOutlineUsers className="w-7" />
              <span>All Characters</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`flex items-center gap-4 rounded-lg px-9 py-2 ${pathname === "/spells" ? "bg-gray-700" : "border-transparent"}`}
            >
              <GiSpellBook className="w-7" />
              <span>All Spells</span>
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
