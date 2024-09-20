"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Card({ title, body, id, image }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className="border bg-white p-6 flex flex-col justify-between shadow-lg rounded-lg hover:shadow-2xl text-center">
      <Link href={`/post/${id}`}>
        <div className="cursor-pointer">
          <Image
            src={image}
            width={500}
            height={300}
            alt="Post Image"
            className="rounded-lg object-cover m-auto"
          />
          <h4 className="text-xl font-semibold mt-4 text-gray-800 hover:text-rose-600 transition-colors duration-300">
            {title}
          </h4>
          <hr className="my-4 border-gray-200" />
          <p className="text-gray-600">{body}</p>
        </div>
      </Link>
      <button
        onClick={handleLike}
        className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors duration-300 ${
          liked
            ? "bg-rose-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-rose-500 hover:text-white"
        }`}
      >
        {liked ? `Liked (${likeCount})` : "Like ♥️"}
      </button>
    </div>
  );
}

export default Card;
