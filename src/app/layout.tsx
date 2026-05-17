import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { SITE } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Junk Removal & Cleanouts in Louisville, KY`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.shortPitch,
  openGraph: {
    title: `${SITE.name} | Junk Removal in Louisville, KY`,
    description: SITE.shortPitch,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.shortPitch,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    image: `${SITE.url}/images/hero-truck.jpeg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: [
      { "@type": "City", name: "Louisville", containedInPlace: "Kentucky" },
      { "@type": "City", name: "Jeffersonville", containedInPlace: "Indiana" },
      { "@type": "City", name: "New Albany", containedInPlace: "Indiana" },
      { "@type": "City", name: "Clarksville", containedInPlace: "Indiana" },
      { "@type": "AdministrativeArea", name: "Jefferson County, KY" },
      { "@type": "AdministrativeArea", name: "Oldham County, KY" },
      { "@type": "AdministrativeArea", name: "Bullitt County, KY" },
      { "@type": "AdministrativeArea", name: "Clark County, IN" },
      { "@type": "AdministrativeArea", name: "Floyd County, IN" },
    ],
    openingHoursSpecification: SITE.hours.json.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.rating,
      reviewCount: SITE.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.googleBusiness],
    founder: { "@type": "Person", name: SITE.ownerFullName },
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-stone-warm">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <MobileCTABar />
        <div className="h-14 lg:hidden" />
      </body>
    </html>
  );
}
