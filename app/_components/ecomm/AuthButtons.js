import Link from "next/link";

function AuthButtons() {
  return (
    <div className="flex items-center gap-2 text-base font-normal text-primary-100">
      <Link
        href="/ecomm"
        className="rounded-full border-2 border-gray-400 px-6 py-2 transition-all duration-200 hover:bg-gray-700"
      >
        Login
      </Link>
      <Link
        href={"/ecomm"}
        className="rounded-full border-2 border-gray-700 bg-gray-700/40 px-6 py-2 transition-all duration-200 hover:bg-gray-700"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default AuthButtons;
