import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { ITEMS_WE_TAKE, ITEMS_WE_DONT_TAKE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Items We Take — Junk Removal Louisville KY",
  description:
    "Furniture, appliances, mattresses, electronics, yard waste, construction debris, hot tubs, pianos — full list of items 502 Junk Dept. removes in Louisville and Kentuckiana.",
};

export default function ItemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Haul"
        title="If it's bulky, broken, or in the way — we'll take it."
        subtitle="Almost anything goes. Below is the full list of what we routinely haul, plus the short list of items we can't legally take."
        crumbs={[{ href: "/", label: "Home" }, { label: "Items We Take" }]}
        align="center"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-3 lg:px-6 lg:py-20">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-extrabold text-ink">We take all of this and more.</h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {ITEMS_WE_TAKE.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-lg border border-stone-line bg-white px-3 py-2 text-sm text-ink/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/70">
            Don't see what you've got on the list? Just call or text us a photo. The answer is almost always yes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink">What we can't take</h2>
          <p className="mt-2 text-sm text-ink/70">A few items are regulated or prohibited. Kentucky and Indiana have specific disposal channels for these.</p>
          <ul className="mt-5 space-y-2">
            {ITEMS_WE_DONT_TAKE.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-lg border border-stone-line bg-stone-warm px-3 py-2 text-sm text-ink/85">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand title="Got a pile of mystery items?" body="Send us a couple of photos and we'll tell you exactly what's haulable." />
    </>
  );
}
