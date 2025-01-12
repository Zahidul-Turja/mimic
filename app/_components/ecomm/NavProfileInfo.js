"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdLogout } from "react-icons/md";

import { getCurrentUser, logout } from "@/app/_lib/ecomm-services";

function NavProfileInfo({ setIsUserLoggedIn }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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
            setIsOpen(true);
          }}
        />
      </div>

      {isOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-screen bg-black/50 transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-32 rounded-lg bg-primary-100 px-8 py-6 md:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-justify text-base text-primary-950">
              Your recently added items will be removed if you log out. Sure you
              want to log out?
            </p>
            <div className="mt-4 flex items-center justify-end gap-4">
              <button
                className="rounded-md border-2 border-primary-900 px-4 py-2 text-sm font-semibold text-primary-900"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md border-2 border-primary-900 bg-primary-900 px-4 py-2 text-sm font-semibold text-primary-100"
                onClick={() => {
                  logout();
                  setIsUserLoggedIn(false);
                  setIsOpen(false);
                  router.push("/ecomm");
                  toast.success("Logged out successfully!", {
                    duration: 3000,
                  });
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavProfileInfo;
