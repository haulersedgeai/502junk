"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES_BY_CATEGORY } from "@/content/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-extrabold text-white shadow-sm">
            502
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Junk <span className="text-brand-700">Dept.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-ink hover:text-brand-700">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-[640px] -translate-x-1/4 pt-1">
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-stone-line bg-white p-4 shadow-xl">
                  {SERVICES_BY_CATEGORY.map((cat) => (
                    <div key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        className="block rounded-md px-2 py-1 text-sm font-bold text-brand-700 hover:bg-stone-warm"
                      >
                        {cat.name}
                      </Link>
                      <ul className="mt-1 space-y-0.5">
                        {cat.services.slice(0, 8).map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block rounded-md px-2 py-1 text-sm text-ink/80 hover:bg-stone-warm hover:text-ink"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/locations" className="rounded-md px-3 py-2 text-sm font-semibold text-ink hover:text-brand-700">
            Service Areas
          </Link>
          <Link href="/pricing" className="rounded-md px-3 py-2 text-sm font-semibold text-ink hover:text-brand-700">
            Pricing
          </Link>
          <Link href="/about" className="rounded-md px-3 py-2 text-sm font-semibold text-ink hover:text-brand-700">
            About
          </Link>
          <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-semibold text-ink hover:text-brand-700">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-bold text-ink hover:text-brand-700">
            <Phone className="h-4 w-4 text-brand-600" />
            {SITE.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md p-2 lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-stone-line bg-white transition-[max-height] duration-300",
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Services
          </Link>
          {SERVICES_BY_CATEGORY.map((cat) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-6 py-1.5 text-sm text-ink/80"
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/locations" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Service Areas
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Pricing
          </Link>
          <Link href="/items-we-take" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Items We Take
          </Link>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Gallery
          </Link>
          <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Reviews
          </Link>
          <Link href="/faq" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            FAQ
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            About
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-base font-semibold text-ink">
            Contact
          </Link>
          <div className="flex gap-2 pt-3">
            <Button asChild className="flex-1">
              <Link href="/get-a-quote" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
