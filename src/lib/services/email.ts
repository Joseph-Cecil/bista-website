interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

interface EmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailOptions): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  // If no API key is configured, log in dev and skip in production
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.log("=== EMAIL (DEV MODE — no RESEND_API_KEY set) ===");
      console.log("To:", to);
      console.log("Subject:", subject);
      console.log("=====================================");
      return { success: true, id: "dev-mode" };
    }
    throw new Error("RESEND_API_KEY is not configured");
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const domain = new URL(siteUrl).hostname;

  // In development, Resend requires sending from onboarding@resend.dev
  // In production, use your own verified domain
  const fromAddress =
    process.env.NODE_ENV === "development"
      ? "BISTA Solutions <onboarding@resend.dev>"
      : `BISTA Solutions <noreply@${domain}>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to,
        subject,
        html,
        ...(replyTo && { reply_to: replyTo }),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    return { success: true, id: data.id };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown email error";
    console.error("Email send failed:", message);
    throw new Error(message);
  }
}

// ---- Email Templates ----

export function buildContactNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  ip: string;
}): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
    <body style="font-family: Inter, Arial, sans-serif; background: #f8fafc; padding: 40px 16px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <!-- Header -->
        <div style="background: #1e3a8a; padding: 32px; text-align: center;">
          <span style="font-size: 28px; font-weight: 900; color: white; letter-spacing: -0.03em;">
            BISTA<span style="color: #1d4ed8;">.</span>
          </span>
          <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin-top: 8px;">
            New Contact Form Submission
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 32px;">
          <p style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 24px;">
            You have received a new enquiry
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; background: #f8fafc; border-radius: 6px 6px 0 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
                Name
              </td>
              <td style="padding: 12px 16px; background: #f8fafc; border-radius: 6px 6px 0 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                ${data.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
                Email
              </td>
              <td style="padding: 12px 16px; font-size: 14px; color: #1d4ed8; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${data.email}" style="color: #1d4ed8;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f8fafc; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
                Phone
              </td>
              <td style="padding: 12px 16px; background: #f8fafc; font-size: 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                ${data.phone}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
                Subject
              </td>
              <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                ${data.subject}
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #1d4ed8;">
            <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
              Message
            </p>
            <p style="font-size: 14px; color: #0f172a; line-height: 1.625; white-space: pre-wrap;">
              ${data.message}
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 11px; color: #94a3b8; margin: 0;">
            Submitted from IP: ${data.ip} &bull;
            BISTA Solutions Limited, Accra, Ghana
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function buildContactConfirmationEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
    <body style="font-family: Inter, Arial, sans-serif; background: #f8fafc; padding: 40px 16px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: #1e3a8a; padding: 32px; text-align: center;">
          <span style="font-size: 28px; font-weight: 900; color: white; letter-spacing: -0.03em;">
            BISTA<span style="color: #1d4ed8;">.</span>
          </span>
        </div>
        <div style="padding: 40px 32px;">
          <h1 style="font-size: 24px; font-weight: 700; color: #1e3a8a; margin-bottom: 16px;">
            Thank you, ${name}.
          </h1>
          <p style="font-size: 15px; color: #64748b; line-height: 1.625; margin-bottom: 24px;">
            We have received your message and a member of our team will get
            back to you within <strong style="color: #0f172a;">1-2 business days</strong>.
          </p>
          <p style="font-size: 15px; color: #64748b; line-height: 1.625; margin-bottom: 32px;">
            In the meantime, feel free to explore our services or learn more
            about what we do at BISTA Solutions.
          </p>
          <div style="text-align: center;">
            <a
              href="${process.env.NEXT_PUBLIC_SITE_URL || "https://bistasolutions.com"}"
              style="display: inline-block; background: #1d4ed8; color: white; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none;"
            >
              Visit Our Website
            </a>
          </div>
        </div>
        <div style="padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            BISTA Solutions Limited &bull; BISTA House, Accra, Ghana
          </p>
          <p style="font-size: 12px; color: #94a3b8; margin: 4px 0 0;">
            +233 (0) 30 200 0000 &bull; info@bistasolutions.com
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
