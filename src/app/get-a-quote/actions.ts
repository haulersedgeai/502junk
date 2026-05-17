"use server";

import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";
import { SITE } from "@/lib/site";

export type QuoteState = {
  ok: boolean;
  message: string;
};

const MAX_FILES = 5;
const MAX_BYTES = 8 * 1024 * 1024;

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  try {
    // Honeypot
    const honeypot = formData.get("company_website");
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return { ok: true, message: "Thanks! We'll be in touch." };
    }

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const zip = String(formData.get("zip") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const timing = String(formData.get("timing") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    if (!name || !phone) {
      return { ok: false, message: "Please include your name and phone number so we can reach you." };
    }

    const photos = formData.getAll("photos") as File[];
    const validPhotos: { name: string; type: string; size: number; buffer: Buffer }[] = [];
    for (const f of photos.slice(0, MAX_FILES)) {
      if (!f || typeof f === "string") continue;
      if (f.size === 0) continue;
      if (f.size > MAX_BYTES) {
        return { ok: false, message: `Photo "${f.name}" is over 8MB. Please send a smaller file.` };
      }
      const buf = Buffer.from(await f.arrayBuffer());
      validPhotos.push({ name: f.name, type: f.type || "application/octet-stream", size: f.size, buffer: buf });
    }

    const subject = `New quote request — ${name} (${service || "Junk Removal"})`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "(none)"}`,
      `ZIP: ${zip || "(none)"}`,
      `Service: ${service || "(unspecified)"}`,
      `Timing: ${timing || "(unspecified)"}`,
      "",
      "Details:",
      details || "(none)",
      "",
      `Photos attached: ${validPhotos.length}`,
    ].join("\n");

    const html = `
      <h2 style="font-family:sans-serif;margin:0 0 12px;">New quote request</h2>
      <p style="font-family:sans-serif;line-height:1.5;">
        <strong>Name:</strong> ${escape(name)}<br/>
        <strong>Phone:</strong> ${escape(phone)}<br/>
        <strong>Email:</strong> ${escape(email || "(none)")}<br/>
        <strong>ZIP:</strong> ${escape(zip || "(none)")}<br/>
        <strong>Service:</strong> ${escape(service || "(unspecified)")}<br/>
        <strong>Timing:</strong> ${escape(timing || "(unspecified)")}<br/>
      </p>
      <p style="font-family:sans-serif;white-space:pre-wrap;line-height:1.5;"><strong>Details:</strong><br/>${escape(details || "(none)")}</p>
      <p style="font-family:sans-serif;color:#777;font-size:12px;">${validPhotos.length} photo(s) attached.</p>
    `;

    const key = process.env.RESEND_API_KEY;
    const to = process.env.QUOTE_TO_EMAIL || SITE.email;
    const from = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

    if (!key) {
      // Fallback: write to /tmp for local dev
      try {
        const dir = "/tmp/502junk-quotes";
        await fs.mkdir(dir, { recursive: true });
        const stamp = new Date().toISOString().replace(/[:.]/g, "-");
        await fs.writeFile(path.join(dir, `quote-${stamp}.txt`), text);
        for (const p of validPhotos) {
          await fs.writeFile(path.join(dir, `quote-${stamp}-${p.name}`), p.buffer);
        }
      } catch {
        // ignore
      }
      return { ok: true, message: "Thanks! Got it — we'll reach out shortly. (RESEND_API_KEY not set; logged locally.)" };
    }

    const resend = new Resend(key);
    await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email || undefined,
      attachments: validPhotos.map((p) => ({ filename: p.name, content: p.buffer })),
    });

    return { ok: true, message: "Thanks! We got your request. Expect a call or text shortly." };
  } catch (err) {
    console.error("submitQuote error", err);
    return { ok: false, message: "Something went wrong on our end. Please call or text us at (502) 501-9299." };
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
