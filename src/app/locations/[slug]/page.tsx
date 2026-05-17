import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Truck, Check, ArrowRight, Landmark, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { LOCATIONS, LOCATION_BY_SLUG } from "@/content/locations";
import { SERVICES_BY_CATEGORY } from "@/content/services";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/sections/CTABand";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQ } from "@/components/sections/FAQ";
import { FAQS } from "@/content/faqs";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = LOCATION_BY_SLUG[slug];
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/locations/${l.slug}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATION_BY_SLUG[slug];
  if (!loc) notFound();

  const otherLocations = LOCATIONS.filter((x) => x.slug !== loc.slug && x.state === loc.state).slice(0, 9);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.name} — ${loc.fullName}`,
    description: loc.metaDescription,
    telephone: SITE.phoneRaw,
    areaServed: { "@type": loc.type === "city" ? "City" : "Place", name: loc.name, containedInPlace: loc.state === "KY" ? "Kentucky" : "Indiana" },
    address: { "@type": "PostalAddress", addressLocality: loc.name, addressRegion: loc.state, addressCountry: "US" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.reviews.rating, reviewCount: SITE.reviews.count },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        eyebrow={loc.type === "city" ? `${loc.county} County • ${loc.state}` : `Louisville Neighborhood`}
        title={`Junk Removal in ${loc.fullName}`}
        subtitle={`Fast, friendly, locally owned. Same-day pickup, upfront pricing, and a Louisville crew that knows ${loc.name}.`}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/locations", label: "Service Areas" },
          { label: loc.name },
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6 lg:py-16">
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-ink/85">{loc.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-line bg-white p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <Landmark className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Landmarks nearby</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
                {loc.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-1.5">
                    <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-brand-700" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-line bg-white p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <Truck className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Roads & highways</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
                {loc.roads.map((r) => (
                  <li key={r} className="flex items-start gap-1.5">
                    <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-brand-700" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {loc.neighborhoods && loc.neighborhoods.length > 0 && (
              <div className="rounded-2xl border border-stone-line bg-white p-5 sm:col-span-2">
                <div className="flex items-center gap-2 text-brand-700">
                  <Building2 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Neighborhoods & subdivisions</span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-ink/85">
                  {loc.neighborhoods.map((n) => (
                    <li key={n} className="rounded-full border border-stone-line bg-stone-warm px-3 py-1">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-extrabold text-ink">What we haul in {loc.name}</h2>
            <p className="mt-2 text-ink/70">Every service we offer runs to {loc.fullName} — usually same-day or next-day depending on the schedule.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_BY_CATEGORY.flatMap((cat) => cat.services.slice(0, 4)).slice(0, 9).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-start gap-2 rounded-xl border border-stone-line bg-white p-3 text-sm text-ink/85 hover:border-brand-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                  <span className="font-semibold group-hover:text-brand-700">{s.title}</span>
                </Link>
              ))}
            </div>
            <Link href="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl bg-ink p-6 text-white shadow-md">
              <div className="font-display text-2xl font-extrabold">Same-day pickup in {loc.name}</div>
              <p className="mt-2 text-sm text-white/75">Tell us what you've got. Free, no-obligation estimate.</p>
              <Button asChild className="mt-4 w-full">
                <Link href="/get-a-quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="amber" className="mt-2 w-full">
                <a href={SITE.phoneHref} className="gap-2">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-stone-line bg-white p-6">
              <h3 className="font-display text-base font-extrabold text-ink">Why {loc.name} chooses us</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/85">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-700" /> 5.0★ from 115+ Google reviews</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-700" /> Same-day & 7 days a week</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-700" /> Upfront volume pricing</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-700" /> Licensed and insured</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-700" /> Donate & recycle first</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-stone-line bg-stone-warm">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
          <h2 className="font-display text-2xl font-extrabold text-ink">More {loc.state === "KY" ? "Kentucky" : "Indiana"} areas we serve</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {otherLocations.map((o) => (
              <Link key={o.slug} href={`/locations/${o.slug}`} className="group flex items-center gap-2 rounded-xl border border-stone-line bg-white p-3 text-sm text-ink/85 hover:border-brand-200">
                <MapPin className="h-3.5 w-3.5 text-brand-700" />
                <span className="font-semibold group-hover:text-brand-700">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />
      <FAQ items={FAQS.slice(0, 6)} title={`Common questions in ${loc.name}`} />
      <CTABand title={`Need junk gone in ${loc.name}?`} />
    </>
  );
}
