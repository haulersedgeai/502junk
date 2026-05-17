import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700",
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-stone-line bg-white px-5 py-4 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-ink">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60">{label}</div>
    </div>
  );
}
