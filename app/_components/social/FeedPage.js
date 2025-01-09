"use client";

import { useEffect, useState } from "react";

import Spinner from "@/app/_components/Spinner";
import { getPosts } from "@/app/_lib/social-services";
import PostCard from "./PostCard";

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await getPosts();
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

  async function handleLoadMore() {
    try {
      const response = await getPosts(10, page * 10);
      setPosts([...posts, ...response.posts]);
      setPage((cur) => cur + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto lg:w-[40%]">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <button
        className="mt-4 w-full rounded-md border-2 border-primary-200 py-4"
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </div>
  );
}

export default FeedPage;
