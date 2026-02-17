"use client";

import { useRouter } from "next/navigation";

const Dropdown = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
      <h3 className="text-2xl font-semibold text-gray-700">
        Ready to begin your test?
      </h3>

      <button
        onClick={() => router.push("/quiz")}
        className="px-8 py-4 rounded-xl bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 transition duration-300 shadow-md"
      >
        Start Your Test
      </button>
    </div>
  );
};

export default Dropdown;
