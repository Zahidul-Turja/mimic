"use client";

import { useEffect, useState } from "react";
import Spinner from "@/app/_components/Spinner";
import Image from "next/image";
import Link from "next/link";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiEyes } from "react-icons/pi";

import Comments from "./Comments";
import { getUserById, getCommentsByPostId } from "@/app/_lib/social-services";

function PostCard({ post }) {
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        setLoading(true);
        const response = await getUserById(post.userId);
        const comments = await getCommentsByPostId(post.id);
        setComments(comments.comments);
        setAuthor(response);
      } catch (error) {
        console.error("Error fetching author:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [post.userId, post.id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mb-12">
      <div className="mb-4 w-full rounded-lg bg-primary-900 px-8 py-4">
        <div className="flex w-full items-start gap-3">
          <Link
            href={`/social/user/${author?.id}`}
            className="relative w-[20%]"
          >
            <Image
              src={author.image}
              alt={author?.firstName}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </Link>
          <div className="text-left">
            <Link href={`/social/user/${author?.id}`}>
              <h1 className="text-base font-bold">
                {author?.firstName} {author?.lastName}
              </h1>
            </Link>
            <h4 className="text-xs font-light text-primary-200/50">
              {author?.company.title}
            </h4>

            <div>
              <h2>{post.title}</h2>
              <p className="text-sm font-light">{post.body}</p>
            </div>

            <div className="my-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-full bg-primary-200 px-2 py-1 text-xs font-light text-primary-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 border-t border-primary-200/30 py-2 text-center">
              <div className="flex items-center justify-around">
                <div className="items-cente flex gap-2 text-sm md:text-base">
                  <BiLike />
                  <span>{post.reactions.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{post.reactions.dislikes}</span>
                  <BiDislike />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 border-x border-gray-200/30 text-sm md:text-base">
                {/* <FaRegComment /> */}
                <span>Comments ({comments.length || 0})</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                {/* <PiEyes /> */}
                <span>Views ({post.views})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {comments.length > 0 && <Comments comments={comments} />}
    </div>
  );
}

export default PostCard;
