import type { Metadata } from "next";
import { Phone, MessageSquare, Clock, ShieldCheck, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { QuoteForm } from "./QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote — 502 Junk Dept. Louisville",
  description: "Tell us what you've got. Free quotes, no obligation, fast response. Same-day pickup available in Louisville and Southern Indiana.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Quote"
        title="Tell us what you've got."
        subtitle="A quick form, a photo or two — we'll get you a price and a pickup window fast."
        crumbs={[{ href: "/", label: "Home" }, { label: "Get a Quote" }]}
        align="center"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-3 lg:px-6 lg:py-16">
        <div className="lg:col-span-2 rounded-2xl border border-stone-line bg-white p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-stone-line bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-extrabold text-ink">Prefer to talk?</h3>
            <p className="mt-2 text-sm text-ink/70">Real human, same number for calls and texts. We respond fast.</p>
            <a href={SITE.phoneHref} className="mt-4 flex items-center gap-3 rounded-lg border border-stone-line bg-stone-warm px-4 py-3">
              <Phone className="h-5 w-5 text-brand-700" />
              <span className="font-display text-lg font-extrabold text-ink">{SITE.phone}</span>
            </a>
            <a href={SITE.smsHref} className="mt-2 flex items-center gap-3 rounded-lg border border-stone-line bg-stone-warm px-4 py-3">
              <MessageSquare className="h-5 w-5 text-brand-700" />
              <span className="text-sm font-semibold text-ink">Text us a photo</span>
            </a>
          </div>

          <div className="rounded-2xl border border-stone-line bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-[var(--color-amber-bourbon)] fill-[var(--color-amber-bourbon)]" /> 5.0 stars / 115+ Google reviews</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-brand-700" /> Same-day or next-day pickup, 7 days a week</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-brand-700" /> Licensed and insured — Louisville crew</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-ink p-6 text-white shadow-sm">
            <h3 className="font-display text-lg font-extrabold">What happens next?</h3>
            <ol className="mt-3 space-y-2 text-sm text-white/80">
              <li><strong className="text-white">1.</strong> We respond by text or call — usually within an hour during business hours.</li>
              <li><strong className="text-white">2.</strong> We give you a ballpark price and a pickup window.</li>
              <li><strong className="text-white">3.</strong> Crew shows up, finalizes the quote on site, and only starts when you say go.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
