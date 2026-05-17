import Link from "next/link";
import Image from "next/image";
import { Star, Phone, MessageSquare, ShieldCheck, Clock, Truck } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-warm">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-12 lg:gap-12 lg:px-6 lg:py-20">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
            <Truck className="h-3.5 w-3.5" /> Louisville • Southern Indiana • 7 Days a Week
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            We Want <span className="text-brand-700">Louisville's</span> Junk.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-ink/75">
            Fast, local, same-day junk removal, full property cleanouts, and light demolition. Upfront volume pricing, no hidden fees, and a crew that actually shows up on time.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="xl">
              <Link href="/get-a-quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="dark">
              <a href={SITE.phoneHref} className="gap-2">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </Button>
            <a href={SITE.smsHref} className="flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-brand-700">
              <MessageSquare className="h-4 w-4" /> or text us
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-ink/75">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
              <span className="ml-1 font-semibold text-ink">{SITE.reviews.rating.toFixed(1)} / {SITE.reviews.count}+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-700" /> Licensed & insured
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-700" /> Same-day available
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/hero-truck.jpeg"
              alt="502 Junk Dept. truck loaded after a Louisville cleanout"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-ink px-5 py-4 text-white shadow-xl">
            <div className="font-display text-2xl font-extrabold">From $125</div>
            <div className="text-xs text-white/70">Volume-based, on-site quote</div>
          </div>
          <div className="absolute -top-3 -right-3 rotate-3 rounded-xl bg-[var(--color-amber-bourbon)] px-4 py-3 font-display font-extrabold text-ink shadow-xl">
            5.0 ★ Google
          </div>
        </div>
      </div>
    </section>
  );
}
