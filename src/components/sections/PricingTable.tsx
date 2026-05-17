import { Check } from "lucide-react";
import { PRICING_TIERS, INCLUDED_IN_EVERY_JOB } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

export function PricingTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Upfront Pricing
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          What we quote is what you pay.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">
          We price by volume — how much room your stuff takes up in the truck. You get a written, on-site quote before we touch a thing. No hidden fees, no surprise charges, no last-minute add-ons.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_TIERS.map((t, i) => (
          <div
            key={t.name}
            className={`rounded-2xl border bg-white p-6 shadow-sm ${
              i === 3 ? "border-brand-600 ring-2 ring-brand-600/30" : "border-stone-line"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-extrabold text-ink">{t.name}</h3>
              {i === 3 && (
                <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Most booked
                </span>
              )}
            </div>
            <div className="mt-3 font-display text-4xl font-extrabold text-brand-700">{formatPrice(t.price)}</div>
            <p className="mt-2 text-sm text-ink/70">{t.blurb}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-stone-line bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-extrabold text-ink">What's included in every job</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED_IN_EVERY_JOB.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-ink/55">
          All prices are subject to the volume of junk removed. Our team provides a final written quote on site before any work begins. You only pay when you're satisfied.
        </p>
      </div>
    </section>
  );
}
