import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Reviews — 502 Junk Dept. Louisville KY",
  description: `${SITE.reviews.rating.toFixed(1)} stars from ${SITE.reviews.count}+ ${SITE.reviews.source} reviews. Read what Louisville and Kentuckiana customers say about 502 Junk Dept.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${SITE.reviews.rating.toFixed(1)} ★ from ${SITE.reviews.count}+ reviews`}
        title="Louisville keeps calling us back."
        subtitle="The big haulers spend a fortune on TV. We just show up, work hard, and let our customers do the talking."
        crumbs={[{ href: "/", label: "Home" }, { label: "Reviews" }]}
        align="center"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-stone-line bg-white p-6 shadow-sm">
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

        <div className="mt-12 rounded-2xl border border-stone-line bg-white p-8 text-center shadow-sm">
          <h3 className="font-display text-2xl font-extrabold text-ink">We earned them one truck-load at a time.</h3>
          <p className="mx-auto mt-2 max-w-2xl text-ink/70">
            If we did right by you, a Google review is the best tip we could ever ask for.
          </p>
          <a
            href={SITE.reviews.writeReviewUrl}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Leave a Google review
          </a>
        </div>
      </section>

      <CTABand />
    </>
  );
}
