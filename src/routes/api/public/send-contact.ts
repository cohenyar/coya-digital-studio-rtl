import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const TO_EMAIL = "cohenyar21@gmail.com";
const SUBJECT = "yarin website";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(255),
  type: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

function b64url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function encodeSubject(s: string): string {
  return `=?UTF-8?B?${btoa(unescape(encodeURIComponent(s)))}?=`;
}

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
          return new Response(JSON.stringify({ error: "Email not configured" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "Invalid input", details: parsed.error.flatten() }),
            { status: 400, headers: { "content-type": "application/json" } },
          );
        }
        const { name, phone, email, type, message } = parsed.data;

        const text = [
          `New contact form submission — COYA Studio`,
          ``,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Interested in: ${type || "-"}`,
          ``,
          `Message:`,
          message,
        ].join("\r\n");

        const raw = [
          `To: ${TO_EMAIL}`,
          `Reply-To: ${name} <${email}>`,
          `Subject: ${encodeSubject(SUBJECT)}`,
          `MIME-Version: 1.0`,
          `Content-Type: text/plain; charset="UTF-8"`,
          `Content-Transfer-Encoding: 8bit`,
          ``,
          text,
        ].join("\r\n");

        const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
          },
          body: JSON.stringify({ raw: b64url(raw) }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Gmail send failed", res.status, errText);
          return new Response(JSON.stringify({ error: "Failed to send" }), {
            status: 502,
            headers: { "content-type": "application/json" },
          });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
