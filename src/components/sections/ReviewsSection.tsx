import { Star } from "lucide-react";
import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/site";

export function ReviewsSection({ limit = 6 }: { limit?: number }) {
  const items = REVIEWS.slice(0, limit);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            What customers say
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {SITE.reviews.rating.toFixed(1)} stars from {SITE.reviews.count}+ Louisville neighbors
          </h2>
        </div>
        <a
          href={SITE.reviews.writeReviewUrl}
          target="_blank"
          rel="noopener"
          className="text-sm font-semibold text-brand-700 hover:underline"
        >
          Leave us a Google review →
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <div key={r.name} className="flex flex-col rounded-2xl border border-stone-line bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">"{r.body}"</p>
            <div className="mt-4 text-sm font-bold text-ink">{r.name}</div>
            <div className="text-xs text-ink/50">via {r.source}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
