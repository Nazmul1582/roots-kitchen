"use client";

import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function AddFeedback() {
  const { state, formAction } = useActionState(feedbackAction);
  const feedbackAction = (formData) => {
    const message = formData.get("message");
  };
  return (
    <div
      className={`font-sans min-h-screen bg-[#FDFBF7] text-stone-800 antialiased pb-24`}
    >
      {/* Back Navigation Bar */}
      <nav className="max-w-xl mx-auto px-4 pt-12">
        <Link
          href="/feedback"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-orange-800 transition"
        >
          <ArrowLeft size={14} /> Back to Feedback
        </Link>
      </nav>

      {/* Form Card Layout Container */}
      <main className="max-w-xl mx-auto px-4 pt-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm space-y-6">
          <div className="space-y-1.5">
            <h1 className="font-serif text-2xl font-bold text-orange-950 flex items-center gap-2">
              Share Your Experience{" "}
              <Sparkles size={20} className="text-orange-700" />
            </h1>
            <p className="text-stone-500 text-xs sm:text-sm">
              Your stories help shape our hearth fire collection. Drop your
              thoughts below.
            </p>
          </div>

          <form action={feedbackAction} className="space-y-5">
            {/* Message Area Canvas */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                Your Message
              </label>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="How was the grill chicken? Tell us about the balance of spices, food, or overall environment..."
                className="w-full text-sm bg-stone-50/60 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-700/60 transition resize-none leading-relaxed text-stone-700"
              />
            </div>

            {/* Conditional Error Display Banner */}
            {errorMessage && (
              <p className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl">
                ⚠️ {errorMessage}
              </p>
            )}

            {/* Action Trigger Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-orange-800 hover:bg-orange-900 disabled:bg-stone-200 disabled:text-stone-400 text-white py-3.5 rounded-xl font-serif text-base font-medium shadow-md hover:shadow-lg transition-all active:scale-[0.99] md:cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Recording Entry...
                </>
              ) : (
                "Submit Feedback"
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
