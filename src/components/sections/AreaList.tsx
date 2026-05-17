import Link from "next/link";
import { MapPin } from "lucide-react";
import { KY_CITIES, IN_CITIES, LOUISVILLE_NEIGHBORHOODS } from "@/content/locations";

export function AreaList({ compact = false }: { compact?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Areas We Serve
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">Louisville Metro & Kentuckiana</h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">
          From downtown Louisville and the Highlands to Jeffersonville, New Albany, and the farthest reaches of Oldham and Bullitt counties — if you're in the metro, we're in your driveway.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-stone-line bg-white p-6">
          <h3 className="font-display text-lg font-extrabold text-ink">Kentucky Cities</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {KY_CITIES.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="flex items-center gap-1.5 text-sm text-ink/80 hover:text-brand-700">
                  <MapPin className="h-3 w-3 text-brand-700" /> {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-line bg-white p-6">
          <h3 className="font-display text-lg font-extrabold text-ink">Louisville Neighborhoods</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {LOUISVILLE_NEIGHBORHOODS.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="flex items-center gap-1.5 text-sm text-ink/80 hover:text-brand-700">
                  <MapPin className="h-3 w-3 text-brand-700" /> {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-line bg-white p-6">
          <h3 className="font-display text-lg font-extrabold text-ink">Southern Indiana</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {IN_CITIES.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="flex items-center gap-1.5 text-sm text-ink/80 hover:text-brand-700">
                  <MapPin className="h-3 w-3 text-brand-700" /> {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
