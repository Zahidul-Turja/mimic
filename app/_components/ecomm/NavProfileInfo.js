"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";

import { getCurrentUser, logout } from "@/app/_lib/ecomm-services";

function NavProfileInfo({ setIsUserLoggedIn }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();

        console.log("Current user:", response);
        setUser(response);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={user?.image || "/avatar.jpg"}
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs capitalize text-gray-400">{user?.role}</p>
          </div>
        </div>
        <MdLogout
          className="cursor-pointer text-2xl"
          onClick={() => {
            logout();
            setIsUserLoggedIn(false);
          }}
        />
      </div>
    </div>
  );
}

export default NavProfileInfo;
