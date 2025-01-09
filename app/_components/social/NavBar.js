import Link from "next/link";

import { CiHome } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 mx-auto w-full bg-primary-900/30 py-4">
      <div className="mx-auto flex w-[30%] items-center justify-around">
        <Link href={"/social/feed"} className="flex items-center gap-2">
          <IoHomeOutline className="text-xl" />
          <span>Home</span>
        </Link>
        <Link href={"/social/user"} className="flex items-center gap-2">
          <CgProfile className="text-xl" />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
