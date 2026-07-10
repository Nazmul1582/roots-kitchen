import Image from "next/image";

export default function ReviewCard({ item }) {
  const { photo, user, email, rating, review, date, likes } = item;

  // Helper function to format ISO Dates beautifully
  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-orange-100 bg-stone-100 flex-shrink-0">
            <Image
              src={photo}
              alt={user}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-orange-950 leading-tight">
              {user}
            </h3>
            <span className="text-xs text-stone-400 font-mono">{email}</span>
          </div>
        </div>

        <div className="flex items-center gap-0.5 bg-orange-50 px-2 py-1 rounded-lg text-orange-700 text-xs font-bold">
          <span>★</span>
          <span>{rating}.0</span>
        </div>
      </div>

      <div className="space-y-1 flex-grow">
        <p className="text-stone-600 text-sm leading-relaxed tracking-wide font-light">
          {review}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs pt-4 border-t border-stone-100 text-stone-400">
        <span>🗓️ {formatDate(date)}</span>

        <button className="flex items-center gap-1.5 text-stone-500 hover:text-orange-800 transition bg-stone-50 hover:bg-orange-50 px-3 py-1.5 rounded-full font-medium">
          <span>❤️</span>
          <span className="font-mono text-stone-600">{likes?.length}</span>
        </button>
      </div>
    </article>
  );
}
