"use client";

import React from "react";
import { useRouter } from "next/navigation";

function NavButtons({ id, length }) {
  const router = useRouter();

  function handleNextPost(id) {
    if (id < length) {
      router.push(`/post/${id + 1}`);
    }
  }

  function handlePrevPost(id) {
    if (id > 1) {
      router.push(`/post/${id - 1}`);
    }
  }

  return (
    <div className="flex justify-center gap-6 my-8">
      <button
        onClick={() => handlePrevPost(id)}
        className="rounded-full bg-indigo-500 px-6 py-2 text-white font-semibold hover:bg-indigo-600 transition-all duration-300"
      >
        Previous
      </button>
      <button
        onClick={() => handleNextPost(id)}
        className="rounded-full bg-indigo-500 px-6 py-2 text-white font-semibold hover:bg-indigo-600 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
}

export default NavButtons;
