import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const TO_EMAIL = "cohenyar21@gmail.com";
const SUBJECT = "yarin website";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(255),
  type: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const FROM_EMAIL =
          process.env.CONTACT_FROM_EMAIL || "COYA Studio <onboarding@resend.dev>";
        const TO = process.env.CONTACT_TO_EMAIL || TO_EMAIL;

        if (!RESEND_API_KEY) {
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
        ].join("\n");

        const esc = (s: string) =>
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const html = `<div style="font-family:Arial,sans-serif;line-height:1.6">
  <h2>New contact form submission — COYA Studio</h2>
  <p><strong>Name:</strong> ${esc(name)}</p>
  <p><strong>Phone:</strong> ${esc(phone)}</p>
  <p><strong>Email:</strong> ${esc(email)}</p>
  <p><strong>Interested in:</strong> ${esc(type || "-")}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space:pre-wrap">${esc(message)}</p>
</div>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO],
            reply_to: `${name} <${email}>`,
            subject: SUBJECT,
            text,
            html,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Resend send failed", res.status, errText);
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
