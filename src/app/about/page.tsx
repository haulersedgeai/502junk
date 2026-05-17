import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { WhyUs } from "@/components/sections/WhyUs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Locally Owned Junk Removal in Louisville, KY",
  description:
    "Meet the team behind 502 Junk Dept. Locally owned, Louisville-based, and built on showing up. Junk removal, cleanouts, and demolition done right.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About 502 Junk Dept."
        title="A Louisville crew that actually shows up."
        subtitle="We're a small, locally owned hauling and cleanout company built on a simple promise: be on time, work hard, and leave the place cleaner than we found it."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-12 lg:px-6 lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-extrabold text-ink">Built right here in the 502.</h2>
          <div className="mt-5 space-y-4 text-ink/80 leading-relaxed">
            <p>
              502 Junk Dept. was founded by {SITE.ownerFullName} for the simple reason that Louisville needed a hauling crew you could actually count on. The big national franchises rotate crews every six months. The handyman-with-a-trailer shows up two days late, charges by guess, and leaves the half-empty cans in the alley.
            </p>
            <p>
              We split the difference. We're professional — uniforms, written quotes, real insurance, full-size dump truck — but we're also <em>local</em>. {SITE.ownerFirstName} answers the phone. The same crew that quotes the job is the crew that shows up. We live here, we work here, and our reputation is the only thing we've got going.
            </p>
            <p>
              That's how a brand-new company became Louisville's <strong>5.0-star, 115-review</strong> junk removal crew in under two years. We show up, we work hard, and we treat every job — a single mattress, a full estate, a hoarder house, a deck demo — like it's the only one on the calendar.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-line bg-white p-5 text-center">
              <div className="font-display text-3xl font-extrabold text-brand-700">5.0★</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink/60">Google rating</div>
            </div>
            <div className="rounded-2xl border border-stone-line bg-white p-5 text-center">
              <div className="font-display text-3xl font-extrabold text-brand-700">115+</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink/60">Reviews</div>
            </div>
            <div className="rounded-2xl border border-stone-line bg-white p-5 text-center">
              <div className="font-display text-3xl font-extrabold text-brand-700">7 days</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink/60">A week scheduling</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl">
            <Image src="/images/hero-cleanout.jpeg" alt="502 Junk Dept. crew clearing a Louisville property" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <WhyUs />
      <CTABand title="See why Louisville keeps calling us back." />
    </>
  );
}
