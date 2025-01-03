"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMinus } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

import Spinner from "../Spinner";
import { getProducts } from "@/app/_lib/ecomm-services";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data.products);
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="group my-8 grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products &&
              products.map((product) => (
                <Link
                  href={`/ecomm/products/${product.id}`}
                  key={product.id}
                  className="col-span-1 flex flex-col justify-between rounded-lg border border-gray-500 px-4 py-4 transition-all duration-300 group-hover:opacity-50 hover:scale-105 hover:!opacity-100 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={700}
                        className="h-full w-full bg-gradient-to-tr"
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-800 to-slate-700"></div>
                    </div>
                    <div>
                      <h3 className="truncate text-lg">{product.title}</h3>
                      <div className="flex items-center gap-2">
                        <h2 className="truncate bg-gradient-to-tr from-green-600 to-green-500 bg-clip-text text-2xl text-transparent">
                          ${product.price}
                        </h2>
                        <h4 className="flex items-center gap-0 text-sm font-light text-gray-400">
                          <BiMinus className="text-xs" />
                          <span>{product.discountPercentage}%</span>
                        </h4>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-base text-yellow-500">
                            <FaStar className="text-xs" />
                            <span>{product.rating}</span>
                          </span>
                          <h3 className="text-sm font-light text-gray-300">
                            ({product.reviews.length})
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="my-8 flex justify-center gap-4">
            <button>Prev</button>
            <button>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
