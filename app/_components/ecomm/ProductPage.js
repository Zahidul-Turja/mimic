"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "../Spinner";
import { FaStar } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";

import { BiMinus } from "react-icons/bi";
import Reviews from "./Reviews";
import ProductImages from "./ProductImages";
import ProductHighlightsRow from "./ProductHighlightsRow";
import { getProductById, addToCartLocal } from "@/app/_lib/ecomm-services";
import toast from "react-hot-toast";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto md:w-[80%]">
      <div className="flex w-full flex-col gap-8 rounded-md bg-primary-900 px-4 py-8 md:flex-row md:px-12 md:py-12">
        <ProductImages images={product.images} />

        <div className="w-full text-left">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-base text-yellow-400">
              <FaStar className="text-xs" />
              <span>{product.rating}</span>
            </span>
            <h3 className="text-sm font-extralight text-gray-300">
              Rated by {product.reviews.length} users
            </h3>
          </div>

          <h3 className="my-4">
            <span className="text-sm font-extralight text-gray-300">Brand</span>{" "}
            <span>{product.brand}</span>
          </h3>

          <p className="my-4 text-lg font-light leading-5">
            {product.description}
          </p>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-light text-gray-300">
              <RxDimensions className="text-gray-200" /> Dimensions{" "}
              <span className="text-base text-gray-300">
                {product.dimensions.width} x {product.dimensions.height} x{" "}
                {product.dimensions.depth}
              </span>
            </h4>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-light text-gray-300">
              <GiWeight className="text-gray-200" /> Weight{" "}
              <span className="text-base text-gray-300">
                {product.weight} lbs
              </span>
            </h4>
          </div>

          <ProductHighlightsRow
            warrenty={product.warrantyInformation}
            shipping={product.shippingInformation}
            availability={product.availabilityStatus}
          />

          <div className="my-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl">${product.price}</h2>
              <h4 className="flex items-center gap-0 text-sm font-light text-gray-400">
                <BiMinus className="text-xs" />
                <span>{product.discountPercentage}%</span>
              </h4>
            </div>
            <button
              className="rounded-lg bg-primary-800 px-4 py-2 text-white"
              onClick={() => {
                toast.success("Product added to cart", { duration: 3000 });
                addToCartLocal(product);
              }}
            >
              {/* <CiShoppingCart className="text-xl font-bold" /> */}
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <Reviews reviews={product.reviews} rating={product.rating} />
    </div>
  );
}

export default ProductPage;
