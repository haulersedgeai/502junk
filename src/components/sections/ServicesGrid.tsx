import Link from "next/link";
import { ArrowRight, Sofa, Refrigerator, Bed, Tv, Trees, Hammer, Building2, Trash2, Boxes } from "lucide-react";
import { SERVICES_BY_CATEGORY } from "@/content/services";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "junk-removal": Trash2,
  cleanouts: Boxes,
  demolition: Hammer,
};

const SUB_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "furniture-removal": Sofa,
  "appliance-removal": Refrigerator,
  "mattress-removal": Bed,
  "tv-electronics-removal": Tv,
  "yard-waste-removal": Trees,
  "commercial-junk-removal": Building2,
};

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            What We Haul
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">Three categories. One truck. Zero hassle.</h2>
        </div>
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
          See all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {SERVICES_BY_CATEGORY.map((cat) => {
          const Icon = ICONS[cat.slug];
          return (
            <div key={cat.slug} className="group flex flex-col rounded-2xl border border-stone-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-extrabold text-ink">{cat.name}</h3>
              </div>
              <p className="mt-3 text-sm text-ink/70">{cat.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {cat.services.slice(0, 6).map((s) => {
                  const SI = SUB_ICONS[s.slug];
                  return (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-2 rounded-md px-1 py-1 text-sm text-ink/80 hover:bg-stone-warm hover:text-ink">
                        {SI ? <SI className="h-3.5 w-3.5 text-brand-700" /> : <ArrowRight className="h-3.5 w-3.5 text-brand-700" />}
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/services/${cat.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                View {cat.name.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
