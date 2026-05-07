interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: Bearer \,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: Your Company <noreply@\>,
      to,
      subject,
      html,
      ...(replyTo && { reply_to: replyTo }),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(Email sending failed: \A parameter cannot be found that matches parameter name 'Encoding'. A parameter cannot be found that matches parameter name 'Encoding'. The term 'claude' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again. The term 'claude' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again. The variable '$latest' cannot be retrieved because it has not been set.);
  }

  return response.json();
}
