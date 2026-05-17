import { Clock, ShieldCheck, DollarSign, Recycle, Phone, MapPin, Heart, Truck } from "lucide-react";

const REASONS = [
  { icon: Clock, title: "Same-Day Service", body: "Most weeks we can get you on the schedule today or tomorrow — including Saturdays and Sundays." },
  { icon: DollarSign, title: "Upfront Volume Pricing", body: "No per-item games. Tiered pricing by truck-load. Written quote before any work begins." },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Fully covered for residential and commercial work. COIs available for property managers." },
  { icon: Recycle, title: "Recycle, Donate, Dispose", body: "Whatever can be donated or recycled goes to local Louisville partners first." },
  { icon: MapPin, title: "Locally Owned", body: "Hunter Rowe and a Louisville crew — not a franchise call center." },
  { icon: Truck, title: "Full-Service Hauling", body: "You point, we carry. Basements, attics, sheds, third floors — no extra charge for stairs." },
  { icon: Heart, title: "Five-Star Reputation", body: "5.0 stars from 115+ Google reviews and counting. We work hard to keep it that way." },
  { icon: Phone, title: "Real Humans Answer", body: "Call or text the same number for quotes, scheduling, and questions. No phone-tree maze." },
];

export function WhyUs() {
  return (
    <section className="border-y border-stone-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Why 502 Junk Dept.
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">Built on showing up.</h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="rounded-2xl border border-stone-line bg-stone-warm p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm text-ink/75">{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
