"use client";

import { getCartLocal } from "@/app/_lib/ecomm-services";
import { useEffect, useState } from "react";

function CartPage() {
  const [cartLocal, setCartLocal] = useState();

  useEffect(() => {
    const cart = getCartLocal();

    // Process the cart to combine duplicates
    const processedCart = cart.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increase the quantity if the product already exists
        existingProduct.quantity =
          (existingProduct.quantity || 1) + (product.quantity || 1);
      } else {
        // Add the product to the accumulator with a default quantity of 1
        acc.push({ ...product, quantity: product.quantity || 1 });
      }
      return acc;
    }, []);

    console.log("Processed Cart: ", processedCart);

    // Update the local cart state
    setCartLocal(processedCart);
  }, []);

  return (
    <div className="w-full rounded-md bg-primary-900 px-12 py-12">
      {cartLocal &&
        cartLocal.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-md bg-primary-800 p-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.description}</p>
                <p className="text-sm text-gray-400">{product.quantity}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CartPage;
