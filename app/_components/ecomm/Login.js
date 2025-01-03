"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyesFill } from "react-icons/pi";

import { login, isLoggedIn } from "@/app/_lib/ecomm-services";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
    try {
      const response = await login(username, password);
      toast.success(`Welcome Back ${response.firstName}!`, {
        duration: 5000,
      });
      router.push("/ecomm/products");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full rounded-lg border border-primary-800 bg-primary-900 px-10 py-8 md:w-[60%] lg:w-[30%]">
      <h2 className="border-b-2 border-primary-300 pb-2 text-2xl font-bold">
        Login
      </h2>
      {error && <p className="error-message">{error}</p>}

      <p
        onClick={() => router.push("/ecomm/products")}
        className="mb-0 mt-4 cursor-pointer text-right text-sm font-semibold text-primary-200"
      >
        Continue without account
      </p>

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
        <span className="cursor-pointer border-b border-primary-200 px-1 text-sm font-semibold text-primary-200">
          Sign up
        </span>
      </p>
    </div>
  );
}
