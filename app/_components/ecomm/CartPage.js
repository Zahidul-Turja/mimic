"use client";

import { useEffect, useState } from "react";

import CartProducts from "./CartProducts";
import CheckoutCard from "./CheckoutCard";
import Spinner from "../Spinner";
import {
  createCart,
  getCartLocal,
  getCurrentUser,
} from "@/app/_lib/ecomm-services";

function CartPage() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState();
  const [total, setTotal] = useState(0.0);
  const [discountedTotal, setDiscountedTotal] = useState(0.0);
  const [user, setUser] = useState();

  useEffect(() => {
    const processCart = async () => {
      try {
        setLoading(true);
        // Step 1: Fetch local cart data
        const cart = getCartLocal(); // Assume this function returns the cart data
        const currentUser = await getCurrentUser();
        setUser(currentUser);

        // Step 2: Group products by ID and calculate quantities
        const productMap = cart.reduce((acc, product) => {
          if (acc[product.id]) {
            acc[product.id].quantity += 1; // Increase quantity for duplicates
          } else {
            acc[product.id] = { id: product.id, quantity: 1 };
          }
          return acc;
        }, {});

        // Step 3: Transform the grouped data into an array
        const products = Object.values(productMap);

        console.log("Processed products for API:", products);

        // Step 4: Call the API with the processed data
        const userId = currentUser.id;
        const cartData = await createCart(userId, products);
        setCart(cartData.products);
        setTotal(cartData.total);
        setDiscountedTotal(cartData.discountedTotal);

        // console.log("Cart created successfully:", cartData);
        // console.log("Discounted Total:", cartData.discountedTotal);
        // console.log("Total:", cartData.total);
        console.log("User: ", currentUser);
      } catch (error) {
        console.error("Error processing cart:", error.message);
      } finally {
        setLoading(false);
      }
    };

    processCart();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto grid w-[75%] grid-cols-[60%_37%] items-start justify-between">
      <CartProducts
        products={cart}
        total={total}
        discountedTotal={discountedTotal}
      />
      <CheckoutCard
        products={cart}
        user={user}
        total={total}
        discountedTotal={discountedTotal}
      />
    </div>
  );
}

export default CartPage;
