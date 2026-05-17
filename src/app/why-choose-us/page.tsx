import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhyUs } from "@/components/sections/WhyUs";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Choose 502 Junk Dept. — Louisville Junk Removal",
  description:
    "Five-star, locally owned, licensed and insured. Same-day pickup. Upfront volume pricing. Real humans answer the phone. Here's why Louisville keeps choosing 502 Junk Dept.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="Eight reasons Louisville keeps calling us back."
        subtitle="There are a lot of trucks with magnetic signs out there. Here's what makes us different."
        crumbs={[{ href: "/", label: "Home" }, { label: "Why Choose Us" }]}
        align="center"
      />
      <WhyUs />
      <ReviewsSection />
      <CTABand />
    </>
  );
}
