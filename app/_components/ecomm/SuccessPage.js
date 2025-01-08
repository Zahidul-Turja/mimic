"use client";

import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { RiShoppingCartLine } from "react-icons/ri";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

function SuccessPage() {
  const size = useWindowSize();

  return (
    <div>
      <Confetti
        width={size.width}
        height={size.height}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={700}
        recycle={false}
      />

      <div>
        <div className="mb-10 mt-24 flex items-center justify-center gap-2 text-4xl font-bold">
          <TiTick className="rounded-full bg-green-500 text-white" />
          <h1>Purchase Successful</h1>
        </div>
        <Link
          href={"/ecomm/products"}
          className="border-b-2 border-primary-200 px-2 py-1 text-lg text-primary-200"
        >
          <RiShoppingCartLine className="mr-2 inline text-2xl text-primary-50" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
