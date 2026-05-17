"use client";

import { useActionState, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Upload, X } from "lucide-react";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitQuote, type QuoteState } from "./actions";

const SERVICE_OPTIONS = [
  "Junk Removal (General)",
  "Furniture Removal",
  "Appliance Removal",
  "Mattress Removal",
  "Hot Tub Removal",
  "Garage Cleanout",
  "Basement Cleanout",
  "Estate / Hoarder Cleanout",
  "Commercial / Office",
  "Demolition (Shed / Deck / Fence)",
  "Other",
];

const TIMING_OPTIONS = ["Today / ASAP", "This week", "Next week", "I'm flexible"];

const initial: QuoteState = { ok: false, message: "" };

export function QuoteForm() {
  const [state, formAction, isPending] = useActionState(submitQuote, initial);
  const [files, setFiles] = useState<File[]>([]);

  function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files ?? []).slice(0, 5);
    setFiles(list);
  }

  if (state.ok && state.message) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">Got it.</h3>
        <p className="mt-2 text-ink/80">{state.message}</p>
        <p className="mt-3 text-sm text-ink/60">If you need us right now, give us a call at <a href="tel:+15025019299" className="font-bold text-brand-700">(502) 501-9299</a>.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" encType="multipart/form-data">
      {state.message && !state.ok && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <Input name="name" required placeholder="First & last" />
        </Field>
        <Field label="Phone" required>
          <Input name="phone" type="tel" required placeholder="(502) 555-0123" />
        </Field>
        <Field label="Email">
          <Input name="email" type="email" placeholder="you@example.com" />
        </Field>
        <Field label="ZIP">
          <Input name="zip" placeholder="40202" />
        </Field>
      </div>

      <Field label="What do you need hauled?">
        <select
          name="service"
          className="flex h-11 w-full rounded-lg border border-stone-line bg-white px-3 py-2 text-base text-ink shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          defaultValue=""
        >
          <option value="" disabled>Pick a service</option>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      <Field label="When do you need us?">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {TIMING_OPTIONS.map((t, i) => (
            <label key={t} className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-stone-line bg-white px-3 py-2 text-sm font-semibold text-ink/80 hover:border-brand-200 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700">
              <input type="radio" name="timing" value={t} defaultChecked={i === 0} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Tell us about the job">
        <Textarea name="details" rows={5} placeholder="Approximate volume, items, access notes (stairs, basements, gates), gate codes, etc." />
      </Field>

      <Field label="Photos (optional, max 5)" hint="Photos help us give a faster, more accurate quote.">
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-stone-line bg-stone-warm px-4 py-6 text-sm font-semibold text-ink/70 hover:border-brand-200">
          <Upload className="h-4 w-4 text-brand-700" />
          {files.length ? `${files.length} file(s) selected` : "Tap to upload photos"}
          <input type="file" name="photos" accept="image/*" multiple onChange={onFiles} className="sr-only" />
        </label>
        {files.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-ink/60">
            {files.map((f) => (
              <li key={f.name} className="flex items-center gap-2">
                <X className="h-3 w-3" /> {f.name} ({Math.round(f.size / 1024)} KB)
              </li>
            ))}
          </ul>
        )}
      </Field>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isPending ? "Sending..." : "Get my free quote"}
      </Button>
      <p className="text-center text-xs text-ink/55">
        We respond fast — usually within an hour during business hours. By submitting, you agree to be contacted by phone, text, or email.
      </p>
    </form>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      {children}
      {hint && <div className="mt-1 text-xs text-ink/55">{hint}</div>}
    </div>
  );
}
