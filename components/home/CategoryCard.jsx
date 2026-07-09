import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  const { categoryName, categoryImg } = category;
  return (
    <Link
      href="/"
      transitionTypes={["fade", "slide"]}
      className="group relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md block"
    >
      <Image
        src={categoryImg}
        alt={categoryName}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="font-serif text-xl font-bold">{categoryName}</h3>
      </div>
    </Link>
  );
}
