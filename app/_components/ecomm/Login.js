"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RxEyeClosed, RxCross2 } from "react-icons/rx";
import { PiEyesFill } from "react-icons/pi";

import { login, isLoggedIn, getAllUsers } from "@/app/_lib/ecomm-services";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isLoggedIn();
      if (loggedIn) {
        router.push("/ecomm/products");
      }
    };
    checkLoginStatus();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(username, password);
      toast.success(`Welcome Back ${response.firstName}!`, {
        duration: 5000,
      });
      router.push("/ecomm/products");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.", {
        duration: 3000,
      });
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  async function handleSignUpButton() {
    try {
      const res = await getAllUsers();
      setAllUsers(res.users);
      setShowUsers(true);
      console.log(res.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  return (
    <>
      <div className="mx-auto w-full rounded-lg border border-primary-800 bg-primary-900 px-10 py-8 md:w-[60%] lg:w-[30%]">
        <h2 className="border-b-2 border-primary-300 pb-2 text-2xl font-bold">
          Login
        </h2>

        <a
          onClick={() => router.push("/ecomm/products")}
          className="mb-0 ml-auto mt-4 block w-fit cursor-pointer border-b border-primary-200 text-sm font-light text-primary-200"
        >
          Continue without any account
        </a>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-left">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 font-semibold text-gray-900 outline-none"
            />
          </div>
          <div className="my-4 flex flex-col">
            <label htmlFor="password" className="text-left">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 font-semibold text-gray-900 outline-none"
              />
              <button
                type="button"
                className="absolute bottom-0 right-1 top-0 px-3 py-2 text-xl text-primary-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RxEyeClosed /> : <PiEyesFill />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-lg border-b border-gray-400 bg-primary-800 px-4 py-2 font-bold text-white shadow-sm transition-all duration-200 hover:translate-y-[-2px] hover:text-primary-100 disabled:bg-gray-400 disabled:text-gray-600"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="my-4 flex justify-between font-light">
          Don&apos;t have an account?{" "}
          <span
            className="cursor-pointer border-b border-primary-200 px-1 text-sm font-semibold text-primary-200"
            onClick={handleSignUpButton}
          >
            Sign up
          </span>
        </p>
      </div>
      <div
        className={`absolute right-0 top-0 h-screen w-screen bg-black/50 ${showUsers ? "block" : "hidden"}`}
        onClick={() => setShowUsers(false)}
      >
        <div
          className="absolute right-14 top-24 cursor-pointer rounded-full bg-primary-100 p-2 text-2xl text-primary-900 transition-opacity duration-200 hover:opacity-55"
          onClick={() => setShowUsers(false)}
        >
          <RxCross2 />
        </div>

        <div
          className="mx-auto mt-28 h-[70%] w-[25%] overflow-y-scroll rounded-md bg-primary-100 px-8 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-2 py-4 text-base font-bold text-primary-900">
            <h3>Username</h3>
            <h3>Password</h3>
          </div>
          <ul>
            {allUsers && allUsers.length > 0 ? (
              allUsers.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between border-t-2 border-primary-900 px-2 py-4 text-sm font-semibold text-primary-900"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold">{user.username}</span>
                    <span className="text-xs font-normal">
                      {user.company.title}
                    </span>
                  </div>
                  <span className="text-sm font-semibold">{user.password}</span>
                </li>
              ))
            ) : (
              <li className="flex items-center justify-between border-t-2 border-primary-900 px-8 py-4 text-sm font-semibold text-primary-900">
                <span>No users found.</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
