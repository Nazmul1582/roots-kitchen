"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Search({ customClass }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (formData) => {
    const search = formData.get("search");

    if (search) router.push(`${pathname}?search=${search}`);
  };

  return (
    <form
      action={handleSubmit}
      className={`max-w-md mx-auto ${customClass} mt-7 flex gap-2 p-2 bg-white rounded-full border border-stone-200 shadow-sm focus-within:border-orange-700 transition-all`}
    >
      <input
        type="text"
        name="search"
        placeholder="Search by ingredient (e.g., clay-pot)..."
        className="w-full pl-4 bg-transparent outline-none text-stone-800 text-sm"
      />
      <button className="bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-800 transition md:cursor-pointer">
        Search
      </button>
    </form>
  );
}
