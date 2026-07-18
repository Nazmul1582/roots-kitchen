import FeedbackCard from "@/components/FeedbackCard";
import Link from "next/link";

const getFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

export default async function Feedback() {
  const data = await getFeedbacks();
  const feedback = data.data;

  return (
    <section>
      <div className="bg-orange-50/40 py-12 border-b border-orange-100/40 text-center space-y-3">
        <h1 className="font-serif text-4xl text-orange-950">Feedback</h1>
        <p className="text-stone-500 max-w-md mx-auto text-xs sm:text-sm">
          Real stories and culinary feedback shared directly by our global
          hearth collective table.
        </p>
        <Link
          href="/feedback/add"
          className="bg-orange-800 text-white px-5 py-2 rounded-full hover:bg-orange-900 transition text-xs sm:text-sm font-medium md:cursor-pointer active:scale-95 shadow-sm"
        >
          Add feedback
        </Link>
      </div>
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {feedback.map((fb) => (
            <FeedbackCard key={fb._id} message={fb.message} />
          ))}
        </div>
      </div>
    </section>
  );
}
