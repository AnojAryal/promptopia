"use client";

import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleProfileClick = () => {
    router.push(
      `/profile/${post.creator._id}?name=${encodeURIComponent(
        post.creator.username
      )}`
    );
  };

  return (
    <div className="prompt_card border border-gray-200 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start gap-5">
        {/* Clickable User Profile Section */}
        <div
          className="flex-1 flex items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          {post.creator.image && (
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          )}
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>

      {post.tag && (
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          {post.tag}
        </p>
      )}

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
