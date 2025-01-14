"use client";

import { useState, useRef, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { categories } from "@/public/data";
import Link from "next/link";

function Navigation() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  function toggle() {
    setOpen(!open);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false); // Close the sidebar if clicked outside
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <IoMenuSharp className="cursor-pointer text-3xl" onClick={toggle} />

      <div
        ref={sidebarRef}
        className={`fixed top-0 z-50 h-screen bg-primary-50 px-7 py-20 text-primary-950 transition-all duration-500 ease-in-out ${
          open ? "right-0 rounded-none" : "-right-full rounded-l-3xl"
        }`}
      >
        <RxCross2
          className="absolute right-10 top-10 cursor-pointer text-3xl"
          onClick={toggle}
        />
        <div className="flex flex-col gap-4">
          <Link
            href={"/"}
            onClick={toggle}
            className="cursor-pointer border-b border-gray-500 px-12 py-4 text-center text-xl font-bold transition-all duration-200 hover:rounded-lg hover:bg-slate-900/70 hover:text-primary-100"
          >
            Home
          </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              onClick={toggle}
              className="cursor-pointer border-b border-gray-500 px-12 py-4 text-center text-lg font-bold transition-all duration-200 hover:rounded-lg hover:bg-slate-900/70 hover:text-primary-100"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
