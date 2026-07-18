"use client";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

export default function FeedbackCard({ feedback }) {
  const { _id, message } = feedback;
  const deleteFeedback = async () => {
    const res = await fetch(`/api/feedback/${_id}`, {
      method: "DELETE",
    });

    console.log(res.ok);

    if (!res.ok) {
      alert("Something went wrong");
    }

    const result = await res.json();

    if (result.data.deletedCount >= 1) {
      alert("Deleted successfully");
      window.location.reload();
    }
  };
  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6">
      <h3 className="text-stone-600 text-sm leading-relaxed tracking-wide font-light">
        <span className="text-lg font-bold">&quot;</span>
        {message}
        <span className="text-lg font-bold">&quot;</span>
      </h3>
      <div className="flex items-center justify-end gap-5 text-xs font-semibold">
        <button
          className="text-blue-500 transition md:cursor-pointer"
          aria-label="Remove item"
        >
          <Edit size={18} />
        </button>
        <button
          onClick={deleteFeedback}
          className="text-red-500 transition md:cursor-pointer"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
