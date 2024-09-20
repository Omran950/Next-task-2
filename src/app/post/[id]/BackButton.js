"use client";

import React from "react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <button
      className="m-6 px-4 py-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300"
      onClick={handleGoBack}
    >
      Back
    </button>
  );
}

export default BackButton;
