import Image from "next/image";
import logo from "@/public/logo.svg";
import Navigation from "./Navigation";
import Link from "next/link";

function Header() {
  return (
    <header className="relative z-50 border-b border-primary-900 bg-primary-900 px-4 py-3 md:px-12">
      <div className="mx-auto flex max-w-full items-center justify-between">
        <Link href={"/"} className="relative aspect-[5/2] w-24">
          <Image
            src={logo}
            fill
            quality={100}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
