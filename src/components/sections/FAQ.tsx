"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          FAQ
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      </div>
      <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-stone-line bg-white px-6">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className={i === items.length - 1 ? "border-b-0" : ""}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
