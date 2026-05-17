import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageSquare, Clock, MapPin, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact 502 Junk Dept. — Louisville, KY",
  description: "Call or text (502) 501-9299 for fast, friendly junk removal and cleanouts in Louisville and Southern Indiana. 7 days a week.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Pick up the phone. We'll do the rest."
        subtitle="Call, text, or fill out the quote form. We answer 7 days a week and reply fast."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        align="center"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-20">
        <div className="rounded-2xl border border-stone-line bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-extrabold text-ink">Get a hold of us</h2>
          <p className="mt-2 text-ink/70">Same number works for calls, texts, and pictures of your pile.</p>

          <div className="mt-6 space-y-4">
            <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-xl border border-stone-line bg-stone-warm p-4 hover:border-brand-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink/60">Call</div>
                <div className="font-display text-lg font-extrabold text-ink">{SITE.phone}</div>
              </div>
            </a>
            <a href={SITE.smsHref} className="flex items-center gap-3 rounded-xl border border-stone-line bg-stone-warm p-4 hover:border-brand-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white"><MessageSquare className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink/60">Text</div>
                <div className="font-display text-lg font-extrabold text-ink">{SITE.phone}</div>
              </div>
            </a>
            <Link href="/get-a-quote" className="flex items-center gap-3 rounded-xl border border-stone-line bg-stone-warm p-4 hover:border-brand-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink/60">Online</div>
                <div className="font-display text-lg font-extrabold text-ink">Free Quote Form</div>
              </div>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a href={SITE.socials.facebook} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-lg border border-stone-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-brand-200">
              <FacebookIcon className="h-4 w-4 text-brand-700" /> Facebook
            </a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-lg border border-stone-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-brand-200">
              <InstagramIcon className="h-4 w-4 text-brand-700" /> Instagram
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-stone-line bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-brand-700"><Clock className="h-5 w-5" /><span className="font-semibold uppercase text-xs tracking-wider">Hours</span></div>
            <div className="mt-2 font-display text-2xl font-extrabold text-ink">{SITE.hours.display}</div>
            <p className="mt-2 text-sm text-ink/70">We book seven days a week, including evenings and Sundays. Saturdays book up first — call early in the week if you need a weekend slot.</p>
          </div>
          <div className="rounded-2xl border border-stone-line bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-brand-700"><MapPin className="h-5 w-5" /><span className="font-semibold uppercase text-xs tracking-wider">Service Area</span></div>
            <div className="mt-2 font-display text-2xl font-extrabold text-ink">Louisville Metro & Southern Indiana</div>
            <p className="mt-2 text-sm text-ink/70">Jefferson, Oldham, Bullitt, and Shelby counties on the KY side. Clark, Floyd, and Harrison counties in Southern Indiana. <Link href="/locations" className="font-semibold text-brand-700 hover:underline">See all service areas →</Link></p>
          </div>
          <div className="rounded-2xl bg-ink p-8 text-white shadow-sm">
            <h3 className="font-display text-xl font-extrabold">Need it gone today?</h3>
            <p className="mt-2 text-white/75 text-sm">Same-day pickup is usually available — call now and we'll see what we can do.</p>
            <Button asChild className="mt-4">
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
