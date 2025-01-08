"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMinus } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import Spinner from "../Spinner";
import {
  getProducts,
  getCategories,
  getProductsByCategory,
  searchProducts,
  getCartByUserId,
  getCartLocal,
  isLoggedIn,
  getCurrentUser,
  addToCartLocal,
} from "@/app/_lib/ecomm-services";
import { useRouter } from "next/navigation";

function ProductsList() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        const categories = await getCategories();
        const cartLocal = getCartLocal();
        if (isLoggedIn()) {
          const user = await getCurrentUser();
          console.log("Cart local: ", cartLocal);
          if (!cartLocal || cartLocal.length === 0) {
            const cartDynamic = await getCartByUserId(user.id);
            cartDynamic.products.map((product) => {
              addToCartLocal(product);
            });
            console.log("Product added to local cart");
            setCart(cartDynamic.products);
            console.log("Cart dynamic: ", cartDynamic.products);
          } else {
            setCart(cartLocal);
          }

          setUser(user);
        } else {
          setCart(cartLocal);
        }
        setCategory(categories);
        setProducts(data.products);
        setTotalItems(data.total);
        setNumPages(Math.ceil(data.total / data.limit));
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
        setTotalItems(data.total);
        setNumPages(Math.ceil(data.total / data.limit));
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
    if (search.trim().length <= 3) {
      return;
    }

    async function fetchProductsBySearch() {
      try {
        setLoading(true);
        const data = await searchProducts(e.target[0].value);
        setProducts(data.products);
        setTotalItems(data.total);
        setNumPages(Math.ceil(data.total / data.limit));
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductsBySearch();
  }

  function handleCartClick() {
    if (user) {
      router.push("/ecomm/cart");
    } else {
      router.push("/ecomm");
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    const skip = (page - 1) * 30;
    async function fetchProductsByPage() {
      try {
        setLoading(true);
        const data = await getProducts(skip);
        setProducts(data.products);
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductsByPage();
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
                          className="absolute right-2 top-2 rounded-full border-2 border-white p-2 text-xl text-white transition-all duration-200 hover:cursor-pointer hover:bg-gray-900"
                          onClick={(e) => {
                            e.preventDefault();
                            if (cart) setCart([...cart, product]);
                            else setCart([product]);
                            addToCartLocal(product);
                            console.log(cart);
                          }}
                        >
                          <FiShoppingCart />
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
            <div
              className={`mb-8 mt-16 flex justify-center gap-4 text-primary-500 ${numPages === 1 ? "hidden" : ""}`}
            >
              <button
                onClick={() => {
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className="flex items-center gap-1 hover:text-primary-200"
              >
                <IoChevronBackOutline className="text-2xl" />
                Prev
              </button>
              {numPages &&
                Array.from({ length: numPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`rounded-sm border-2 px-6 py-1 ${page === currentPage ? "border-primary-200 text-white" : "border-primary-500 hover:bg-primary-800"}`}
                    >
                      {page}
                    </button>
                  ),
                )}
              <button
                onClick={() => {
                  if (currentPage < numPages) handlePageChange(currentPage + 1);
                }}
                className="flex items-center gap-1 hover:text-primary-200"
              >
                Next
                <IoChevronForwardOutline className="text-2xl" />
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className={`fixed bottom-12 right-12 cursor-pointer rounded-full border-2 border-slate-100 bg-gray-900 p-2 text-slate-100 transition-all duration-300 hover:bottom-14 hover:scale-110 ${!cart ? "hidden" : ""}`}
        onClick={handleCartClick}
      >
        <CiShoppingCart className="text-3xl" />
        <p className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 font-semibold text-slate-900">
          {cart ? cart.length : 0}
        </p>
      </div>
    </div>
  );
}

export default ProductsList;
