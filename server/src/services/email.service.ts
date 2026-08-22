// src/services/email.service.ts

import { transporter } from "../config/nodemailer";
import type { ContactFormData } from "../types";

export class EmailService {
  private readonly fromEmail: string;

  constructor() {
    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER is not configured");
    }

    this.fromEmail = process.env.EMAIL_USER;
  }

  /**
   * Send contact form submission to Preeti
   */
  async sendContactEmail(data: ContactFormData): Promise<void> {
    const { name, email, subject, message } = data;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${this.fromEmail}>`,
      to: this.fromEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 30px;
          background: #f7f7f7;
        ">
          <div style="
            background: #e8a23a;
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
          ">
            <h2 style="margin: 0;">
              New Portfolio Contact
            </h2>
          </div>

          <div style="
            background: white;
            padding: 25px;
            border-radius: 0 0 10px 10px;
          ">

            <p>
              <strong>Name:</strong><br>
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong><br>
              ${subject}
            </p>

            <p>
              <strong>Message:</strong><br>
              ${message}
            </p>

            <hr>

            <p style="font-size: 13px; color: #777;">
              You can reply directly to this email to respond to ${name}.
            </p>

          </div>
        </div>
      `,
    });
  }

  /**
   * Send automatic confirmation to the person who contacted you
   */
  async sendAutoReply(data: ContactFormData): Promise<void> {
    const { name, email, subject } = data;

    await transporter.sendMail({
      from: `"Preeti Sonule" <${this.fromEmail}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 30px;
          background: #f7f7f7;
        ">

          <div style="
            background: #e8a23a;
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
          ">
            <h2 style="margin: 0;">
              Thanks for reaching out!
            </h2>
          </div>

          <div style="
            background: white;
            padding: 25px;
            border-radius: 0 0 10px 10px;
          ">

            <p>Hi ${name},</p>

            <p>
              Thanks for contacting me through my portfolio.
              I've received your message regarding:
            </p>

            <p>
              <strong>${subject}</strong>
            </p>

            <p>
              I'll review your message and get back to you as soon as possible.
            </p>

            <br>

            <p>
              Best regards,<br>
              <strong>Preeti Sonule</strong><br>
              Software Engineer | Full-Stack Developer
            </p>

            <hr>

            <p style="font-size: 13px; color: #777;">
              GitHub:
              <a href="https://github.com/preetisonule">
                github.com/preetisonule
              </a>
            </p>

            <p style="font-size: 13px; color: #777;">
              LinkedIn:
              <a href="https://linkedin.com/in/preeti-sonule">
                linkedin.com/in/preeti-sonule
              </a>
            </p>

          </div>
        </div>
      `,
    });
  }
}