"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "../Spinner";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoShieldSlash } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdEventAvailable } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";

import { getProductById } from "@/app/_lib/ecomm-services";
import { BiMinus } from "react-icons/bi";
import Reviews from "./Reviews";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

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
    <div className="mx-auto w-[80%]">
      <div className="flex w-full gap-8 rounded-md bg-primary-900 px-12 py-12">
        <div className="w-[50%]">
          <div className="relative max-h-[350px] w-full cursor-zoom-in overflow-hidden rounded-lg border-2 border-gray-400 bg-gray-400">
            <Image
              key={selectedImage}
              src={product.images[selectedImage]}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex gap-2">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`relative h-16 w-16 cursor-pointer overflow-hidden rounded-lg border-2 border-gray-300 ${
                  index !== selectedImage && "border-opacity-50 opacity-50"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={img}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
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

          <div className="my-6 flex items-center justify-between rounded-lg bg-primary-950 px-4 py-4">
            <div className="w-[33%] border-r-2 border-gray-800 text-center">
              <h3 className="flex items-center justify-center gap-2">
                <GoShieldSlash /> Warranty
              </h3>
              <p className="">{product.warrantyInformation}</p>
            </div>
            <div className="w-[34%] border-r-2 border-gray-800 text-center">
              <h3 className="flex items-center justify-center gap-2">
                <LiaShippingFastSolid />
                Shipping
              </h3>
              <p>{product.shippingInformation}</p>
            </div>
            <div className="w-[33%] text-center">
              <h3 className="flex items-center justify-center gap-2">
                <MdEventAvailable />
                Availability
              </h3>
              <p>{product.availabilityStatus}</p>
            </div>
          </div>

          <div className="my-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl">${product.price}</h2>
              <h4 className="flex items-center gap-0 text-sm font-light text-gray-400">
                <BiMinus className="text-xs" />
                <span>{product.discountPercentage}%</span>
              </h4>
            </div>
            <button className="rounded-lg bg-primary-800 px-4 py-2 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Reviews reviews={product.reviews} />
    </div>
  );
}

export default ProductPage;
