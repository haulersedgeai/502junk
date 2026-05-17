import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { PricingTable } from "@/components/sections/PricingTable";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AreaList } from "@/components/sections/AreaList";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FAQS } from "@/content/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <WhyUs />
      <PricingTable />
      <ReviewsSection />
      <AreaList />
      <FAQ items={FAQS.slice(0, 6)} />
      <CTABand />
    </>
  );
}
