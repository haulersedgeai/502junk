import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Gallery — 502 Junk Dept. Hauls Around Louisville",
  description:
    "Truck-load shots, before-and-afters, and the kinds of cleanouts we tackle every week across Louisville, KY and Southern Indiana.",
};

const PHOTOS = [
  { src: "/images/hero-truck.jpeg", alt: "Truck loaded after a Louisville cleanout", tag: "Truck-load" },
  { src: "/images/hero-cleanout.jpeg", alt: "Crew clearing a full property", tag: "Property cleanout" },
];

const PLACEHOLDERS = [
  { tag: "Garage cleanout", caption: "St. Matthews — 2-car garage cleared in one visit" },
  { tag: "Furniture haul", caption: "Highlands — sectional, mattresses, dressers, gone" },
  { tag: "Deck demo", caption: "Jeffersontown — old deck torn off, site swept" },
  { tag: "Estate cleanout", caption: "Crescent Hill — 3-bedroom estate, broom-clean for sale" },
  { tag: "Hot tub removal", caption: "Prospect — cut, hauled, patio left intact" },
  { tag: "Shed demolition", caption: "Anchorage — old wood shed dismantled and removed" },
  { tag: "Office cleanout", caption: "Downtown Louisville — office desks, files, electronics" },
  { tag: "Yard waste", caption: "Fern Creek — post-storm brush pile cleared same day" },
  { tag: "Basement cleanout", caption: "Old Louisville — Victorian basement emptied" },
  { tag: "Appliance pickup", caption: "Clarksville, IN — fridge, washer, dryer, hauled" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Real Louisville hauls."
        subtitle="Every truck-load is a small win for somebody's basement, garage, or back yard. Here's a look at the kinds of jobs we run every week."
        crumbs={[{ href: "/", label: "Home" }, { label: "Gallery" }]}
        align="center"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="group relative overflow-hidden rounded-2xl border border-stone-line bg-white shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-white">
                {p.tag}
              </figcaption>
            </figure>
          ))}

          {PLACEHOLDERS.map((p, i) => (
            <figure key={i} className="relative overflow-hidden rounded-2xl border border-stone-line shadow-sm">
              <div
                className="relative flex aspect-[4/5] items-end justify-start p-5 text-white"
                style={{
                  background: `linear-gradient(135deg, ${i % 2 ? "var(--color-brand-700)" : "var(--color-ink)"}, ${i % 2 ? "var(--color-brand-900)" : "var(--color-brand-800)"})`,
                }}
              >
                <div className="bg-noise absolute inset-0 opacity-50" />
                <div className="relative">
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {p.tag}
                  </span>
                  <div className="mt-3 font-display text-base font-extrabold leading-snug">
                    {p.caption}
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <CTABand title="Got your own before-and-after waiting to happen?" />
    </>
  );
}
