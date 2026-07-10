import ReviewsContent from "@/components/reviews/ReviewsContent";
import ReviewsSkeleton from "@/components/skeleton/ReviewsSkeleton";
import { Suspense } from "react";

export default function ReviewsPage() {
  return (
    <section>
      <div className="bg-orange-50/40 py-12 border-b border-orange-100/40 text-center space-y-3">
        <h1 className="font-serif text-4xl text-orange-950">
          Community Guestbook
        </h1>
        <p className="text-stone-500 max-w-md mx-auto text-xs sm:text-sm">
          Real stories and culinary feedback shared directly by our global
          hearth collective table.
        </p>
      </div>
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <Suspense fallback={<ReviewsSkeleton />}>
          <ReviewsContent />
        </Suspense>
      </div>
    </section>
  );
}
