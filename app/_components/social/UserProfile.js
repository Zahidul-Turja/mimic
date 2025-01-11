"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Spinner from "../Spinner";
import BoundingBox from "../BoundingBox";
import { getCurrentUser, getUserById } from "@/app/_lib/social-services";

function UserProfile({ isCurrentUser }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

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

  console.log(user);

  return (
    <BoundingBox>
      <div className="mx-auto grid w-[50%] grid-cols-[17%_84%] items-start justify-between rounded-xl bg-primary-900 px-10 py-4 shadow-lg">
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
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

          <p className="text-sm font-light">
            Hey, I&apos;m {user.firstName} {user.lastName}.{" "}
            {user.role === "admin" && `I'm an admin at Mimic Shop.`} I am a{" "}
            {user.age} {user.gender} and I live in {user.address.address}.
          </p>
        </div>
      </div>
    </BoundingBox>
  );
}

export default UserProfile;
