"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Spinner from "../Spinner";
import BoundingBox from "../BoundingBox";
import {
  getCurrentUser,
  getUserById,
  logout,
} from "@/app/_lib/social-services";

function UserProfile({ isCurrentUser }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        if (isCurrentUser) {
          const response = await getCurrentUser();
          setUser(response);
        } else {
          const response = await getUserById(params.userId);
          setUser(response);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [isCurrentUser, params.userId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BoundingBox>
      <div className="mx-auto grid grid-cols-[15%_80%] items-start justify-between rounded-xl bg-primary-900 px-4 py-6 shadow-lg md:w-[50%] md:grid-cols-[17%_84%] md:px-10 md:py-8">
        <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-24 md:w-24">
          <Image
            src={user.image}
            alt={user.name}
            width={100}
            height={100}
            loading="lazy"
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-2 text-left">
          <h1 className="text-lg font-bold">
            {user.firstName} {user.lastName}
            {isCurrentUser && (
              <FaCheckCircle className="mx-1 inline -translate-y-2 text-xs text-blue-400" />
            )}
          </h1>
          <h3 className="-translate-y-2 text-sm font-light text-gray-400">
            @{user.username}
          </h3>

          <p className="text-justify text-sm font-light md:text-left">
            Hey, I&apos;m {user.firstName} {user.lastName}.{" "}
            {user.role === "admin" && `I'm an admin at Mimic Shop.`} I am a{" "}
            {user.age} {user.gender} and I live in {user.address.address},{" "}
            {user.address.city}, {user.address.state}, {user.address.country}. I
            went to {user.university} and currently working as a{" "}
            {user.company.title} at {user.company.name}.
          </p>

          <h3 className="mt-4 text-sm font-bold">Contact Information</h3>
          <p className="text-sm font-light">
            Email: {user.email} <br />
            Phone: {user.phone}
          </p>

          <h3 className="mt-4 text-sm font-bold">Address</h3>
          <p className="text-sm font-light">
            {user.address.address}, {user.address.city}, {user.address.state},{" "}
            {user.address.country}
          </p>

          <h3 className="mt-4 text-sm font-bold">Education</h3>
          <p className="text-sm font-light">{user.university}</p>

          <h3 className="mt-4 text-sm font-bold">Company</h3>
          <p className="text-sm font-light">
            {user.company.title} at {user.company.name}
          </p>
        </div>
      </div>
      <button
        className="my-8 rounded-lg bg-primary-200 px-8 py-3 font-bold text-primary-800"
        onClick={() => {
          logout();
          router.push("/social");
        }}
      >
        Log out
      </button>
    </BoundingBox>
  );
}

export default UserProfile;
