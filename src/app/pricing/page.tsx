import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PricingTable } from "@/components/sections/PricingTable";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Junk Removal Pricing in Louisville, KY — Upfront Volume Quotes",
  description:
    "Transparent, volume-based junk removal pricing in Louisville. From $125 minimum loads to $975 XL property cleanouts. Written quotes on site, no hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Upfront pricing for your junk removal."
        subtitle="At 502 Junk Dept., pricing should be simple, transparent, and honest. We quote by volume — how much space your stuff takes up in the truck. No surprise charges, no add-ons, no per-item games."
        crumbs={[{ href: "/", label: "Home" }, { label: "Pricing" }]}
        align="center"
      />
      <PricingTable />
      <FAQ items={FAQS.filter(f => /pric|estimate|fee/i.test(f.q + f.a)).concat(FAQS.slice(0, 4)).slice(0, 6)} title="Pricing questions" />
      <CTABand title="Ready for a real quote?" body="Call or text us a couple of photos. You'll have a ballpark in minutes and a written on-site quote before any work begins." />
    </>
  );
}
