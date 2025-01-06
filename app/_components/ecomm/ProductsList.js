"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMinus } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

import Spinner from "../Spinner";
import {
  getProducts,
  getCategories,
  getProductsByCategory,
  searchProducts,
} from "@/app/_lib/ecomm-services";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        const categories = await getCategories();
        setCategory(categories);
        setProducts(data.products);
        setTotalItems(data.total);
        setNumPages(Math.ceil(data.total / data.limit));
        console.log("Products fetched:", data);
        console.log("Number of pages:", Math.ceil(data.total / data.limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleCategoryChange(e) {
    async function fetchProductsByCategory() {
      try {
        // setLoading(true);
        const data = await getProductsByCategory(e.target.value);
        setProducts(data.products);
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductsByCategory();
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!e.target[0].value.trim().length <= 3) {
      return;
    }
    async function fetchProductsBySearch() {
      try {
        setLoading(true);
        const data = await searchProducts(e.target[0].value);
        setProducts(data.products);
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductsBySearch();
  }

  return (
    <div>
      <div>
        <div className="flex w-full place-content-end items-center justify-between gap-4">
          <form
            className="relative w-[20%] transition-all duration-300 focus-within:w-[25%]"
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-gray-800 p-3 px-4 text-white outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="absolute right-1 top-1 rounded-full bg-black/50 p-2"
              type="submit"
            >
              <IoIosSearch className="text-2xl" />
            </button>
          </form>
          <select
            className="w-1/6 cursor-pointer rounded-md bg-gray-800 p-3 px-4 text-white outline-none"
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            {category.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="group my-8 grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products &&
                products.map((product) => (
                  <Link
                    href={`/ecomm/products/${product.id}`}
                    key={product.id}
                    className="col-span-1 flex flex-col justify-between rounded-lg border border-gray-500 px-4 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-400 to-gray-700"></div>
                        <div
                          className="absolute right-2 top-2 rounded-full border border-white p-1 text-xl text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            setCart([...cart, product]);
                          }}
                        >
                          <CiShoppingCart />
                        </div>
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
            <div className="mb-8 mt-16 flex justify-center gap-4">
              <button>Prev</button>
              {numPages &&
                Array.from({ length: numPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={"rounded-sm bg-slate-600 px-4 py-1"}
                    >
                      {page}
                    </button>
                  ),
                )}
              <button>Next</button>
            </div>
          </>
        )}
      </div>
      <div className="fixed bottom-4 right-12 rounded-full border-2 border-slate-100 p-2 text-slate-100">
        <CiShoppingCart className="text-3xl" />
        <p className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 font-semibold text-slate-900">
          {cart.length}
        </p>
      </div>
    </div>
  );
}

export default ProductsList;
