import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ — Junk Removal Questions Answered",
  description: "Common questions about junk removal in Louisville, KY — pricing, scheduling, service area, what we take, demolition, commercial accounts, and more.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="The questions Louisville folks ask most."
        subtitle="If your question isn't here, just call or text us — same number, real human."
        crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
        align="center"
      />
      <FAQ items={FAQS} title="" />
      <CTABand />
    </>
  );
}
