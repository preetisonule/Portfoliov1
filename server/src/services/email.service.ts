// src/services/email.service.ts
import { transporter } from "../config/nodemailer";
import type { ContactFormData } from "../types";

export class EmailService {
  private readonly fromEmail: string;

  constructor() {
    this.fromEmail = process.env.EMAIL_USER!;
  }

  async sendContactEmail(data: ContactFormData): Promise<void> {
    const { name, email, subject, message } = data;

    // Email to YOU
    const mailOptions = {
      from: this.fromEmail,
      to: this.fromEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #e8a23a; color: #fff; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 8px; background: #fff; border-radius: 4px; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📝 Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                Sent from your portfolio website
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
  }

  async sendAutoReply(data: ContactFormData): Promise<void> {
    const { name, email } = data;

    const autoReply = {
      from: this.fromEmail,
      to: email,
      subject: "Thank you for reaching out! ✨",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #e8a23a; color: #fff; padding: 30px 20px; text-align: center; }
              .content { padding: 30px 20px; background: #f9f9f9; }
              .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e8a23a; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>👋 Hi ${name}!</h2>
              </div>
              <div class="content">
                <p>Thank you for reaching out to me! 🎉</p>
                <p>I've received your message and will get back to you within <strong>24-48 hours</strong>.</p>
                <p>In the meantime, feel free to connect with me on:</p>
                <ul>
                  <li>🐙 <a href="https://github.com/preetisonule">GitHub</a></li>
                  <li>🔗 <a href="https://linkedin.com/in/preeti-sonule">LinkedIn</a></li>
                  <li>📷 <a href="https://instagram.com/preetyy.sonule">Instagram</a></li>
                </ul>
                <div class="signature">
                  <p style="font-size: 18px; font-weight: bold; color: #e8a23a;">Preeti Sonule</p>
                  <p style="font-size: 14px; color: #555;">Software Engineer | Full-Stack Developer</p>
                </div>
              </div>
              <div class="footer">
                This is an automated reply. I'll personally respond to you soon! 🚀
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReply);
  }
}