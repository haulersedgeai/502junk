import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CTABand({
  title = "Need Space? Let's Clear It.",
  body = "Tell us what you've got. We'll quote it, schedule it, haul it. You'll have your space back today or tomorrow.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 lg:flex-row lg:items-center lg:px-6">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-white/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/get-a-quote">Get a Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="amber">
            <a href={SITE.phoneHref} className="gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
