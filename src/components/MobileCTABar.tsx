import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-stone-line bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <a href={SITE.phoneHref} className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-ink">
        <Phone className="h-5 w-5 text-brand-600" />
        Call
      </a>
      <a href={SITE.smsHref} className="flex flex-col items-center justify-center gap-1 border-x border-stone-line py-2.5 text-[11px] font-semibold text-ink">
        <MessageSquare className="h-5 w-5 text-brand-600" />
        Text
      </a>
      <Link href="/get-a-quote" className="flex flex-col items-center justify-center gap-1 bg-brand-600 py-2.5 text-[11px] font-semibold text-white">
        <FileText className="h-5 w-5" />
        Quote
      </Link>
    </div>
  );
}
