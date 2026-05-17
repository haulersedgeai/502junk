import { PhoneCall, CalendarCheck, Truck } from "lucide-react";

const STEPS = [
  { icon: PhoneCall, n: "1", title: "Call, text, or quote online", body: "Tell us what you've got. A couple of photos is plenty. We'll give you a ballpark on the spot." },
  { icon: CalendarCheck, n: "2", title: "Pick a time", body: "Same-day, next-day, or pick a window that works. We book 7 days a week, including evenings." },
  { icon: Truck, n: "3", title: "We haul it. You relax.", body: "On-site written quote first. You approve, we load, we sweep up, we leave it cleaner than we found it." },
];

export function HowItWorks() {
  return (
    <section className="border-y border-stone-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Junk removal in 3 simple steps
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink/70">
            The stress-free way to clear your space. No upselling, no surprise fees — just a fair quote and a hard-working crew.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-2xl border border-stone-line bg-stone-warm p-6">
                <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 font-display text-base font-extrabold text-white shadow-md">
                  {s.n}
                </span>
                <Icon className="mt-3 h-7 w-7 text-brand-700" />
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
