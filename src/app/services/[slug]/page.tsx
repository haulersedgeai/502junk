import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SERVICES, SERVICE_BY_SLUG, SERVICE_CATEGORIES } from "@/content/services";
import { CTABand } from "@/components/sections/CTABand";
import { PricingTable } from "@/components/sections/PricingTable";
import { FAQ } from "@/components/sections/FAQ";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  const category = SERVICE_CATEGORIES.find((c) => c.slug === service.category)!;
  const related = (service.relatedSlugs ?? []).map((s) => SERVICE_BY_SLUG[s]).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phoneRaw },
    areaServed: { "@type": "City", name: "Louisville", containedInPlace: "Kentucky" },
    url: `${SITE.url}/services/${service.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        eyebrow={category.name}
        title={service.h1}
        subtitle={service.shortBlurb}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: `/services/${category.slug}`, label: category.name },
          ...(service.slug !== category.slug ? [{ label: service.title }] : []),
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6 lg:py-16">
        <div className="lg:col-span-8">
          <div className="prose prose-stone max-w-none">
            {service.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/85">{p}</p>
            ))}
          </div>

          {service.whatsIncluded && (
            <div className="mt-10 rounded-2xl border border-stone-line bg-white p-6">
              <h2 className="font-display text-xl font-extrabold text-ink">What's included</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.items && service.items.length > 0 && (
            <div className="mt-6 rounded-2xl border border-stone-line bg-white p-6">
              <h2 className="font-display text-xl font-extrabold text-ink">Common items we haul</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.process && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-extrabold text-ink">How it works</h2>
              <ol className="mt-5 space-y-3">
                {service.process.map((p, i) => (
                  <li key={i} className="relative rounded-2xl border border-stone-line bg-white p-5 pl-14">
                    <span className="absolute left-4 top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/75">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl bg-ink p-6 text-white shadow-md">
              <div className="font-display text-2xl font-extrabold">Get a quote on your {service.title.toLowerCase()}</div>
              <p className="mt-2 text-sm text-white/75">Same-day pickup available. Free, no-obligation estimate.</p>
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
              <h3 className="font-display text-base font-extrabold text-ink">From the {SITE.reviews.rating.toFixed(1)}★ team</h3>
              <p className="mt-2 text-sm text-ink/70">115+ Louisville and Kentuckiana customers, all telling the same story: we show up, we work hard, and we leave the place clean.</p>
              <Link href="/reviews" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">Read reviews →</Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-stone-line bg-white p-6">
                <h3 className="font-display text-base font-extrabold text-ink">Related services</h3>
                <ul className="mt-3 space-y-1">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/services/${r.slug}`} className="block rounded-md px-1.5 py-1 text-sm text-ink/85 hover:bg-stone-warm hover:text-brand-700">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </section>

      {service.slug === category.slug && (
        <section className="border-t border-stone-line bg-stone-warm">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
            <h2 className="font-display text-3xl font-extrabold text-ink">All {category.name.toLowerCase()} services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.filter((s) => s.category === category.slug && s.slug !== category.slug).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-stone-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="font-display text-lg font-extrabold text-ink group-hover:text-brand-700">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/70">{s.shortBlurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faq && service.faq.length > 0 && <FAQ items={service.faq} />}

      {service.slug === category.slug && <PricingTable />}

      {service.slug === category.slug && <ReviewsSection limit={3} />}

      <CTABand
        title={`Ready to book your ${service.title.toLowerCase()}?`}
        body="We answer 7 days a week. Call, text, or send photos through the quote form."
      />
    </>
  );
}
