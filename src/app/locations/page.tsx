import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { KY_CITIES, IN_CITIES, LOUISVILLE_NEIGHBORHOODS } from "@/content/locations";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Service Areas — Louisville Metro & Southern Indiana",
  description:
    "502 Junk Dept. serves the full Louisville metro and Kentuckiana. Find your city or neighborhood — we cover from downtown to Oldham, Bullitt, Clark, and Floyd counties.",
};

function Block({ title, items }: { title: string; items: { slug: string; name: string; county: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold text-ink">{title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((l) => (
          <Link
            key={l.slug}
            href={`/locations/${l.slug}`}
            className="group flex items-start gap-3 rounded-2xl border border-stone-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-700">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <div className="font-display text-base font-extrabold text-ink group-hover:text-brand-700">{l.name}</div>
              <div className="text-xs text-ink/55">{l.county} County</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function LocationsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Louisville Metro & Southern Indiana — covered."
        subtitle="From a single-item furniture pickup in St. Matthews to a full estate cleanout in New Albany. Find your city or neighborhood below."
        crumbs={[{ href: "/", label: "Home" }, { label: "Service Areas" }]}
      />

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-16 lg:px-6 lg:py-20">
        <Block title="Kentucky cities" items={KY_CITIES} />
        <Block title="Louisville neighborhoods" items={LOUISVILLE_NEIGHBORHOODS} />
        <Block title="Southern Indiana cities" items={IN_CITIES} />
      </section>

      <CTABand />
    </>
  );
}
