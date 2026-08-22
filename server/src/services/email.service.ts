import { Resend } from "resend";
import type { ContactFormData } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailService {
  private readonly emailTo: string;

  constructor() {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER is missing");
    }

    this.emailTo = process.env.EMAIL_USER;
  }

  async sendContactEmail(data: ContactFormData): Promise<void> {
    const { name, email, subject, message } = data;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [this.emailTo],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message</h3>

        <p>${message}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }
  }

  async sendAutoReply(data: ContactFormData): Promise<void> {
    const { name, email, subject } = data;

    const { error } = await resend.emails.send({
      from: "Preeti Sonule <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
        <h2>Hi ${name} 👋</h2>

        <p>
          Thanks for reaching out through my portfolio.
        </p>

        <p>
          I've received your message regarding:
        </p>

        <p>
          <strong>${subject}</strong>
        </p>

        <p>
          I'll review your message and get back to you as soon as possible.
        </p>

        <br />

        <p>
          Best regards,<br />
          <strong>Preeti Sonule</strong><br />
          Software Engineer | Full-Stack Developer
        </p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }
  }
}