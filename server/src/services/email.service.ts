import { Resend } from "resend";
import type { ContactFormData } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailService {
  private readonly emailTo: string;

  constructor() {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    this.emailTo = "preetisonule3186@gmail.com";
  }

  async sendContactEmail(data: ContactFormData): Promise<void> {
    const { name, email, subject, message } = data;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [this.emailTo],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h2>📩 New Portfolio Contact</h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <h3>Message</h3>

          <p style="white-space: pre-wrap;">
            ${message}
          </p>

          <hr />

          <p style="color: #777;">
            Sent from Preeti Sonule's portfolio.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }
  }
}