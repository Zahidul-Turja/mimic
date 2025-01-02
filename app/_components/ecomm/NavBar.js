"use client";

import Image from "next/image";

import logo from "@/public/ecomm/mimic-shop-logo.png";
import SearchInput from "./SearchInput";
import AuthButtons from "./AuthButtons";
import NavProfileInfo from "./NavProfileInfo";
import { isLoggedIn } from "@/app/_lib/ecomm-services";
import { useEffect, useState } from "react";

function NavBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const loggedIn = await isLoggedIn();
      setIsUserLoggedIn(loggedIn);
    };

    checkUserLoggedIn();
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="absolute z-30 flex w-full items-center justify-between overflow-x-hidden bg-white/10 px-4 py-2 text-2xl md:px-8 md:py-3 lg:px-12 lg:py-4">
        <div className="relative flex w-24 items-center justify-between px-4 py-3">
          <div className="absolute right-0 top-0 -z-10 h-full w-full -skew-x-[16deg] rounded-lg bg-gradient-to-tr from-green-900 to-green-600"></div>
          <Image src={logo} alt="Mimic Shop Logo" />
        </div>

        <div className="flex items-center gap-10">
          <SearchInput />
          {isUserLoggedIn ? (
            <NavProfileInfo setIsUserLoggedIn={setIsUserLoggedIn} />
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
