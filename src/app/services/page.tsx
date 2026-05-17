import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SERVICES_BY_CATEGORY } from "@/content/services";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "All Services — Junk Removal, Cleanouts, Demolition in Louisville",
  description: "Every junk removal, cleanout, and demolition service 502 Junk Dept. offers across Louisville, KY and Southern Indiana. Volume pricing, same-day available.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Junk removal, cleanouts, and demolition — under one roof."
        subtitle="One crew, one truck, one phone call. From a single mattress to a full property cleanout, we cover the full spread."
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="space-y-12">
          {SERVICES_BY_CATEGORY.map((cat) => (
            <div key={cat.slug}>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl font-extrabold text-ink">{cat.name}</h2>
                  <p className="mt-2 max-w-2xl text-ink/70">{cat.blurb}</p>
                </div>
                <Link href={`/services/${cat.slug}`} className="hidden text-sm font-semibold text-brand-700 hover:underline sm:inline">
                  See {cat.name.toLowerCase()} hub →
                </Link>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group rounded-2xl border border-stone-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-extrabold text-ink group-hover:text-brand-700">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/70">{s.shortBlurb}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
