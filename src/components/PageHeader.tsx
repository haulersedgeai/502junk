import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
  align = "left",
  variant = "warm",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { href?: string; label: string }[];
  align?: "left" | "center";
  variant?: "warm" | "dark";
}) {
  return (
    <section
      className={cn(
        "relative border-b",
        variant === "dark"
          ? "border-white/10 bg-ink text-white"
          : "border-stone-line bg-stone-warm text-ink"
      )}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20",
          align === "center" && "text-center"
        )}
      >
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-current/60">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-current">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-current/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            variant === "dark" ? "bg-white/10 text-white" : "bg-brand-600/10 text-brand-700"
          )}>
            {eyebrow}
          </span>
        )}
        <h1 className={cn(
          "mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl",
          align === "center" && "mx-auto max-w-3xl"
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn(
            "mt-4 text-pretty text-lg",
            variant === "dark" ? "text-white/75" : "text-ink/75",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
