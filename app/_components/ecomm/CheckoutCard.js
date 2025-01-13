"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LiaShippingFastSolid } from "react-icons/lia";

import { clearCartLocal } from "@/app/_lib/ecomm-services";
import { useState } from "react";

function CheckoutCard({ products, user, total, discountedTotal }) {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const router = useRouter();

  function handleToggle() {
    setPaymentOpen((cur) => !cur);
  }

  return (
    <div className="w-full overflow-auto rounded-lg bg-primary-900 p-4 text-left md:p-8">
      <h1 className="mb-4 text-lg font-bold">Order Details</h1>
      <div className="mb-4 flex gap-2">
        <div>
          <h3>First Name</h3>
          <input
            value={user.firstName}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
        <div>
          <h3>Last Name</h3>
          <input
            value={user.lastName}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
      </div>
      <h3>Email</h3>
      <input
        value={user.email}
        className="mb-1 w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
        disabled
      />
      <h3>Phone</h3>
      <input
        value={user.phone}
        className="mb-4 w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
        disabled
      />
      <h3>Street Adress</h3>
      <input
        value={user.address.address}
        className="mb-1 w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
        disabled
      />
      <div className="mb-1 flex gap-2">
        <div>
          <h3>City</h3>
          <input
            value={user.address.city}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
        <div>
          <h3>State</h3>
          <input
            value={user.address.state}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
      </div>
      <div className="mb-4 flex gap-2">
        <div>
          <h3>Postal Code</h3>
          <input
            value={user.address.postalCode}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
        <div>
          <h3>Country</h3>
          <input
            value={user.address.country}
            className="w-full cursor-not-allowed rounded-sm bg-primary-50/40 px-4 py-1 text-primary-800"
            disabled
          />
        </div>
      </div>
      <div className="mt-8 rounded-sm">
        <h3 className="my-1 flex items-center justify-between text-sm">
          Total <span>${total.toFixed(2)}</span>
        </h3>
        <h3 className="my-1 flex items-center justify-between text-sm">
          Discount <span>${(total - discountedTotal).toFixed(2)}</span>
        </h3>
        <h3 className="my-1 flex items-center justify-between text-sm">
          Shipping
          <span className="my-1 flex items-center gap-2 font-semibold">
            <LiaShippingFastSolid className="inline text-xl" />
            Free
          </span>
        </h3>
        <h3 className="my-1 flex items-center justify-between border-t-2 border-primary-50 pt-2">
          Final Amount{" "}
          <span className="text-lg font-semibold">
            ${discountedTotal.toFixed(2)}
          </span>
        </h3>
      </div>

      <div className="mb-3 mt-6 flex items-center justify-between">
        <Link
          href={"/ecomm/products"}
          className="border-b border-yellow-400 px-2 py-1 text-sm text-yellow-400"
        >
          Continue shopping
        </Link>
        <button
          className="relative rounded-lg bg-gradient-to-t from-green-900 to-green-700 px-6 py-2 text-lg font-semibold"
          onClick={handleToggle}
        >
          Check out
        </button>
      </div>

      <div
        className={`fixed left-0 top-0 z-30 h-screen w-screen ${!paymentOpen && "hidden"}`}
        onClick={handleToggle}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-primary-600/50"></div>
        <div
          className="md:[w-40%] absolute left-[50%] top-[50%] w-[90%] -translate-x-[50%] -translate-y-[50%] rounded-lg bg-primary-100 px-6 py-4 text-primary-800 lg:w-[25%]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1 className="text-center text-xl font-bold">Payment</h1>
          <input
            type="text"
            value={user?.bank.cardNumber}
            disabled
            className="my-2 w-full cursor-not-allowed rounded-lg bg-gray-600/40 px-4 py-2 text-gray-600"
          />
          <div className="my-2 flex w-full items-center justify-between gap-4">
            <input
              type="text"
              value={user?.bank.cardExpire}
              disabled
              className="w-[50%] cursor-not-allowed rounded-lg bg-gray-600/40 px-4 py-2 text-gray-600"
            />
            <input
              type="text"
              value={user?.bank.cardNumber.slice(-3)}
              disabled
              className="w-[50%] cursor-not-allowed rounded-lg bg-gray-600/40 px-4 py-2 text-gray-600"
            />
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              className="rounded-md border-2 border-gray-600 px-4 py-1"
              onClick={handleToggle}
            >
              Cancle
            </button>
            <button
              className="rounded-md border-2 border-green-800 bg-green-800 px-4 py-1 text-primary-100"
              onClick={() => {
                clearCartLocal();
                router.push("/ecomm/cart/success");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
