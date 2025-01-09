"use client";

import { useEffect, useState } from "react";

import Spinner from "@/app/_components/Spinner";
import { getAllPosts } from "@/app/_lib/social-services";
import PostCard from "./PostCard";

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await getAllPosts();
        console.log(response.posts);
        setPosts(response.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto lg:w-[40%]">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default FeedPage;
