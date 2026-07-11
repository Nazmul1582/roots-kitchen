import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import { MoveRight } from "lucide-react";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all flex flex-col group">
      <div className="relative h-60 w-full overflow-hidden bg-stone-100">
        <Image
          src={recipe.foodImg}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-102 transition duration-500"
        />
      </div>
      <div className="p-6 flex flex-col grow justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
            {recipe.category}
          </span>
          <Link href={`/recipes/${recipe.id}`}>
            <h2 className="font-serif text-xl font-bold text-orange-950 leading-snug hover:underline">
              {recipe.title}
            </h2>
          </Link>
          <h3 className="text-xl font-bold text-stone-800">
            {recipe.price} tk.
          </h3>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold">
          <Button item={recipe} />
          <Link
            href={`/recipes/${recipe.id}`}
            className="text-orange-800 hover:underline flex items-center gap-0.5"
          >
            <span>View Method</span>
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
