import getReviews from "@/lib/getReviews";
import ReviewCard from "./ReviewCard";

export default async function ReviewsContent() {
  const { reviews } = await getReviews();
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((item) => (
        <ReviewCard key={item.id} item={item} />
      ))}
    </div>
  );
}
