import Link from "next/link";
import { Phone, MessageSquare, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { SITE } from "@/lib/site";
import { SERVICES_BY_CATEGORY } from "@/content/services";
import { KY_CITIES, IN_CITIES, LOUISVILLE_NEIGHBORHOODS } from "@/content/locations";

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-5 lg:px-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-extrabold text-white shadow-sm">
              502
            </span>
            <span className="font-display text-xl font-extrabold text-white">
              Junk <span className="text-brand-400">Dept.</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Locally owned junk removal, cleanouts, and light demolition serving the entire Louisville metro and Southern Indiana. Same-day service available 7 days a week.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
            <Star className="h-4 w-4 fill-[var(--color-amber-bourbon)] text-[var(--color-amber-bourbon)]" />
            <span className="font-semibold">{SITE.reviews.rating.toFixed(1)} from {SITE.reviews.count}+ {SITE.reviews.source} reviews</span>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold hover:text-brand-400">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={SITE.smsHref} className="flex items-center gap-2 hover:text-brand-400">
              <MessageSquare className="h-4 w-4" /> Text us at {SITE.phone}
            </a>
            <div className="text-white/60">{SITE.hours.display}</div>
          </div>

          <div className="mt-4 flex gap-3">
            <a href={SITE.socials.facebook} className="rounded-md bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={SITE.socials.instagram} className="rounded-md bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES_BY_CATEGORY.map((c) => (
              <li key={c.slug}>
                <Link href={`/services/${c.slug}`} className="hover:text-brand-400">{c.name}</Link>
              </li>
            ))}
            <li><Link href="/services" className="hover:text-brand-400">All Services</Link></li>
            <li><Link href="/items-we-take" className="hover:text-brand-400">Items We Take</Link></li>
            <li><Link href="/pricing" className="hover:text-brand-400">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Top Service Areas</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {KY_CITIES.slice(0, 6).map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:text-brand-400">{l.name}, KY</Link></li>
            ))}
            {IN_CITIES.slice(0, 3).map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:text-brand-400">{l.name}, IN</Link></li>
            ))}
            <li><Link href="/locations" className="hover:text-brand-400">All Areas →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-400">About</Link></li>
            <li><Link href="/why-choose-us" className="hover:text-brand-400">Why Choose Us</Link></li>
            <li><Link href="/reviews" className="hover:text-brand-400">Reviews</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-400">Gallery</Link></li>
            <li><Link href="/faq" className="hover:text-brand-400">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-brand-400">Contact</Link></li>
            <li><Link href="/get-a-quote" className="hover:text-brand-400">Get a Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <div>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</div>
          <div>Locally owned • Licensed & insured • Serving Louisville and Kentuckiana</div>
        </div>
      </div>
    </footer>
  );
}
